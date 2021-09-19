import styled from 'styled-components';

import { to } from 'Devices';

export const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${to.tabletL} {
    --width: 300px;

    flex-direction: column;
    justify-content: flex-start;

    position: fixed;
    width: var(--width);
    height: calc(100vh - var(--nav-height));

    padding: 2.4rem;
    top: var(--nav-height);
    right: 0;

    background-color: var(--dark-gray);

    transform: translateX(var(--translation, var(--width)));
    transition: height var(--short-transition-duration),
      transform 650ms cubic-bezier(0.77, 0, 0.175, 1);
  }

  @media ${to.phoneS} {
    --width: 270px;
  }
`;
