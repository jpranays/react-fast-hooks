---
id: useWindowFocus
title: useWindowFocus
sidebar_label: useWindowFocus
---

Hook to track the focus state of the window.

### Usage

```jsx live
function App() {
	const isWindowFocused = useWindowFocus();

	return (
		<div>
			<h1>Window Focus Hook</h1>
			<p>{isWindowFocused ? "Window is focused" : "Window is not focused"}</p>
		</div>
	);
}
```

### API

Returns : A boolean value indicating whether the window is focused or not, updated in real-time. Useful for tracking the if the user is currently interacting with the window.
