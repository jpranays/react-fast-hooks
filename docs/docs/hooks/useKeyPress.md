---
id: useKeyPress
title: useKeyPress
sidebar_label: useKeyPress
---

Hook to detect if a specified key is pressed.

### Usage

```typescript
import { useKeyPress } from "react-fast-hooks";

const App = () => {
 const isEnterPressed = useKeyPress("Enter");

 return (
  <div>
   <h1>Press the Enter key</h1>
   {isEnterPressed && <p>Enter key is pressed!</p>}
  </div>
 );
};
```

### API

Parameter

- `key` : `string` - The key to detect.

Returns : `boolean`

A boolean indicating if the specified key is pressed or not.
