import { useState, useEffect, useCallback, RefObject } from "react";
import { isBrowser } from "../utils";

interface IntersectionObserverOptions {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number | number[];
}

interface UseIntersectionObserver {
	(
		ref: RefObject<HTMLElement>,
		options?: IntersectionObserverOptions
	): IntersectionObserverEntry | null;
}

/**
 * Hook to observe the visibility of an element using the Intersection Observer API.
 *
 * @param {React.RefObject<HTMLElement>} ref - A ref to the element to observe.
 * @param {IntersectionObserverOptions} [options] - The Intersection Observer options.
 * @returns The IntersectionObserverEntry providing information about the intersection of the target with the root.
 */
const useIntersectionObserver: UseIntersectionObserver = (
	ref: React.RefObject<HTMLElement>,
	options: IntersectionObserverOptions = {}
) => {
	const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

	useEffect(() => {
		if (!isBrowser() || !ref.current) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => setEntry(entry),
			options
		);

		const element = ref.current;
		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, []);

	return entry;
};

export default useIntersectionObserver;
