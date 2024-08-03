---
id: useDeviceOrientation
title: useDeviceOrientation
sidebar_label: useDeviceOrientation
---

Hook to get the current orientation of the device.

### Usage

```jsx live
function App() {
	const orientation = useDeviceOrientation();

	return (
		<div>
			<h4>Device Orientation: {orientation}</h4>
		</div>
	);
}
```

### API

Returns: `string`

A string indicating whether the device is in portrait or landscape mode.

Possible return values: "portrait" or "landscape".
