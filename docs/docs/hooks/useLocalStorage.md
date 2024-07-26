---
id: useLocalStorage
title: useLocalStorage
sidebar_label: useLocalStorage
---

Hook to manage a value that syncs with localStorage.

### Usage

```typescript
import { useLocalStorage } from 'react-fast-hooks';

const MyComponent = () => {
  const [name, setName] = useLocalStorage<string>('name', 'John Doe');

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

- `key` : string - The key to store the value in localStorage.
- `initialValue` : T - The initial value to store in localStorage.
  
Returns : An array with the following elements:

- `value` : T - The value stored in localStorage.
- `setValue` : (value: T) => void - A function to set the value in localStorage.
 