import { useCallback, useState, useEffect } from "react";
import { isBrowser } from "../utils";

interface UseVibration {
	vibrate: (pattern: number | number[]) => void;
	stop: () => void;
	isSupported: boolean;
	error: Error | null;
}

/**
 * Hook to manage vibration on supported devices.
 *
 * @returns {UseVibration} An object containing functions to vibrate, stop vibration, check support, and state variables for error.
 */
const useVibration = (): UseVibration => {
	const [isSupported, setIsSupported] = useState<boolean>(
		isBrowser() && "vibrate" in navigator
	);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (!isBrowser()) {
			setIsSupported(false);
			return;
		}
		setIsSupported("vibrate" in navigator);
	}, []);

	const vibrate = useCallback(
		(pattern: number | number[]) => {
			if (isSupported) {
				try {
					navigator.vibrate(pattern);
				} catch (e) {
					setError(e as Error);
				}
			} else {
				setError(new Error("Vibration is not supported on this device."));
			}
		},
		[isSupported]
	);

	const stop = useCallback(() => {
		if (isSupported) {
			navigator.vibrate(0);
		}
	}, [isSupported]);

	return {
		vibrate,
		stop,
		isSupported,
		error,
	};
};

export default useVibration;
