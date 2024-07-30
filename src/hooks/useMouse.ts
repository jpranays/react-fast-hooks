import { useState, useEffect } from "react";
import { isBrowser } from "../utils";

interface MousePosition {
  x: number;
  y: number;
  elementX: number;
  elementY: number;
  pageX: number;
  pageY: number;
}

interface UseMouse {
  (elementRef: React.RefObject<HTMLElement>): MousePosition;
}

/**
 * Hook to track the mouse position relative to a specified element.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - A ref to the element to track the mouse position.
 * @returns An object with the current mouse x and y coordinates relative to the element.
 */
const useMouse: UseMouse = (elementRef: React.RefObject<HTMLElement>): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    pageX: 0,
    pageY: 0,
  });

  useEffect(() => {
    if (!isBrowser() || !elementRef.current) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const element = elementRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          elementX: event.clientX,
          elementY: event.clientY,
          pageX: event.pageX,
          pageY: event.pageY,
        });
      }
    };

    const element = elementRef.current;
    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, [elementRef]);

  return mousePosition;
};

export default useMouse;
