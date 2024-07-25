---
id: useFocusBlur
title: useFocusBlur
sidebar_label: useFocusBlur
---

Hook to get focus and blur functions for an element.

### Usage

```typescript
import { useRef } from "react";
import { useFocusBlur } from "react-fast-hooks";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { focus, blur } = useFocusBlur(inputRef);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focus}>Focus</button>
      <button onClick={blur}>Blur</button>
    </div>
  );
};
```

### API

Parameter

- `elementRef` : A React ref object pointing to the element whose focus and blur functions need to be tracked.

Returns : An object with the following properties:

- `focus` : A function to focus the element.
- `blur` : A function to blur the element.
