import { useEffect, useCallback } from "react";
import { isBrowser } from "../utils";

interface ScrollPosition {
  x: number;
  y: number;
  behavior?: ScrollBehavior;
}

interface UseWindowScrollIntoPosition {
  (): (position: ScrollPosition) => void;
}

/**
 * Hook to scroll the window to a specific position.
 * 
 * @returns A function to scroll the window to the specified x and y coordinates.
 */
const useWindowScrollIntoPosition: UseWindowScrollIntoPosition = () => {
  const scrollToPosition = useCallback((position: ScrollPosition) => {
    if (isBrowser()) {
      window.scrollTo({
        left: position.x,
        top: position.y,
        behavior: position.behavior || "auto",
      });
    }
  }, []);

  return scrollToPosition;
};

export default useWindowScrollIntoPosition;
