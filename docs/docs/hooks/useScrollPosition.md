---
id: useScrollPosition
title: useScrollPosition
sidebar_label: useScrollPosition
---

Hook to get the current scroll position of a specified element.

### Usage

```typescript
import { useRef } from "react";
import useScrollPosition from "react-fast-hooks";

const App = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition(elementRef, 200); // Throttle time is 200ms

  return (
    <div>
      <div
        ref={elementRef}
        style={{ overflow: "auto", height: "100px", width: "100%" }}
      >
        {/* Content goes here */}
      </div>
      <p>
        Scroll X: {scrollPosition.x}, Scroll Y: {scrollPosition.y}
      </p>
    </div>
  );
};
```

### API

Parameter  
  `elementRef` : A React ref object pointing to the element whose scroll position needs to be tracked.

- `throttleTime` : A number indicating the time in milliseconds to throttle the window resize event. Defaults to 200.

Returns : `ScrollPosition`

- `x` : A number or null indicating the current horizontal scroll position of the window.
- `y` : A number or null indicating the current vertical scroll position of the window.
