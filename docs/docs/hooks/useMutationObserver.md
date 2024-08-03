---
id: useMutationObserver
title: useMutationObserver
sidebar_label: useMutationObserver
---

Hook to observe changes to a DOM element using MutationObserver.

### Usage

```jsx live
function App() {
	const elementRef = useRef(null);

	useMutationObserver(
		elementRef,
		(mutations) => {
			mutations.forEach((mutation) => {
				console.log(mutation);
			});
		},
		{
			childList: true,
			attributes: true,
		}
	);

	return (
		<div ref={elementRef}>
			// Try changing the style of this element from the dev tools
			<p>Observe changes to this element</p>
		</div>
	);
}
```

### API

Parameters:

- `ref` - The React ref to the element to observe.
- `callback` - A function to handle mutations.
- `options` : `UseMutationObserverOptions` - An object specifying which DOM mutations to observe.

`UseMutationObserverOptions` includes the following properties:

- `childList` : `boolean` - Set to `true` to observe changes to the children of the target element.
- `attributes` : `boolean` - Set to `true` to observe changes to the attributes of the target element.
- `characterData` : `boolean` - Set to `true` to observe changes to the data of the target element.
- `subtree` : `boolean` - Set to `true` to observe changes to the descendants of the target element.
- `attributeOldValue` : `boolean` - Set to `true` to record the previous value of attribute mutations.
- `characterDataOldValue` : `boolean` - Set to `true` to record the previous value of character data mutations.
- `attributeFilter` : `string[]` - An array of attribute names to observe. If omitted, all attributes will be observed.
- `characterDataOldValue` : `boolean` - Set to `true` to record the previous value of character data before it was changed.
