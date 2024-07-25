---
id: useWindowScrollIntoPosition
title: useWindowScrollIntoPosition
sidebar_label: useWindowScrollIntoPosition
---

Hook to scroll the window to a specific position.

### Usage

```typescript
import { useWindowScrollIntoPosition } from "react-fast-hooks";

const App = () => {
 const scrollToPosition = useWindowScrollIntoPosition();

 const handleScroll = () => {
  scrollToPosition({ x: 100, y: 200, behavior: "smooth" });
 };

 return (
  <div>
   <button onClick={handleScroll}>Scroll to Position</button>
  </div>
 );
};
```

### API

Returns : `ScrollToPosition`

A function to scroll the window to the specified x and y coordinates.

Function parameters

`x` : A number indicating the x-coordinate to scroll to.

`y` : A number indicating the y-coordinate to scroll to.

`behavior` : A string indicating the scroll behavior ('auto' or 'smooth'). Defaults to 'auto'.
