import { useState, useEffect, useRef, useCallback } from "react";
import { isBrowser } from "../utils";

interface UseIdleOptions {
	timeout: number;
}

interface UseIdle {
	(options: UseIdleOptions): boolean;
}

/**
 * Hook to detect user inactivity.
 *
 * @param {UseIdleOptions} options - An object containing the timeout in milliseconds.
 * @returns A boolean indicating whether the user is idle.
 */
const useIdle: UseIdle = ({ timeout }: UseIdleOptions): boolean => {
	const [isIdle, setIsIdle] = useState<boolean>(false);
	const idleTimeoutRef = useRef<number | undefined>();
	const isIdleRef = useRef<boolean>(false);

	const handleActivity = useCallback(() => {
		if (isIdleRef.current) {
			setIsIdle(false);
			isIdleRef.current = false;
		}
		clearTimeout(idleTimeoutRef.current);
		idleTimeoutRef.current = window.setTimeout(() => {
			setIsIdle(true);
			isIdleRef.current = true;
		}, timeout);
	}, [timeout]);

	useEffect(() => {
		if (!isBrowser()) {
			return;
		}

		const events = [
			"mousemove",
			"mousedown",
			"keydown",
			"touchstart",
			"scroll",
		];
		events.forEach((event) => window.addEventListener(event, handleActivity));

		idleTimeoutRef.current = window.setTimeout(() => {
			setIsIdle(true);
			isIdleRef.current = true;
		}, timeout);

		return () => {
			events.forEach((event) =>
				window.removeEventListener(event, handleActivity)
			);
			clearTimeout(idleTimeoutRef.current);
		};
	}, [handleActivity, timeout]);

	return isIdle;
};

export default useIdle;
