import { useCallback } from "react";
import { isBrowser } from "../utils";

interface UseFocusBlur {
  (elementRef: React.RefObject<HTMLElement>): { focus: () => void; blur: () => void };
}

/**
 * Hook to get focus and blur functions for an element.
 * 
 * @param {React.RefObject<HTMLElement>} elementRef - A ref to the element.
 * @returns An object with `focus` and `blur` functions.
 */
const useFocusBlur: UseFocusBlur = (elementRef) => {
  const focus = useCallback(() => {
    if (isBrowser() && elementRef.current) {
      elementRef.current.focus();
    }
  }, [elementRef]);

  const blur = useCallback(() => {
    if (isBrowser() && elementRef.current) {
      elementRef.current.blur();
    }
  }, [elementRef]);

  return { focus, blur };
};

export default useFocusBlur;
