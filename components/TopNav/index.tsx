import { useState, CSSProperties } from 'react';
import styled from 'styled-components';

import { HiddenMainPageTitle } from '../HiddenMainPageTitle';
import { Separator } from '../Separator';
import { SocialMedia } from '../SocialMedia';
import { Search } from '../Search';

import { NavBar } from './Bar';
import { Brand } from '../Brand';
import { NavMenu } from './Menu';
import { NavLinks } from './Links';
import { Hamburger } from './Hamburger';

import { to } from 'Devices';

export const Nav = () => {
  const [isNavVisibleOnMobile, setNavVisibilityOnMobile] = useState(false);

  const navOnMobileVisibility = (
    isNavVisibleOnMobile
      ? {
          '--translation': '0',
        }
      : undefined
  ) as CSSProperties | undefined;

  const hamburgerTransformation = (
    isNavVisibleOnMobile
      ? {
          '--top-bar-transform': 'rotate(90deg) translateY(calc(var(--hamburger-size) / -3.8))',
          '--middle-bar-transform': 'rotate(-45deg)',
          '--bottom-bar-transform':
            'rotate(90deg) translateY(calc((var(--hamburger-size) / 3.8) - 1px))',
        }
      : undefined
  ) as CSSProperties | undefined;

  return (
    <NavBar>
      <HiddenMainPageTitle />
      <Brand />
      <Container>
        <NavLinks style={navOnMobileVisibility}>
          <NavMenu />
          <SocialMedia />
        </NavLinks>
        <SeparatorHiddenOnMobile />
        <Container>
          <Search />
          <Hamburger
            style={hamburgerTransformation}
            onClick={() => setNavVisibilityOnMobile(!isNavVisibleOnMobile)}
          />
        </Container>
      </Container>
    </NavBar>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SeparatorHiddenOnMobile = styled(Separator)`
  @media ${to.tabletL} {
    display: none;
  }
`;
