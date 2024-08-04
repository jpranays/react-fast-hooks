---
id: useVibration
title: useVibration
sidebar_label: useVibration
---

Hook to manage vibration on supported devices.

### Usage

```jsx live
function App() {
	const { vibrate, stop, isSupported, error } = useVibration();

	return (
		<div>
			<button onClick={() => vibrate([200, 100, 200])}>Vibrate Pattern</button>
			<button onClick={stop}>Stop Vibration</button>
			<p>
				{isSupported
					? "Vibration is supported on this device."
					: "Vibration is not supported on this device."}
			</p>
			{error && <p>Error: {error.message}</p>}
		</div>
	);
}
```

### API

Returns : An object with the following properties:

- `vibrate` : `(pattern: number | number[]) => void` - Function to start vibration with the given pattern.
- `stop` : `() => void` - Function to stop vibration.
- `isSupported` : `boolean` - A boolean indicating whether vibration is supported on the device.
- `error` : `Error | null` - An error object if an error occurred while trying to vibrate.
