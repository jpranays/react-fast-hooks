import { useEffect, useState, useCallback } from "react";
import { isBrowser } from "../utils";

interface UseTitleResult {
  setTitle: (newTitle: string) => void;
}

/**
 * Hook to set and get the document title.
 *
 * @param {string} initialTitle - The initial title to set.
 * @returns {UseTitleResult} An object with the setTitle function.
 */
const useTitle = (initialTitle: string): UseTitleResult => {
  const setTitle = useCallback((newTitle: string) => {
    if (isBrowser()) {
      document.title = newTitle;
    }
  }, []);

  useEffect(() => {
    if (isBrowser()) {
      document.title = initialTitle;
    }
  }, [initialTitle]);

  return {
    setTitle,
  };
};

export default useTitle;

