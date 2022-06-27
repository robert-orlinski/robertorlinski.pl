import { useEffect, RefObject } from 'react';

const useOnClickAway = (ref: RefObject<Node>, action: () => void): void => {
  useEffect(() => {
    const handleAction = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      action();
    };

    document.addEventListener('mousedown', handleAction);
    document.addEventListener('touchstart', handleAction);

    return () => {
      document.removeEventListener('mousedown', handleAction);
      document.removeEventListener('touchstart', handleAction);
    };
  }, [ref, action]);
};

export default useOnClickAway;
