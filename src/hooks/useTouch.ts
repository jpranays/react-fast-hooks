import { useState, useEffect, useCallback } from "react";
import { isBrowser } from "../utils";

interface TouchPosition {
	x: number | null;
	y: number | null;
}

interface UseTouch {
	(elementRef: React.RefObject<HTMLElement>): {
		touchStart: TouchPosition;
		touchMove: TouchPosition;
		touchEnd: TouchPosition;
	};
}

/**
 * Hook to track touch events on a specified element.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - A ref to the element to track touch events.
 * @returns An object with the current touch start, move, and end positions.
 */
const useTouch: UseTouch = (elementRef: React.RefObject<HTMLElement>) => {
	const [touchStart, setTouchStart] = useState<TouchPosition>({
		x: null,
		y: null,
	});
	const [touchMove, setTouchMove] = useState<TouchPosition>({
		x: null,
		y: null,
	});
	const [touchEnd, setTouchEnd] = useState<TouchPosition>({ x: null, y: null });

	const handleTouchStart = useCallback((event: TouchEvent) => {
		const touch = event.touches[0];
		setTouchStart({ x: touch.clientX, y: touch.clientY });
	}, []);

	const handleTouchMove = useCallback((event: TouchEvent) => {
		const touch = event.touches[0];
		setTouchMove({ x: touch.clientX, y: touch.clientY });
	}, []);

	const handleTouchEnd = useCallback(() => {
		setTouchEnd(touchMove);
		setTouchMove({ x: null, y: null });
		setTouchStart({ x: null, y: null });
	}, [touchMove]);

	useEffect(() => {
		if (!isBrowser() || !elementRef.current) {
			return;
		}

		const element = elementRef.current;
		element.addEventListener("touchstart", handleTouchStart);
		element.addEventListener("touchmove", handleTouchMove);
		element.addEventListener("touchend", handleTouchEnd);

		return () => {
			element.removeEventListener("touchstart", handleTouchStart);
			element.removeEventListener("touchmove", handleTouchMove);
			element.removeEventListener("touchend", handleTouchEnd);
		};
	}, [elementRef, handleTouchStart, handleTouchMove, handleTouchEnd]);

	return { touchStart, touchMove, touchEnd };
};

export default useTouch;
