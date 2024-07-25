import { useState, useEffect, useCallback } from "react";
import { isBrowser, throttle } from "../utils";

interface ScrollPosition {
	x: number;
	y: number;
}

interface UseScrollPosition {
	(
		elementRef: React.RefObject<HTMLElement>,
		throttleTime?: number
	): ScrollPosition;
}

/**
 * Hook to get the current scroll position of a specified element.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - A ref to the element to track the scroll position.
 * @param {number} [throttleTime=200] - The time in milliseconds to throttle the scroll event handler. Defaults to 200ms.
 * @returns The current scroll position of the element.
 */
const useScrollPosition: UseScrollPosition = (
	elementRef: React.RefObject<HTMLElement>,
	throttleTime: number = 200
) => {
	const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
		x: 0,
		y: 0,
	});

	const handleScroll = useCallback(
		throttle(() => {
			if (isBrowser() && elementRef.current) {
				const { scrollLeft, scrollTop } = elementRef.current;
				setScrollPosition({ x: scrollLeft, y: scrollTop });
			}
		}, throttleTime),
		[elementRef, throttleTime]
	);

	useEffect(() => {
		if (!isBrowser() || !elementRef.current) {
			return;
		}

		const element = elementRef.current;

		element.addEventListener("scroll", handleScroll);

		return () => {
			element.removeEventListener("scroll", handleScroll);
		};
	}, [elementRef, handleScroll]);

	return scrollPosition;
};

export default useScrollPosition;
