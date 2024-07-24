---
id: useGeolocation
title: useGeolocation
sidebar_label: useGeolocation
---

Hook to get the current geolocation.

### Usage

```typescript
import { useGeolocation } from "react-fast-hooks";

const App = () => {
 const geolocation = useGeolocation();

 return (
  <div>
   <p>Latitude: {geolocation.latitude}</p>
   <p>Longitude: {geolocation.longitude}</p>
   <p>Accuracy: {geolocation.accuracy} meters</p>
   <p>Altitude: {geolocation.altitude}</p>
   <p>Altitude Accuracy: {geolocation.altitudeAccuracy} meters</p>
   <p>Heading: {geolocation.heading}</p>
   <p>Speed: {geolocation.speed}</p>
   <p>Timestamp: {new Date(geolocation.timestamp).toLocaleString()}</p>
  </div>
 );
};
```

### API

Returns : `Geolocation`

An `Geolocation` containing the following properties:

- `latitude` : The latitude in decimal degrees.
- `longitude` : The longitude in decimal degrees.
- `accuracy` : The accuracy of the latitude and longitude in meters.
- `altitude` : The altitude in meters above the reference ellipsoid.
- `altitudeAccuracy` : The accuracy of the altitude in meters.
- `heading` : The direction of travel in degrees.
- `speed` : The speed in meters per second.
- `timestamp` : The time at which the location or error was occurred.
- `error` : `GeolocationError`

An `GeolocationError` containing the following properties:

- `code` : The error code.
- `message` : The error message.
