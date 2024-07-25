import { useState, useEffect, useCallback } from "react";
import { isBrowser, throttle } from "../utils";

interface WindowSize {
  width: number | null;
  height: number | null;
}

const getWindowSize = (): WindowSize => ({
  width: isBrowser() ? window.innerWidth : null,
  height: isBrowser() ? window.innerHeight : null,
});

/**
 * Hook to get the current window size.
 * 
 * @param {number} [throttleTime=200] - The time in milliseconds to throttle the resize event handler. Defaults to 200ms.
 * @returns An object with the current window width and height.
 */
const useWindowSize = (throttleTime: number = 200): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>(getWindowSize);

  const handleResize = useCallback(
    throttle(() => {
      setWindowSize(getWindowSize());
    }, throttleTime),
    [throttleTime]
  );

  useEffect(() => {
    if (!isBrowser()) {
      return;
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return windowSize;
};

export default useWindowSize;
