import { useState, useEffect } from "react";
import { isBrowser } from "../utils";

interface ScriptStatus {
  loading: boolean;
  error: Error | null;
}

interface UseScript {
  (src: string): ScriptStatus;
}

/**
 * Hook to dynamically load an external script.
 *
 * @param {string} src - The URL of the external script to load.
 * @returns An object containing the script loading status and any potential error.
 */
const useScript: UseScript = (src: string) => {
  const [status, setStatus] = useState<ScriptStatus>({
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!isBrowser()) return;

    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    const handleLoad = () => {
      setStatus({ loading: false, error: null });
    };

    const handleError = () => {
      setStatus({ loading: false, error: new Error(`Failed to load script: ${src}`) });
    };

    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
      document.body.removeChild(script);
    };
  }, [src]);

  return status;
};

export default useScript;
