import { useCallback, useRef } from "react";
import { isBrowser, debounce } from "../utils";

/**
 * Hook to create a debounced version of a callback function.
 *
 * @param {Function} callback - The original callback function to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns A debounced version of the callback function.
 */
const useDebouncedCallback = (callback: Function, delay: number): Function => {
	const callbackRef = useRef(callback);

	callbackRef.current = callback;

	return useCallback(
		debounce((...args: any) => {
			if (isBrowser()) {
				callbackRef.current(...args);
			}
		}, delay),
		[delay]
	);
};

export default useDebouncedCallback;
