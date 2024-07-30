import { useState, useEffect } from "react";
import { isBrowser } from "../utils";

/**
 * Hook to track the focus state of the window.
 *
 * @returns A boolean indicating whether the window is focused.
 */
const useWindowFocus = (): boolean => {
  const [isFocused, setIsFocused] = useState<boolean>(isBrowser() ? document.hasFocus() : false);

  useEffect(() => {
    if (!isBrowser()) {
      return;
    }

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return isFocused;
};

export default useWindowFocus;
