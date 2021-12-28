import { useState, useCallback } from 'react';

const useToggle = (initialValue: boolean): readonly [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);

  return [value, toggle] as const;
};

export default useToggle;
