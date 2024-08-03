---
id: useRandomColor
title: useRandomColor
sidebar_label: useRandomColor
---

Hook to generate a random color.

### Usage

```jsx live
function App() {
	const { color, generateNewColor } = useRandomColor();

	return (
		<div style={{ backgroundColor: color, height: "100vh" }}>
			<h1 style={{ color: "#FFF" }}>Random Color Background</h1>
			<button onClick={generateNewColor}>Generate New Color</button>
		</div>
	);
}
```

### API

Returns:

An object containing the following properties:

- `color`: A string representing the current random color.
- `generateNewColor`: A function that generates a new random color and updates the `color` property.
