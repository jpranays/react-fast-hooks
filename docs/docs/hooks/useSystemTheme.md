---
id: useSystemTheme
title: useSystemTheme
sidebar_label: useSystemTheme
---

Hook to get the current system theme.

### Usage

```jsx live
function App() {
	const theme = useSystemTheme();

	return (
		<div>
			<p>Current System Theme: {theme}</p>
		</div>
	);
}
```

### API

Returns : `Theme`

The current system theme, either light or dark.
