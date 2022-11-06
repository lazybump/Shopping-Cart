import { useEffect, useState } from "react";

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): ReturnType<T> => {
  const [state, setState] = useState<T>(() => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
