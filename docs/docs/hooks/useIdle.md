---
id: useIdle
title: useIdle
sidebar_label: useIdle
---

Hook to detect user inactivity.

### Usage

```jsx live
function App() {
	const isIdle = useIdle({ timeout: 5000 });

	return (
		<div>
			<h1>User Idle Hook</h1>
			<p>{isIdle ? "User is idle" : "User is active"}</p>
		</div>
	);
}
```

### API

Parameter:

- `options` : `UseIdleOptions` - An object specifying the timeout in milliseconds.

  - `UseIdleOptions` includes the following properties:

    - `timeout` : `number` - The time in milliseconds to consider the user as idle.

Returns : A boolean value indicating whether the user is idle or not, updated in real-time. Useful for tracking user inactivity.
