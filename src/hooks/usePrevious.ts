import { useRef, useEffect } from "react";
import { isBrowser } from "../utils";

export default function usePrevious<T>(value: T): T | undefined {
	const currentRef = useRef<T>(value);
	const previousRef = useRef<T>();

	useEffect(() => {
		if (isBrowser()) {
			if (currentRef.current !== value) {
				previousRef.current = currentRef.current;
				currentRef.current = value;
			}
		}
	}, [value]);

	return previousRef.current;
}
