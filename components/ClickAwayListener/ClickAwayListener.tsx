import { FC, useRef } from 'react';
import useOnClickAway from 'Hooks/useOnClickAway';

type Props = {
  onClickAway: () => void;
};

const ClickAwayListener: FC<Props> = ({ children, onClickAway }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useOnClickAway(containerRef, () => onClickAway());

  return <div ref={containerRef}>{children}</div>;
};

export default ClickAwayListener;
