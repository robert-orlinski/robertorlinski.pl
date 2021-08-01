import { FC } from 'react';
import styled from 'styled-components';

import { to } from '../../helpers/styles/devices';

const Outer = styled.nav`
  position: fixed;
  width: 100vw;
  height: var(--nav-height);

  z-index: 9999;
  top: 0;

  background-color: #fff;
  box-shadow: 0;
  transition: height 300ms ease, box-shadow 300ms ease;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  width: calc(100vw - 140px);
  max-width: 1350px;
  height: 100%;

  margin: auto;

  @media ${to.laptop} {
    width: calc(100vw - 100px);
  }

  @media ${to.tabletL} {
    width: calc(100vw - 80px);
  }

  @media ${to.phoneL} {
    width: 86%;
  }
`;

export const NavWrapper: FC = ({ children }) => (
  <Outer>
    <Inner>{children}</Inner>
  </Outer>
);
