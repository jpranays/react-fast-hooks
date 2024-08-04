---
id: usePreferredLanguage
title: usePreferredLanguage
sidebar_label: usePreferredLanguage
---

Hook to get the user's preferred language from the browser.

### Usage

```jsx live
function App() {
	const { language, languages, isSupported } = usePreferredLanguage();

	return (
		<div>
			{isSupported ? (
				<p>Your preferred language is: {language}</p>
			) : (
				<p>Preferred language detection is not supported on this device.</p>
			)}
		</div>
	);
}
```

### API

Returns : An object with the following properties:

- `language` : `string` - The user's preferred language.
- `languages` : `string[]` - An array of the user's preferred languages.
- `isSupported` : `boolean` - A boolean indicating whether preferred language detection is supported on the device.
