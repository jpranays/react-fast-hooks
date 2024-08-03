---
id: useTitle
title: useTitle
sidebar_label: useTitle
---

Hook to set and get the document title.

### Usage

```jsx live
function App() {
	const { setTitle } = useTitle("Initial Title");

	const changeTitle = () => {
		setTitle("New Title");
	};

	return (
		<div>
			<button onClick={changeTitle}>Change Title</button>
		</div>
	);
}
```

### API

Parameter : `initialTitle*: string`

Returns : `Object`

- `setTitle` : (newTitle: string) => void - A function to set the document title.
