import { useEffect, useState } from "react";
import { isBrowser } from "../utils";

const DARK_MODE_QUERY = "(prefers-color-scheme: dark)";
const LIGHT_THEME = "light" as const;
const DARK_THEME = "dark" as const;

type Theme = typeof LIGHT_THEME | typeof DARK_THEME;

const getSystemTheme = (): Theme => {
  if (isBrowser() && window.matchMedia) {
    const query = window.matchMedia(DARK_MODE_QUERY);
    if (query.matches) {
      return DARK_THEME;
    }
  }
  return LIGHT_THEME; // Default to light if no preference or prefers light mode
};

/**
* Hook to get the system theme.
* @returns {Theme} The current system theme value (light or dark).
*/
const useSystemTheme = (): Theme => {
  const [theme, setTheme] = useState<Theme>(() => getSystemTheme());

  useEffect(() => {
    if (isBrowser() && window.matchMedia) {
      const query = window.matchMedia(DARK_MODE_QUERY);

      const handleChange = () => {
        setTheme(getSystemTheme());
      };

      query.addEventListener("change", handleChange);

      return () => {
        query.removeEventListener("change", handleChange);
      };
    }
  }, []);

  return theme;
};

export default useSystemTheme;
