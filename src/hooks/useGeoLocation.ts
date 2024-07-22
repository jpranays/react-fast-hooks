import { useEffect, useState } from "react";
import { isBrowser } from "../utils"; 

type GeolocationState = {
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
  timestamp: number;
};

/**
 * Hook to get the current geolocation.
 *
 * @returns {GeolocationState | GeolocationPositionError}  Returns the geolocation state or an error object.
 */
const useGeolocation = (): GeolocationState | GeolocationPositionError => {
  const [state, setState] = useState<GeolocationState | GeolocationPositionError>({
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now(),
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
        });
      }
    };

    const onError = (error: GeolocationPositionError) => {
      setState(error);
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
