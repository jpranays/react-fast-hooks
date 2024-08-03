import { useState, useEffect, useCallback } from "react";
import { isBrowser } from "../utils";

interface SwipeState {
	startX: number | null;
	startY: number | null;
	endX: number | null;
	endY: number | null;
	direction: "left" | "right" | "up" | "down" | null;
}

interface useWindowTouchSwipe {
	swipeState: SwipeState;
	reset: () => void;
}

/**
 * Hook to detect touch swipe gestures.
 *
 * @returns {useWindowTouchSwipe} The current swipe state and a reset function.
 */
const useWindowTouchSwipe = (): useWindowTouchSwipe => {
	const [swipeState, setSwipeState] = useState<SwipeState>({
		startX: null,
		startY: null,
		endX: null,
		endY: null,
		direction: null,
	});

	const handleTouchStart = useCallback((event: TouchEvent) => {
		const touch = event.touches[0];
		setSwipeState((prevState) => ({
			...prevState,
			startX: touch.clientX,
			startY: touch.clientY,
		}));
	}, []);

	const handleTouchMove = useCallback((event: TouchEvent) => {
		const touch = event.touches[0];
		setSwipeState((prevState) => ({
			...prevState,
			endX: touch.clientX,
			endY: touch.clientY,
		}));
	}, []);

	const handleTouchEnd = useCallback(() => {
		setSwipeState((prevState) => {
			const { startX, startY, endX, endY } = prevState;
			if (
				startX === null ||
				startY === null ||
				endX === null ||
				endY === null
			) {
				return prevState;
			}
			const deltaX = endX - startX;
			const deltaY = endY - startY;
			let direction: "left" | "right" | "up" | "down" | null = null;
			if (Math.abs(deltaX) > Math.abs(deltaY)) {
				direction = deltaX > 0 ? "right" : "left";
			} else {
				direction = deltaY > 0 ? "down" : "up";
			}
			return { ...prevState, direction };
		});
	}, []);

	useEffect(() => {
		if (!isBrowser()) return;

		window.addEventListener("touchstart", handleTouchStart);
		window.addEventListener("touchmove", handleTouchMove);
		window.addEventListener("touchend", handleTouchEnd);

		return () => {
			window.removeEventListener("touchstart", handleTouchStart);
			window.removeEventListener("touchmove", handleTouchMove);
			window.removeEventListener("touchend", handleTouchEnd);
		};
	}, [handleTouchStart, handleTouchMove, handleTouchEnd]);

	const reset = () => {
		setSwipeState({
			startX: null,
			startY: null,
			endX: null,
			endY: null,
			direction: null,
		});
	};

	return { swipeState, reset };
};

export default useWindowTouchSwipe;
