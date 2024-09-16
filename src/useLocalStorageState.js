import { useState, useEffect } from "react";

// This function not only set the state variable it also set the local storage
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key); // here it checks the initial state if key present in localstorage or not if it is present it stores the value in the storedVlaue if key is not present it set the initialState
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
