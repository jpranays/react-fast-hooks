import { useEffect, useCallback, useRef } from "react";
import { isBrowser } from "../utils";

interface UseLongPressOptions {
	threshold?: number;
	onLongPress: () => void;
	onPress?: () => void;
	onRelease?: () => void;
}

interface UseLongPress {
	(
		elementRef: React.RefObject<HTMLElement>,
		options: UseLongPressOptions
	): void;
}

/**
 * Hook to enable precise control of long-press interactions for both touch and mouse events.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - A ref to the element to track the long press.
 * @param {UseLongPressOptions} options - Configuration options for the long press.
 */
const useLongPress: UseLongPress = (
	elementRef: React.RefObject<HTMLElement>,
	{ threshold = 500, onLongPress, onPress, onRelease }: UseLongPressOptions
) => {
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const startPressTimer = useCallback(() => {
		if (onPress) onPress();
		timerRef.current = setTimeout(() => {
			if (onLongPress) onLongPress();
		}, threshold);
	}, [onLongPress, onPress, threshold]);

	const clearPressTimer = useCallback(() => {
		if (timerRef.current) clearTimeout(timerRef.current);
		if (onRelease) onRelease();
	}, [onRelease]);

	useEffect(() => {
		if (!isBrowser() || !elementRef.current) return;

		const element = elementRef.current;

		const handleMouseDown = startPressTimer;
		const handleMouseUp = clearPressTimer;
		const handleTouchStart = startPressTimer;
		const handleTouchEnd = clearPressTimer;

		element.addEventListener("mousedown", handleMouseDown);
		element.addEventListener("mouseup", handleMouseUp);
		element.addEventListener("touchstart", handleTouchStart);
		element.addEventListener("touchend", handleTouchEnd);

		return () => {
			element.removeEventListener("mousedown", handleMouseDown);
			element.removeEventListener("mouseup", handleMouseUp);
			element.removeEventListener("touchstart", handleTouchStart);
			element.removeEventListener("touchend", handleTouchEnd);
		};
	}, [elementRef, startPressTimer, clearPressTimer]);

	useEffect(() => {
		if (!isBrowser()) return;
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);
};

export default useLongPress;
