import { useEffect, useRef } from "react";
import { isBrowser } from "../utils";

/**
 * Hook to attach an event listener to a DOM element and clean it up on unmount.
 *
 * @param {string} eventName - The name of the event to listen for.
 * @param {Function} handler - The callback function to handle the event.
 * @param {React.RefObject<HTMLElement>} elementRef - A ref to the element to attach the event listener to. Defaults to window.
 */

const useEventListener = (
	eventName: string,
	handler: (event: Event) => void,
	elementRef?: React.RefObject<HTMLElement>
) => {
	const savedHandler = useRef<(event: Event) => void>();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const element = (elementRef && elementRef.current) || window;
		if (!isBrowser() || !element) return;

		const eventListener = (event: Event) => {
			if (savedHandler.current) {
				savedHandler.current(event);
			}
		};

		element.addEventListener(eventName, eventListener);

		return () => {
			element.removeEventListener(eventName, eventListener);
		};
	}, [eventName, elementRef]);
};
export default useEventListener;
