import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
    const setValue = value => {
        setStoredValue(value) // save to state
        window.localStorage.setItem(key, JSON.stringify(value)); // save to local storage
    }
  return [storedValue, setValue];
};