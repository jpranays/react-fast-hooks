import { useCallback } from "react";
import { isBrowser } from "../utils";

interface ScrollPosition {
	x: number;
	y: number;
	behavior?: ScrollBehavior;
}

interface UseScrollIntoPosition {
	(elementRef: React.RefObject<HTMLElement>): (
		position: ScrollPosition
	) => void;
}

/**
 * Hook to scroll an element to a specific position.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - A ref to the element to scroll.
 * @returns A function to scroll the element to the specified x and y coordinates.
 */
const useScrollIntoPosition: UseScrollIntoPosition = (
	elementRef: React.RefObject<HTMLElement>
) => {
	const scrollToPosition = useCallback(
		(position: ScrollPosition) => {
			if (isBrowser() && elementRef.current) {
				elementRef.current.scrollTo({
					left: position.x,
					top: position.y,
					behavior: position.behavior || "auto",
				});
			}
		},
		[elementRef]
	);

	return scrollToPosition;
};

export default useScrollIntoPosition;
