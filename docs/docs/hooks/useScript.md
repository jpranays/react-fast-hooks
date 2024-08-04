---
id: useScript
title: useScript
sidebar_label: useScript
---

Hook to dynamically load an external script.

### Usage

```jsx live
function App() {
	const { loading, error } = useScript(
		"https://example.com/external-script.js",
		{
			removeOnUnmount: true,
			async: true,
			defer: true,
		}
	);

	if (loading) return <div>Loading script...</div>;
	if (error) return <div>Error loading script: {error.message}</div>;

	return (
		<div>
			<h1>Script Loaded Successfully</h1>
			{/* Your component code */}
		</div>
	);
}
```

### API

Parameter

- `url` : string - The URL of the script to load.
- `options` : object - An object with the following properties:
  - `removeOnUnmount` : boolean - Whether to remove the script when the component unmounts. Defaults to `false`.
  - `async` : boolean - Whether to load the script asynchronously. Defaults to `true`.
  - `defer` : boolean - Whether to load the script with the `defer` attribute. Defaults to `false`.

Returns : An object with the following properties:

- `loading` : boolean - A boolean value indicating whether the script is still loading.
- `error` : Error | null - An error object if the script loading failed, otherwise `null`.
