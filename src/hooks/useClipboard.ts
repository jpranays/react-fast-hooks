import { useState } from "react";
import { isBrowser } from "../utils"; 

/**
 * Hook to copy text to the clipboard.
 *
 * @returns {object} Returns an object with `copy` function and `isCopied` boolean state.
 */
const useClipboard = (): object => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy = async (text: string) => {
    if (!isBrowser()) {
      console.warn("Clipboard API is not available in SSR.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text to clipboard:", err);
      setIsCopied(false);
    }
  };

  return { copy, isCopied };
};

export default useClipboard;
