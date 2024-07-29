---
id: useClickOutside
title: useClickOutside
sidebar_label: useClickOutside
---

Hook to detect clicks outside of a specified element.

### Usage

```typescript
import React, { useRef, useState } from "react";
import { useClickOutside } from "react-fast-hooks";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      {isOpen && (
        <div ref={ref}>
          <p>Click outside this element to close it.</p>
        </div>
      )}
    </div>
  );
};
```

### API

Parameter

- `ref` : `elementRef` - The ref to the element to track clicks outside of.
- `callback` : `(e:MouseEvent) => void` - The callback function to execute when a click is detected outside the element.
