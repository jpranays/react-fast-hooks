import { useEffect, useState, useCallback } from "react";
import { isBrowser } from "../utils";  

/**
 * Hook to set and get the document title.
 *
 * @param {string} initialTitle - The initial title to set.
 * @returns {Array} The current document title and a function to set the title.
 */
const useTitle = (initialTitle: string): [string, (newTitle: string) => void] => {
  const [currentTitle, setCurrentTitle] = useState<string>(() => {
    if (isBrowser()) {
      return document.title;
    }
    return "";
  });

  useEffect(() => {
    if (isBrowser()) {
      document.title = initialTitle;
      setCurrentTitle(initialTitle);
    }
  }, [initialTitle]);

  const setTitle = useCallback((newTitle: string) => {
    if (isBrowser()) {
      document.title = newTitle;
      setCurrentTitle(newTitle);
    }
  }, []);

  return [currentTitle, setTitle];
};

export default useTitle;
