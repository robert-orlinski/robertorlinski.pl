import { FC } from 'react';
import styled from 'styled-components';

import { WideWrapper } from '../Wrapper';

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

const Inner = styled(WideWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  height: 100%;
`;

export const NavBar: FC = ({ children }) => (
  <Outer>
    <Inner>{children}</Inner>
  </Outer>
);
