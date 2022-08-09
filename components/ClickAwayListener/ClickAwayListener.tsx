import { ReactNode, useRef, useEffect } from 'react';

type Props = {
  children: ReactNode;
  onClickAway: () => void;
};

const ClickAwayListener = ({ children, onClickAway }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleAction = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLDivElement)) return;
      onClickAway();
    };

    document.addEventListener('mousedown', handleAction);

    return () => {
      document.removeEventListener('mousedown', handleAction);
    };
  }, [ref, onClickAway]);

  return <div ref={ref}>{children}</div>;
};

export default ClickAwayListener;
