---
id: useDebounce
title: useDebounce
sidebar_label: useDebounce
---

Hook to debounce a value.

### Usage

```typescript
import React, { useState } from "react";
import { useDebounce } from "react-fast-hooks";

const App = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Text: {debouncedText}</p>
    </div>
  );
};
```

### API

Parameters

- `value` : `any` - The value to debounce.
- `delay` : `number` - The time in milliseconds to delay the value update.

Returns

A debounced value that is updated after the specified delay.
