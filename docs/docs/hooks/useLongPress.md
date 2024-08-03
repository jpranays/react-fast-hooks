---
id: useLongPress
title: useLongPress
sidebar_label: useLongPress
---

Enable precise control of long-press interactions for both touch and mouse events with `useLongPress`.

### Usage

```jsx live
function App() {
	const buttonRef = useRef(null);

	const onLongPress = () => {
		console.log("Long press triggered!");
		alert("Long press triggered!");
	};

	const onPress = () => {
		console.log("Press started!");
	};

	const onRelease = () => {
		console.log("Press released!");
	};

	useLongPress(buttonRef, {
		threshold: 1500,
		onLongPress,
		onPress,
		onRelease,
	});

	return <button ref={buttonRef}>Long Press Me</button>;
}
```

### API

Parameters

- `ref` : `elementRef` - The ref to the element to track long press interactions.
- `options` : `LongPressOptions` - An object with the following properties:
  - `threshold` : `number` - The time in milliseconds to trigger the long press event. Defaults to 500ms.
  - `onLongPress` : `() => void` - The function to call when the long press event is triggered.
  - `onPress` : `() => void` - The function to call when the press event starts.
  - `onRelease` : `() => void` - The function to call when the press event is released.
