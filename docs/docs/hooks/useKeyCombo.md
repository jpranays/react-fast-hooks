---
id: useKeyCombo
title: useKeyCombo
sidebar_label: useKeyCombo
---

Hook to detect if a specified key combination is pressed.

### Usage

```jsx live
function App() {
	const isCtrlShiftPressed = useKeyCombo(["Control", "Shift"]);

	return (
		<div>
			<h1>Press the Ctrl + Shift keys</h1>
			{isCtrlShiftPressed && <p>Ctrl + Shift keys are pressed!</p>}
		</div>
	);
}
```

### API

Parameter

- `keys` : `string[]` - An array of keys to detect.

Returns : `boolean`

A boolean indicating if the specified key combination is pressed or not.
