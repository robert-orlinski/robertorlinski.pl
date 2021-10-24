import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { Hamburger } from 'Components/Nav/Hamburger';

export const CloseButton: FC<HTMLAttributes<HTMLAnchorElement>> = ({ onClick }) => (
  <Button isCrossed={true} {...{ onClick }} />
);

const Button = styled(Hamburger)`
  position: absolute;

  width: var(--close-button-size);
  height: var(--close-button-size);

  right: calc(var(--close-button-size) + 0.5rem);
  top: var(--close-button-size);
`;
