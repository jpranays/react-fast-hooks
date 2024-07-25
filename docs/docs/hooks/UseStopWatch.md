---
id: useStopWatch
title: useStopWatch
sidebar_label: useStopWatch
---

Hook to provide stopwatch functionality with SSR compatibility.

### Usage

```typescript
import { useStopWatch } from "react-fast-hooks";

const App = () => {
  const { time, isRunning, start, stop, reset } = useStopWatch();

  return (
    <div>
      <h1>{time} seconds</h1>
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={stop} disabled={!isRunning}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```

### API

Returns : An object with the following properties:

- `time` : The current time elapsed in seconds.
- `isRunning` : A boolean indicating whether the stopwatch is running.
- `start` : A function to start the stopwatch.
- `stop` : A function to stop the stopwatch.
- `reset` : A function to reset the stopwatch.
  