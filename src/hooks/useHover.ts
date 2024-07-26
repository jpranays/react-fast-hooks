import { useState, useEffect, useCallback, RefObject } from "react";
import { isBrowser } from "../utils";

interface UseHover {
  (ref: RefObject<HTMLElement>): boolean;
}

/**
 * Hook to determine if an element is hovered.
 * 
 * @param {RefObject<HTMLElement>} ref - The ref to the element to track hover state.
 * @returns A boolean whether the element is hovered or not.
 */
const useHover: UseHover = (ref: RefObject<HTMLElement>): boolean => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  useEffect(() => {
    if (!isBrowser() || !ref.current) {
      return;
    }

    const element = ref.current;

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, handleMouseEnter, handleMouseLeave]);

  return isHovered;
};

export default useHover;
