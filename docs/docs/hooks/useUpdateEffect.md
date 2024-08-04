---
id: useUpdateEffect
title: useUpdateEffect
sidebar_label: useUpdateEffect
---

Hook that runs an effect only when the component updates, skipping the initial render.

### Usage

```jsx live
function App() {
	const [count, setCount] = useState(0);

	useUpdateEffect(() => {
		console.log("Effect runs on updates only");
	}, [count]);

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}
```

### API

Parameters

- `effect` : `Function` - The effect function to run.
- `deps` : `DependencyList` - The dependencies to watch for changes. The effect will run only when these dependencies change.
