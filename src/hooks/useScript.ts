import { useState, useEffect } from "react";
import { isBrowser } from "../utils";

interface ScriptStatus {
	loading: boolean;
	error: Error | null;
}

interface UseScript {
	(src: string, options: options): ScriptStatus;
}
interface options {
	removeOnUnmount?: boolean;
	async?: boolean;
	defer?: boolean;
}

/**
 * Hook to dynamically load an external script.
 *
 * @param src - The URL of the script to load.
 * @param options - An object containing options for the script.
 * @returns An object containing the script loading status and any potential error.
 */
const useScript: UseScript = (
	src: string,
	{ removeOnUnmount = true, async = true, defer = false }: options
) => {
	const [status, setStatus] = useState<ScriptStatus>({
		loading: true,
		error: null,
	});

	useEffect(() => {
		if (!isBrowser()) return;

		const script = document.createElement("script");
		script.src = src;
		script.async = async;
		script.defer = defer;

		const handleLoad = () => {
			setStatus({ loading: false, error: null });
		};

		const handleError = () => {
			setStatus({
				loading: false,
				error: new Error(`Failed to load script: ${src}`),
			});
		};

		script.addEventListener("load", handleLoad);
		script.addEventListener("error", handleError);

		document.body.appendChild(script);

		return () => {
			script.removeEventListener("load", handleLoad);
			script.removeEventListener("error", handleError);
			if (removeOnUnmount) {
				document.body.removeChild(script);
			}
		};
	}, [src]);

	return status;
};

export default useScript;
