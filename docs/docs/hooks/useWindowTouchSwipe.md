---
id: useWindowTouchSwipe
title: useWindowTouchSwipe
sidebar_label: useWindowTouchSwipe
---

Hook to detect touch swipe gestures.

### Usage

```jsx live
function App() {
	const { swipeState, reset } = useWindowTouchSwipe();

	return (
		<div>
			<p>Swipe direction: {swipeState.direction ?? "Please swipe"}</p>
			<button onClick={reset}>Reset</button>
		</div>
	);
}
```

### API

Returns : An object with the following properties:

- `swipeState` : `SwipeState` - The swipe state object.
  - `SwipeState` : `{ direction: SwipeDirection, x: number, y: number }` -
    - The direction of the swipe and the x and y coordinates of the swipe event.
      - `SwipeDirection` : `'up' | 'down' | 'left' | 'right'` - The direction of the swipe.
      - `x` : `number` - The x coordinate of the swipe event.
      - `y` : `number` - The y coordinate of the swipe event.
- `reset` : `() => void` - Resets the swipe state.
