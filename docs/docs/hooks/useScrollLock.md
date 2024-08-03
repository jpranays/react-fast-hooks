---
id: useScrollLock
title: useScrollLock
sidebar_label: useScrollLock
---

Hook to lock and unlock scrolling on the body element with an extra layer of security using MutationObserver.

### Usage

```jsx live
function App() {
	const { lockScroll, unlockScroll, isLocked } = useScrollLock();

	return (
		<div>
			<button onClick={lockScroll}>Lock Scroll</button>
			<button onClick={unlockScroll}>Unlock Scroll</button>
			<p>{`Scroll is ${isLocked ? "locked" : "unlocked"}`}</p>
		</div>
	);
}
```

### API

Returns

- `lockScroll` : `() => void` - Locks scrolling on the body element.
- `unlockScroll` : `() => void` - Unlocks scrolling on the body element.
- `isLocked` : `boolean` - A boolean indicating if the scroll is locked or not.
