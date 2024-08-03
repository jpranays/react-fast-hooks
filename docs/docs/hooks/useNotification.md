---
id: useNotification
title: useNotification
sidebar_label: useNotification
---

Hook to trigger browser notifications.

### Usage

```jsx live
import React, { useEffect } from "react";
import { useNotification } from "react-fast-hooks";

function App() {
  const {
    permission,
    showNotification,
    requestPermission,
    updateNotification,
  } = useNotification("Hello!", {
    body: "This is a notification body",
    icon: "/path/to/icon.png",
  });

  useEffect(() => {
    if (permission === "granted") {
      showNotification();
    } else if (permission === "default") {
      requestPermission();
    }
  }, [permission, showNotification, requestPermission]);

  const handleUpdateNotification = () => {
    updateNotification("Updated Title!", {
      body: "This is an updated notification body",
      icon: "/path/to/updated-icon.png",
    });
  };

  return (
    <div>
      <button onClick={showNotification}>Show Notification</button>
      <button onClick={handleUpdateNotification}>Update Notification</button>
    </div>
  );
};
```

### API

Parameters

- `title` : `string` - The title of the notification.
- `options` : `NotificationOptions` - Optional configuration for the notification. These include:
  - `body` : `string` - The body text of the notification.
  - `icon` : `string` - The URL of an icon to be displayed with the notification.
  - `dir` : `NotificationDirection` - The direction of the notification; it can be auto, ltr, or rtl.
  - `lang` : `string` - The language of the notification.
  - `tag` : `string` - An identifying tag for the notification.
  - `renotify` : `boolean` - Whether to re-notify if a notification with the same tag is already displayed.
  - `silent` : `boolean` - Whether the notification should be silent.
  - `requireInteraction` : `boolean` - Whether the notification should remain active until the user clicks or dismisses it.
  - `badge` : `string` - URL of an image to represent the notification when there is not enough space to display the icon.
  - `vibrate` : `number | number[]` - A vibration pattern for the device.
  - `timestamp` : `number` - The time the notification was created.
  - `image` : `string` - URL of an image to be displayed with the notification.

Returns

- `permission` : `NotificationPermission` - The current permission status for notifications.
- `showNotification` : `() => void` - A function to trigger the notification.
- `requestPermission` : `() => void` - A function to request notification permission from the user.
- `updateNotification` : `(newTitle: string, newOptions: NotificationOptions) => void` - A function to update the notification with new title and options.
  