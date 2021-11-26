import { FC } from 'react';
import styled, { css } from 'styled-components';

import Wrapper from 'Components/Wrapper';

type Props = {
  isSticky: boolean;
};

const NavBar: FC<Props> = ({ children, isSticky }) => (
  <Outer {...{ isSticky }}>
    <Inner>{children}</Inner>
  </Outer>
);

const Outer = styled.nav<Props>`
  position: fixed;
  width: 100vw;
  height: var(--nav-height);

  z-index: calc(var(--extreme-z-index) - 1);
  top: 0;

  background-color: #fff;
  transition: height var(--short-transition-duration) var(--fancy-cubic-bezier);

  ${({ isSticky }) =>
    isSticky &&
    css`
      --nav-height: calc(var(--default-nav-height) * 0.9);
      --box-shadow: rgba(34, 34, 34, 0.1) 0 5px 10px;
    `};

  &::after {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;
    z-index: -1;

    box-shadow: var(--box-shadow);
    transition: box-shadow var(--short-transition-duration);
  }
`;

const Inner = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  height: 100%;
`;

export default NavBar;
