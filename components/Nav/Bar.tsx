import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../Wrapper';

import { InlineStyle } from 'Types/styled-components';

type Props = {
  isSticky: boolean;
};

export const NavBar: FC<Props> = ({ children, isSticky }) => {
  const stickyNavStyle = (
    isSticky
      ? {
          '--height': 'calc(var(--nav-height) * 0.85)',
          '--box-shadow': 'rgba(34,34,34,0.1) 0 5px 10px',
        }
      : undefined
  ) as InlineStyle;

  return (
    <Outer style={stickyNavStyle}>
      <Inner>{children}</Inner>
    </Outer>
  );
};

const Outer = styled.nav`
  position: fixed;
  width: 100vw;
  height: var(--height, var(--nav-height));

  z-index: 9999;
  top: 0;

  background-color: #fff;
  box-shadow: 0;
  transition: height 300ms;

  &::after {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    box-shadow: var(--box-shadow);
    transition: box-shadow 300ms ease;
  }
`;

const Inner = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  height: 100%;
`;
