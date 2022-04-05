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
  --button-space-to-center: var(--input-height) * 0.5 - var(--hamburger-size) * 0.5;

  position: fixed;

  right: calc(var(--wrapper-gap));
  top: calc(var(--hamburger-size) * 2 + var(--button-space-to-center));

  @media ${to.tabletL} {
    top: calc(var(--hamburger-size) + var(--button-space-to-center));
  }

  @media ${to.tablet} {
    /* right: 7vw; */
  }
`;

export default CloseButton;
