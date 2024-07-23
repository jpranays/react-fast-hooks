---
id: useOnlineStatus
title: useOnlineStatus
sidebar_label: useOnlineStatus
---

Hook to get the online status of the browser.

### Usage

```typescript
import { useOnlineStatus } from 'react-fast-hooks';

const App = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <p>{isOnline ? "You are online" : "You are offline"}</p>
    </div>
  );
};
```

### API

Returns : `boolean`

A boolean indicating whether the browser is online or offline.
