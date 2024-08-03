import { useRef, useEffect } from "react";
import { isBrowser } from "../utils";

/**
 Hook to get the previous value of a state or prop.
 *
 * @returns {T | undefined} The previous value of the state or prop.
 */
export default function usePrevious<T>(value: T): T | undefined {
	const ref = useRef<T>();
	useEffect(() => {
		if (isBrowser()) {
			ref.current = value;
		}
	}, [value]);

	return ref.current;
}
