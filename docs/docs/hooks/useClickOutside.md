---
id: useClickOutside
title: useClickOutside
sidebar_label: useClickOutside
---

Hook to detect clicks outside of a specified element.

### Usage

```jsx live
function App() {
	const [isOpen, setIsOpen] = useState(true);
	const ref = useRef(null);

	useClickOutside(ref, () => {
		console.log("Clicked outside the element");
	});

	return (
		<div>
			<div ref={ref} style={{ backgroundColor: "red", color: "white" }}>
				<p>Click outside this element and check the console.</p>
			</div>
		</div>
	);
}
```

### API

Parameter

- `ref` : `elementRef` - The ref to the element to track clicks outside of.
- `callback` : `(e:MouseEvent) => void` - The callback function to execute when a click is detected outside the element.
