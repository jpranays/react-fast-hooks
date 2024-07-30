---
id: useMouse
title: useMouse
sidebar_label: useMouse
---

Hook to track the mouse position relative to a specified element.

### Usage

```typescript
import { useRef } from "react";
import { useMouse } from "react-fast-hooks";

const App = () => {
  const elementRef = useRef(null);
  const { x, y, elementX, elementY, pageX, pageY } = useMouse(elementRef);

  return (
    <div ref={elementRef} style={{ height: '500px', border: '1px solid black' }}>
      <h1>Mouse Position</h1>
      <p>Relative to Element - X: {x}, Y: {y}</p>
      <p>Element X: {elementX}, Element Y: {elementY}</p>
      <p>Page X: {pageX}, Page Y: {pageY}</p>
    </div>
  );
};
```

### API

Parameters

- `ref` : `elementRef` - The ref to the element to track mouse position.

Returns : An object with the following properties:

- `x` : number - The x position of the mouse relative to the element.
- `y` : number - The y position of the mouse relative to the element.
- `elementX` : number - The x position of the mouse relative to the viewport.
- `elementY` : number - The y position of the mouse relative to the viewport.
- `pageX` : number - The x position of the mouse relative to the page.
- `pageY` : number - The y position of the mouse relative to the page.
  