import styled from 'styled-components';

import { to } from 'Devices';

import { LinksVisibilityProps } from './Nav';

export const NavLinks = styled.div<LinksVisibilityProps>`
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
    top: 0;
    right: 0;

    background-color: var(--dark-gray);

    transform: translateY(var(--nav-height))
      translateX(${({ areVisible }) => (areVisible ? '0' : 'var(--width)')});
    transition: height var(--short-transition-duration),
      transform var(--short-transition-duration) var(--fancy-cubic-bezier);
  }

  @media ${to.phoneS} {
    --width: 270px;
  }
`;
