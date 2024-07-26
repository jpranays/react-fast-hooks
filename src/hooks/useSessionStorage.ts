import { useState, useEffect } from 'react';
import { isBrowser } from '../utils';

interface UseSessionStorage<T> {
  (key: string, initialValue: T): [T, (value: T) => void];
}

/**
 * Hook to manage a value in sessionStorage.
 *
 * @param key The key under which the value is stored in sessionStorage.
 * @param initialValue The initial value to use if there is no value in sessionStorage.
 * @returns An array with the current value and a function to update it.
 */
const useSessionStorage: UseSessionStorage<any> = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (!isBrowser()) {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading sessionStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (isBrowser()) {
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting sessionStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

export default useSessionStorage;
