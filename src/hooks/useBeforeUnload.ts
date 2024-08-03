import { useEffect, useCallback } from "react";
import { isBrowser } from "../utils";

/**
 * Hook to handle the browser's beforeunload event.
 *
 * @param {Function} handler - The callback function to execute when the user attempts to leave the page.
 */
const useBeforeUnload = (handler: (event: BeforeUnloadEvent) => void) => {
	const handleBeforeUnload = useCallback(
		(event: BeforeUnloadEvent) => {
			handler(event);
			event.preventDefault();
			return (event.returnValue = "Are you sure you want to leave?");
		},
		[handler]
	);

	useEffect(() => {
		if (!isBrowser()) {
			return;
		}

		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, [handleBeforeUnload]);
};

export default useBeforeUnload;
