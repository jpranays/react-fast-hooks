---
id: usePrevious
title: usePrevious
sidebar_label: usePrevious
---

Hook to get the previous value of a state or prop.

### Usage

```jsx live
function App() {
	const [count, setCount] = useState(0);
	const prevCount = usePrevious(count);

	useEffect(() => {
		console.log(`Current count: ${count}, Previous count: ${prevCount}`);
	}, [prevCount, count]);

	return (
		<div>
			<p>Current count: {count}</p>
			<p>Previous count: {prevCount}</p>
			<button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
		</div>
	);
}
```

### API

Parameter:

- `value` : `any` - The value to track.

Returns:

The previous value of the specified value, updated in real-time. Useful for tracking state or prop changes.
