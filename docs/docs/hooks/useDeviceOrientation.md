---
id: useDeviceOrientation
title: useDeviceOrientation
sidebar_label: useDeviceOrientation
---

Hook to get the current orientation of the device.

### Usage

```typescript
import { useDeviceOrientation } from "react-fast-hooks";

const App = () => {
  const orientation = useDeviceOrientation();

  return (
    <div>
      <h1>Device Orientation: {orientation}</h1>
    </div>
  );
};
```

### API

Returns: `string`

A string indicating whether the device is in portrait or landscape mode.

Possible return values: "portrait" or "landscape".
