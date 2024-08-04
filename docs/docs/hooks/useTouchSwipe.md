---
id: useTouchSwipe
title: useTouchSwipe
sidebar_label: useTouchSwipe
---

Hook to detect touch swipe gestures on a specified element.

### Usage

```jsx live
function App() {
	const elementRef = useRef(null);
	const { swipeState, reset } = useTouchSwipe(elementRef);

	return (
		<>
			<div
				ref={elementRef}
				style={{ backgroundColor: "red", height: "300px", color: "white" }}
			>
				<p>Swipe direction: {swipeState.direction ?? "Please swipe"}</p>
			</div>
			<button onClick={reset}>Reset</button>
		</>
	);
}
```

### API

Parameter : `elementRef` : `React.RefObject<HTMLElement | null>` - The reference to the element to detect touch swipe gestures on.

Returns : An object with the following properties:

- `swipeState` : `SwipeState` - The swipe state object.
  - `SwipeState` : `{ direction: SwipeDirection, x: number, y: number }` -
    - The direction of the swipe and the x and y coordinates of the swipe event.
      - `SwipeDirection` : `'up' | 'down' | 'left' | 'right'` - The direction of the swipe.
      - `x` : `number` - The x coordinate of the swipe event.
      - `y` : `number` - The y coordinate of the swipe event.
- `reset` : `() => void` - Resets the swipe state.
