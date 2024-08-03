---
id: useFavicon
title: useFavicon
sidebar_label: useFavicon
---

Hook to set and update the favicon of the webpage.

### Usage

```jsx live
function App() {
	const changeFavicon = useFavicon("");

	const handleFaviconChange = () => {
		changeFavicon("https://github.githubassets.com/favicons/favicon.svg");
	};

	return (
		<div>
			<h1>Hello, world!</h1>
			<button onClick={handleFaviconChange}>Change Favicon</button>
		</div>
	);
}
```

### API

Parameter:

`initialFaviconUrl`: string - The initial URL of the favicon to set.

Returns : `function`

A function to change the favicon of the webpage.
