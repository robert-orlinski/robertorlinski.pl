import React, { FC, useEffect, useRef } from 'react';

type Props = {
  onClickAway: () => void;
};

const ClickAwayListener: FC<Props> = ({ children, onClickAway }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleAction = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current || containerRef.current.contains(event.target as Element)) return;
      onClickAway();
    };

    document.addEventListener('mousedown', handleAction);
    document.addEventListener('touchstart', handleAction);

    return () => {
      document.removeEventListener('mousedown', handleAction);
      document.removeEventListener('touchstart', handleAction);
    };
  }, [containerRef, onClickAway]);

  return <div ref={containerRef}>{children}</div>;
};

export default ClickAwayListener;
