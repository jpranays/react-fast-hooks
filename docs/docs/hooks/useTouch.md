---
id: useTouch
title: useTouch
sidebar_label: useTouch
---

Hook to track touch events on a specified element.

### Usage

```jsx live
function App() {
	const elementRef = useRef(null);
	const { touchStart, touchMove, touchEnd } = useTouch(elementRef);

	return (
		<div
			ref={elementRef}
			style={{ width: "100%", height: "100vh", backgroundColor: "lightgray" }}
		>
			<p>
				Touch Start: {touchStart.x}, {touchStart.y}
			</p>
			<p>
				Touch Move: {touchMove.x}, {touchMove.y}
			</p>
			<p>
				Touch End: {touchEnd.x}, {touchEnd.y}
			</p>
		</div>
	);
}
```

### API

Parameter : `elementRef` : `React.RefObject<HTMLElement | null>` - The reference to the element to track touch events on.

Returns : An object with the following properties:

- `touchStart` : `TouchCoordinates` - The coordinates of the touch start event.
- `touchMove` : `TouchCoordinates` - The coordinates of the touch move event.
- `touchEnd` : `TouchCoordinates` - The coordinates of the touch end event.
  - `TouchCoordinates` : `{ x: number, y: number }` - The x and y coordinates of the touch event.
