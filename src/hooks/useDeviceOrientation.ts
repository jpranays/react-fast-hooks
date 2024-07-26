import { useState, useEffect } from "react";
import { isBrowser } from "../utils";

type Orientation = "portrait" | "landscape";

/**
 * Hook to get the current orientation of the device.
 *
 * @returns A string indicating whether the device is in portrait or landscape mode.
 */

const useDeviceOrientation = (): Orientation => {
	const portraitMediaQuery = window.matchMedia("(orientation: portrait)");

	const [orientation, setOrientation] = useState<Orientation>(
		portraitMediaQuery.matches ? "portrait" : "landscape"
	);

	useEffect(() => {
		if (!isBrowser()) {
			return;
		}

		const handleOrientationChange = () => {
			if (portraitMediaQuery.matches) {
				setOrientation("portrait");
			} else {
				setOrientation("landscape");
			}
		};

		portraitMediaQuery.addEventListener("change", handleOrientationChange);

		return () => {
			portraitMediaQuery.removeEventListener("change", handleOrientationChange);
		};
	}, []);

	return orientation;
};

export default useDeviceOrientation;
