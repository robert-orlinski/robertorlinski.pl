import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

import Hamburger from 'Components/Hamburger';

import { to } from 'Devices';

const CloseButton: FC<HTMLAttributes<HTMLAnchorElement>> = ({ onClick }) => (
  <Button
    isCrossed={true}
    ariaLabelForClosed="Otwórz wyszukiwarkę"
    ariaLabelForOpened="Zamknij wyszukiwarkę"
    {...{ onClick }}
  />
);

const Button = styled(Hamburger)`
  position: fixed;

  right: var(--wrapper-gap);
  top: var(--hamburger-size);

  @media ${to.tablet} {
    right: 7vw;
  }
`;

export default CloseButton;
