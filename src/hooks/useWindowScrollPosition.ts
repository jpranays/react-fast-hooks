import { useState, useEffect, useCallback } from "react";
import { isBrowser, throttle } from "../utils";

interface WindowScrollPosition {
  x: number | null;
  y: number | null;
}

const getWindowScrollPosition = (): WindowScrollPosition => ({
  x: isBrowser() ? window.scrollX : null,
  y: isBrowser() ? window.scrollY : null,
});

/**
 * Hook to get the current window scroll position.
 * 
 * @param {number} [throttleTime=200] - The time in milliseconds to throttle the scroll event handler. Defaults to 200ms.
 * @returns {WindowScrollPosition} Returns an object with the current window scroll position (x and y).
 */
const useWindowScrollPosition = (throttleTime: number = 200): WindowScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<WindowScrollPosition>(getWindowScrollPosition);

  const handleScroll = useCallback(
    throttle(() => {
      setScrollPosition(getWindowScrollPosition());
    }, throttleTime),
    [throttleTime]
  );

  useEffect(() => {
    if (!isBrowser()) {
      return;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrollPosition;
};

export default useWindowScrollPosition;
