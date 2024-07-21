// src/useSystemTheme.ts
import { useEffect, useState } from 'react';
import { DARK_MODE_QUERY, LIGHT_THEME, DARK_THEME } from '../constants/themeConstants';

export type Theme = typeof LIGHT_THEME | typeof DARK_THEME;

const getSystemTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    const query = window.matchMedia(DARK_MODE_QUERY);
    if (query.matches) {
      return DARK_THEME;
    }
  }
  return LIGHT_THEME; // Default to light if no preference or prefers light mode
};

const useSystemTheme = (): Theme => {
  const [theme, setTheme] = useState<Theme>(() => getSystemTheme());

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const query = window.matchMedia(DARK_MODE_QUERY);

      const handleChange = () => {
        setTheme(getSystemTheme());
      };

      query.addEventListener('change', handleChange);

      return () => {
        query.removeEventListener('change', handleChange);
      };
    }
  }, []);

  return theme;
};

export default useSystemTheme;
