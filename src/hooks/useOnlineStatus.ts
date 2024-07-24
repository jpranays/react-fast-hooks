import { useEffect, useState } from "react";
import { isBrowser } from "../utils";

/**
 * Hook to get the online status of the browser.
 *
 * @returns {boolean} Returns true if the browser is online, otherwise false.
 */
const useOnlineStatus = (): boolean => {
  const [isOnline, setIsOnline] = useState<boolean>(() => (isBrowser() ? navigator.onLine : false));

  useEffect(() => {
    if (!isBrowser()) {
      return;
    }

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
