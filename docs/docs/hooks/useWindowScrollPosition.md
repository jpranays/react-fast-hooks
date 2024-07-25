---
id: useWindowScrollPosition
title: useWindowScrollPosition
sidebar_label: useWindowScrollPosition
---

Hook to get the current scroll position of the window.

### Usage

```typescript
import { useWindowScrollPosition } from 'react-fast-hooks';

const App = () => {
  const { x, y } = useWindowScrollPosition(200); // Optional throttle time

  return (
    <div>
      <p>Scroll X: {x}</p>
      <p>Scroll Y: {y}</p>
    </div>
  );
};
```

### API

Parameter  

- `throttleTime` : A number indicating the time in milliseconds to throttle the window scroll event. Defaults to 200.

Returns : `ScrollPosition`

- `x` : A number or null indicating the current horizontal scroll position of the window.
- `y` : A number or null indicating the current vertical scroll position of the window.
