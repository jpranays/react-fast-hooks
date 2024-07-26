---
id: useSessionStorage
title: useSessionStorage
sidebar_label: useSessionStorage
---

Hook to manage a value that syncs with sessionStorage.

### Usage

```typescript
import { useSessionStorage } from 'react-fast-hooks';

const MyComponent = () => {
  const [name, setName] = useSessionStorage<string>('name', 'John Doe');

  return (
    <div>
      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
```

### API

Parameter

- `key` : string - The key to store the value in sessionStoage.
- `initialValue` : T - The initial value to store in sessionStoage.
  
Returns : An array with the following elements:

- `value` : T - The value stored in sessionStoage.
- `setValue` : (value: T) => void - A function to set the value in sessionStoage.
 