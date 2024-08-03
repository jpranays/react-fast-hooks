---
id: useDebouncedCallback
title: useDebouncedCallback
sidebar_label: useDebouncedCallback
---

Hook to create a debounced version of a callback function.

### Usage

```jsx live
function App() {
	const [value, setValue] = useState("");

	const debouncedCallback = useDebouncedCallback((newValue) => {
		console.log("Debounced value:", newValue);
	}, 300);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		debouncedCallback(event.target.value);
	};

	return (
		<div>
			<input type="text" value={value} onChange={handleChange} />
		</div>
	);
}
```

### API

Parameters

- `callback` : `Function` - The callback function to debounce.
- `delay` : `number` - The time in milliseconds to delay the callback execution.

Returns

A debounced version of the callback function that is executed after the specified delay.
