---
id: useDimensions
title: useDimensions
sidebar_label: useDimensions
---

Hook to get the dimensions (width and height) of a specified element.

### Usage

```jsx live
function App() {
	const elementRef = useRef(null);
	const dimensions = useDimensions(elementRef, 200);

	return (
		<div ref={elementRef}>
			<h4>Element Dimensions</h4>
			<p>Width: {dimensions.width}</p>
			<p>Height: {dimensions.height}</p>
		</div>
	);
}
```

### API

Parameters

- `ref` : `elementRef` - The ref to the element to track dimensions.
- `throttleTime` : `number` - The time in milliseconds to throttle the resize event handler. Defaults to 200ms.

Returns : An object with the following properties:

- `width` : number - The width of the element.
- `height` : number - The height of the element.
