---
id: useMediaQuery
title: useMediaQuery
sidebar_label: useMediaQuery
---

Hook to detect media query matches.

### Usage

```typescript
import { useMediaQuery } from 'react-fast-hooks';

const MyComponent = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <div>
      {isMobile ? <p>Mobile View</p> : <p>Desktop View</p>}
    </div>
  );
};
```

### API

Parameter

- `query` : A string representing the media query to match.

Returns : `boolean`

A boolean indicating if the media query matches or not.
