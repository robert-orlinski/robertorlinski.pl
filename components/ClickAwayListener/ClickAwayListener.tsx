import React, { FC, ReactElement, RefObject, useRef } from 'react';
import useOnClickAway from 'Hooks/useOnClickAway';

type Props = {
  onClickAway: () => void;
};

const ClickAwayListener: FC<Props> = ({ children, onClickAway }) => {
  const ref = useRef<HTMLElement>(null);
  useOnClickAway(ref, () => onClickAway());

  if (React.Children.count(children) == 1) {
    const copyWithRef = React.cloneElement(children as ReactElement, { ref: ref });
    return <React.Fragment>{copyWithRef}</React.Fragment>;
  }

  return <div ref={ref as RefObject<HTMLDivElement>}>{children}</div>;
};

export default ClickAwayListener;
