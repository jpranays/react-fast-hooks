---
id: useBattery
title: useBattery
sidebar_label: useBattery
---

Hook to get the current battery status of the device.

### Usage

```jsx live
function Clock() {
	const batteryState = useBattery();

	return (
		<div>
			{batteryState.loading ? (
				<p>Loading battery status...</p>
			) : !batteryState.supported ? (
				<p>Battery API not supported on this device.</p>
			) : (
				<div>
					<p>Battery Level: {batteryState.level * 100}%</p>
					<p>Charging: {batteryState.charging ? "Yes" : "No"}</p>
					<p>Charging Time: {batteryState.chargingTime} seconds</p>
					<p>Discharging Time: {batteryState.dischargingTime} seconds</p>
				</div>
			)}
		</div>
	);
}
```

### API

Returns : `BatteryState`

An object containing the following properties:

- `supported` : A boolean indicating if the Battery API is supported.
- `loading` : A boolean indicating if the battery status is currently loading.
- `level` : A number or null indicating the current battery level (0 to 1).
- `charging` : A boolean or null indicating whether the battery is currently charging.
- `chargingTime` : A number or null indicating the time remaining until the battery is fully charged (in seconds).
- `dischargingTime` : A number or null indicating the time remaining until the battery is fully discharged (in seconds).
