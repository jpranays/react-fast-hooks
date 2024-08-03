---
id: useEventListener
title: useEventListener
sidebar_label: useEventListener
---

Hook to attach an event listener to a DOM element and clean it up on unmount.

### Usage

```jsx live
function App() {
	const elementRef = useRef(null);

	useEventListener(
		"click",
		(event) => {
			alert("Element clicked!", event);
		},
		elementRef
	);

	return <div ref={elementRef}>Click me!</div>;
}
```

### API

Parameters

- `eventName` : `string` - The name of the event to listen for.
- `handler` : `function` - The event handler function.
- `ref` : `elementRef` - The ref to the element to attach the event listener.
- `options` : `boolean | AddEventListenerOptions` - An options object that specifies characteristics about the event listener. Defaults to `{}`.
