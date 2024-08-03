---
id: useHover
title: useHover
sidebar_label: useHover
---

Hook to determine if an element is hovered.

### Usage

```jsx live
function App() {
	const elementRef = useRef(null);
	const isHovered = useHover(elementRef);

	return (
		<div
			ref={elementRef}
			style={{
				padding: "20px",
				backgroundColor: isHovered ? "lightblue" : "lightgrey",
			}}
		>
			{isHovered ? "Hovered!" : "Hover over me!"}
		</div>
	);
}
```

### API

Parameter

ref : `elementRef` - The ref to the element to track hover state.

Returns : `boolean`

An boolean indicating if the element is hovered or not.
