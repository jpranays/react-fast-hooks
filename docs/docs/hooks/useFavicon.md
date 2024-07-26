---
id: useFavicon
title: useFavicon
sidebar_label: useFavicon
---

Hook to set and update the favicon of the webpage.

### Usage

```typescript
import { useFavicon } from "react-fast-hooks";

const App = () => {
 const changeFavicon = useFavicon("https://example.com/favicon.ico");

 const handleFaviconChange = () => {
  changeFavicon("https://example.com/new-favicon.ico");
 };

 return (
  <div>
   <h1>Hello, world!</h1>
   <button onClick={handleFaviconChange}>Change Favicon</button>
  </div>
 );
};
```

### API

Parameter:

`initialFaviconUrl`: string - The initial URL of the favicon to set.

Returns : `function`

A function to change the favicon of the webpage.
