---
id: useMediaQuery
title: useMediaQuery
sidebar_label: useMediaQuery
---

Hook to detect media query matches.

### Usage

```jsx live
function App() {
	const isMobile = useMediaQuery("(max-width: 600px)");

	const isDesktop = useMediaQuery("(min-width: 1024px)");

	return (
		<>
			<div>
				<p>Mobile View : {isMobile ? "true" : "false"}</p>
			</div>
			<div>
				<p>Desktop View : {isDesktop ? "true" : "false"}</p>
			</div>
		</>
	);
}
```

### API

Parameter

- `query` : A string representing the media query to match.

Returns : `boolean`

A boolean indicating if the media query matches or not.
