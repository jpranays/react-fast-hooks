---
id: useCookie
title: useCookie
sidebar_label: useCookie
---

Hook to manage browser cookies.

### Usage

```jsx live
import React from "react";
import { useCookie } from "react-fast-hooks";

function App() {
  const { value, setCookie, removeCookie, hasCookie } = useCookie("myCookie");

  return (
    <div>
      <p>Cookie Value: {value}</p>
      <button onClick={() => setCookie("newValue", { expires: 3600 })}>
        Set Cookie
      </button>
      <button onClick={removeCookie}>Remove Cookie</button>
      <p>Has Cookie: {hasCookie() ? "Yes" : "No"}</p>
    </div>
  );
};
```

### API

Parameters:

- `key` : `string` - The key of the cookie to manage.

Returns: An object containing the following properties:

- `value`: `string | undefined` - The value of the cookie.
- `setCookie`:  `(value: string, options?: CookieOptions) => void` - A function to set a cookie.
- `removeCookie`: `() => void` - A function to remove the cookie.
- `hasCookie`: `() => boolean` - A function to check if the cookie exists.

CookieOptions:

- `expires` : `number | Date` - The expiration time of the cookie. It can be in seconds or a Date object.
- `path` : `string` - The path for which the cookie is valid.
- `domain` : `string` - The domain for which the cookie is valid.
- `secure` : `boolean` - Whether the cookie should be secure.
- `sameSite` : `"Lax" | "Strict" | "None"` - The SameSite attribute of the cookie.
  