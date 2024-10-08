---
id: useIntersectionObserver
title: useIntersectionObserver
sidebar_label: useIntersectionObserver
---

Hook to observe the visibility of an element using the Intersection Observer API.

### Usage

```jsx live
function App() {
	const elementRef = useRef(null);

	const entry = useIntersectionObserver(elementRef, {
		threshold: 1,
	});

	return (
		<div>
			<div
				ref={elementRef}
				style={{
					height: "100px",
					background: entry?.isIntersecting ? "lightblue" : "red",
				}}
			>
				{entry?.isIntersecting ? "In view" : "Out of view"}
			</div>
		</div>
	);
}
```

### API

Parameters

- `options` : `IntersectionObserverOptions` - The Intersection Observer options. These include:
  - `root` : `Element` - The element that is used as the viewport for checking visibility of the target.
  - `rootMargin` : `string` - Margin around the root.
  - `threshold` : `number | number[]` - A single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.

Returns

- `observer` : `(node: Element | null) => void` - A callback ref to set the target element to be observed.
- `entry` : `IntersectionObserverEntry | null` - The IntersectionObserverEntry providing information about the intersection of the target with the root.
