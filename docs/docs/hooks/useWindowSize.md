---
id: useWindowSize
title: useWindowSize
sidebar_label: useWindowSize
---

Hook to get the current window size.

### Usage

```typescript
import { useWindowSize } from 'react-fast-hooks';

const App = () => {
  const { width, height } = useWindowSize(200); // Optional throttle time

  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  );
};
```

### API

Parameter

- `throttleTime` : A number indicating the time in milliseconds to throttle the window resize event. Defaults to 200.

Returns : `WindowSize`

- `width` : A number or null indicating the current width of the window.
- `height` : A number or null indicating the current height of the window.
  