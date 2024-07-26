import { useState, useEffect } from 'react';
import { isBrowser } from '../utils';

interface UseLocalStorage<T> {
  (key: string, initialValue: T): [T, (value: T) => void];
}

/**
 * Hook to manage a value in localStorage.
 *
 * @param key The key under which the value is stored in localStorage.
 * @param initialValue The initial value to use if there is no value in localStorage.
 * @returns An array with the current value and a function to update it.
 */
const useLocalStorage: UseLocalStorage<any> = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (!isBrowser()) {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (isBrowser()) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
