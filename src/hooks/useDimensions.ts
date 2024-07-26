import { useState, useEffect, useCallback } from "react";
import { isBrowser, throttle } from "../utils";

interface Dimensions {
	width: number | null;
	height: number | null;
}

interface UseDimensions {
	(elementRef: React.RefObject<HTMLElement>, throttleTime?: number): Dimensions;
}

/**
 * Hook to get the dimensions (width and height) of a specified element.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - A ref to the element to track the dimensions.
 * @param {number} [throttleTime=200] - The time in milliseconds to throttle the resize event handler. Defaults to 200ms.
 * @returns  An object with the width and height of the element.
 */
const useDimensions: UseDimensions = (
	elementRef: React.RefObject<HTMLElement>,
	throttleTime: number = 200
): Dimensions => {
	const [dimensions, setDimensions] = useState<Dimensions>({
		width: null,
		height: null,
	});

	const updateDimensions = useCallback(() => {
		if (isBrowser() && elementRef.current) {
			const { offsetWidth, offsetHeight } = elementRef.current;
			setDimensions({
				width: offsetWidth,
				height: offsetHeight,
			});
		}
	}, [elementRef]);

	const handleResize = useCallback(throttle(updateDimensions, throttleTime), [
		updateDimensions,
		throttleTime,
	]);

	useEffect(() => {
		if (!isBrowser() || !elementRef.current) {
			return;
		}

		updateDimensions();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [elementRef, handleResize]);

	return dimensions;
};

export default useDimensions;
