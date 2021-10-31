import { useState, useCallback } from 'react';

const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);

  return [value, toggle] as const;
};

export default useToggle;
