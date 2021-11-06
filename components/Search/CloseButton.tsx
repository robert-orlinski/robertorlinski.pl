import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { Hamburger } from 'Components/Hamburger';
import { to } from 'Devices';

export const CloseButton: FC<HTMLAttributes<HTMLAnchorElement>> = ({ onClick }) => (
  <Button isCrossed={true} {...{ onClick }} />
);

const Button = styled(Hamburger)`
  position: fixed;

  right: var(--wrapper-gap);
  top: var(--hamburger-size);

  @media ${to.tablet} {
    right: 7vw;
  }
`;