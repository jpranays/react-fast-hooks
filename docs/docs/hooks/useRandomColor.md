---
id: useRandomColor
title: useRandomColor
sidebar_label: useRandomColor
---

Hook to generate a random color.

### Usage

```typescript
import React from "react";
import { useRandomColor } from "react-fast-hooks";

const App = () => {
  const { color, generateNewColor } = useRandomColor();

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <h1 style={{ color: "#FFF" }}>Random Color Background</h1>
      <button onClick={generateNewColor}>Generate New Color</button>
    </div>
  );
};

export default App;
```

### API

Returns:

An object containing the following properties:

- `color`: A string representing the current random color.
- `generateNewColor`: A function that generates a new random color and updates the `color` property.