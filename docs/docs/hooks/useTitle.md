---
id: useTitle
title: useTitle
sidebar_label: useTitle
---

Hook to set and get the document title.

### Usage

```typescript
import { useTitle } from "react-fast-hooks";

const App = () => {
  const [title, setTitle] = useTitle("Initial Title");

  const changeTitle = () => {
    setTitle("New Title");
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  );
};
```

### API

Parameter : `initialTitle: string`

Returns : `Array`

- `currentTitle` : The current document title.
- `setTitle` : (newTitle: string) => void - A function to set the document title.
