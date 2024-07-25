import { useEffect, useState } from "react";
import { isBrowser } from "../utils";

interface GeolocationState {
	accuracy: number | null;
	altitude: number | null;
	altitudeAccuracy: number | null;
	heading: number | null;
	latitude: number | null;
	longitude: number | null;
	speed: number | null;
	timestamp: number;
	error: GeolocationPositionError | null;
}

/**
 * Hook to get the current geolocation.
 *
 * @returns The geolocation state.
 */
const useGeolocation = (): GeolocationState => {
	const [state, setState] = useState<GeolocationState>({
		accuracy: null,
		altitude: null,
		altitudeAccuracy: null,
		heading: null,
		latitude: null,
		longitude: null,
		speed: null,
		timestamp: Date.now(),
		error: null,
	});

	useEffect(() => {
		if (!isBrowser()) {
			return;
		}

		let mounted = true;
		let watchId: number;

		const onEvent = (event: GeolocationPosition) => {
			if (mounted) {
				setState({
					accuracy: event.coords.accuracy,
					altitude: event.coords.altitude,
					altitudeAccuracy: event.coords.altitudeAccuracy,
					heading: event.coords.heading,
					latitude: event.coords.latitude,
					longitude: event.coords.longitude,
					speed: event.coords.speed,
					timestamp: event.timestamp,
					error: null,
				});
			}
		};

		const onError = (error: GeolocationPositionError) => {
			setState({
				accuracy: null,
				altitude: null,
				altitudeAccuracy: null,
				heading: null,
				latitude: null,
				longitude: null,
				speed: null,
				timestamp: Date.now(),
				error: error,
			});
		};

		navigator.geolocation.getCurrentPosition(onEvent, onError);
		watchId = navigator.geolocation.watchPosition(onEvent, onError);

		return () => {
			mounted = false;
			navigator.geolocation.clearWatch(watchId);
		};
	}, []);

	return state;
};

export default useGeolocation;
