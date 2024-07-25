---
id: useScrollIntoPosition
title: useScrollIntoPosition
sidebar_label: useScrollIntoPosition
---

Hook to scroll an element to a specific position.

### Usage

```typescript
import { useRef } from "react";
import { useScrollIntoPosition } from "react-fast-hooks";

const App = () => {
 const elementRef = useRef<HTMLDivElement>(null);
 const scrollToPosition = useScrollIntoPosition(elementRef);

 const handleScroll = () => {
  scrollToPosition({ x: 100, y: 200, behavior: "smooth" });
 };

 return (
  <div>
   <div
    ref={elementRef}
    style={{ width: "200px", height: "200px", overflow: "scroll" }}
   >
    {/* Content here */}
   </div>
   <button onClick={handleScroll}>Scroll to Position</button>
  </div>
 );
};
```

### API

Parameter

`elementRef` : A ref to the element that you want to scroll.

Returns : `ScrollToPosition`

A function to scroll the element to the specified x and y coordinates.

Function parameters

`x` : A number indicating the x-coordinate to scroll to.

`y` : A number indicating the y-coordinate to scroll to.

`behavior` : A string indicating the scroll behavior ('auto' or 'smooth'). Defaults to 'auto'.
