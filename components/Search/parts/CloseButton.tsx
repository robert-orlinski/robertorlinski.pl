import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

import Hamburger from 'Components/Hamburger';

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
  top: calc(var(--nav-padding) + var(--button-space-to-center));
`;

export default CloseButton;
