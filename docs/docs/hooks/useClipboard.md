---
id: useClipboard
title: useClipboard
sidebar_label: useClipboard
---

Hook to copy text to the clipboard.

### Usage

```typescript
import { useClipboard } from "react-fast-hooks";

const App = () => {
 const { copy, isCopied } = useClipboard();

 return (
  <div>
   <button onClick={() => copy("Text to copy")}>
    {isCopied ? "Copied!" : "Copy"}
   </button>
  </div>
 );
};
```

### API

Returns : `Object`

An object containing the following properties:

- `copy` : A function to copy the provided text to the clipboard.
- `isCopied` : A boolean indicating whether the text was successfully copied.
