import { useState, useRef, useCallback, useEffect } from "react";
import { isBrowser } from "../utils";

interface UseStopwatch {
	(): {
		time: number;
		isRunning: boolean;
		start: () => void;
		stop: () => void;
		reset: () => void;
	};
}

/**
 * Hook to provide stopwatch functionality with SSR compatibility.
 *
 * @returns An object containing the current time in milliseconds, isRunning state, and functions to start, stop, and reset the stopwatch.
 */
const useStopwatch: UseStopwatch = () => {
	const [time, setTime] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const start = useCallback(() => {
		if (isBrowser() && !isRunning) {
			setIsRunning(true);
			timerRef.current = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		}
	}, [isRunning]);

	const stop = useCallback(() => {
		if (isBrowser() && isRunning) {
			setIsRunning(false);
			if (timerRef.current) {
				clearInterval(timerRef.current);
				timerRef.current = null;
			}
		}
	}, [isRunning]);

	const reset = useCallback(() => {
		if (isBrowser()) {
			setIsRunning(false);
			setTime(0);
			if (timerRef.current) {
				clearInterval(timerRef.current);
				timerRef.current = null;
			}
		}
	}, []);

	useEffect(() => {
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, []);

	return {
		time,
		isRunning,
		start,
		stop,
		reset,
	};
};

export default useStopwatch;
