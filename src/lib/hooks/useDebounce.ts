import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, debounce: number = 300): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = window.setTimeout(
      () => setDebouncedValue(value),
      debounce
    );
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, debounce]);

  return debouncedValue;
};

export { useDebounce };
