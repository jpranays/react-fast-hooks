import { useState, useEffect } from "react";
import { isBrowser } from "../utils";

/**
 * Hook to detect media query matches.
 *
 * @param query The media query string to match against.
 * @returns A boolean true if the media query matches, otherwise false.
 */
const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState<boolean>(() => {
		if (isBrowser() && window.matchMedia) {
			return window.matchMedia(query).matches;
		}
		return false;
	});

	useEffect(() => {
		if (!isBrowser() || !window.matchMedia) {
			return;
		}

		const mediaQueryList = window.matchMedia(query);

		const handleChange = (event: MediaQueryListEvent) => {
			setMatches(event.matches);
		};

		mediaQueryList.addEventListener("change", handleChange);

		return () => {
			mediaQueryList.removeEventListener("change", handleChange);
		};
	}, [query]);

	return matches;
};

export default useMediaQuery;
