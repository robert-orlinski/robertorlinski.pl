import styled from 'styled-components';

import { useToggle } from 'Hooks/useToggle';
import { useStickyElement } from 'Hooks/useStickyElement';

import { HiddenMainPageTitle } from 'Components/HiddenMainPageTitle';
import { Separator } from 'Components/Separator';
import { SocialMedia } from 'Components/SocialMedia';
import { Search } from 'Components/Search';

import { NavBar } from './Bar';
import { Brand } from 'Components/Brand';
import { NavMenu } from './Menu';
import { NavLinks } from './Links';
import { Hamburger } from './Hamburger';

import { to } from 'Devices';

import { InlineStyle } from 'Types/styled-components';

export const Nav = () => {
  const [isNavVisibleOnMobile, toggleNavVisibility] = useToggle(false);
  const [isSticky] = useStickyElement();

  const navMobileVisibility = (
    isNavVisibleOnMobile
      ? {
          '--translation': '0',
        }
      : undefined
  ) as InlineStyle;

  const hamburgerTransformation = (
    isNavVisibleOnMobile
      ? {
          '--top-bar-transform': 'rotate(90deg) translateY(calc(var(--hamburger-size) / -3.8))',
          '--middle-bar-transform': 'rotate(-45deg)',
          '--bottom-bar-transform':
            'rotate(90deg) translateY(calc((var(--hamburger-size) / 3.8) - 1px))',
        }
      : undefined
  ) as InlineStyle;

  return (
    <NavBar {...{ isSticky }}>
      <HiddenMainPageTitle />
      <Brand />
      <Container>
        <NavLinks style={navMobileVisibility}>
          <NavMenu />
          <SocialMedia />
        </NavLinks>
        <SeparatorHiddenOnMobile />
        <Container>
          <Search />
          <Hamburger style={hamburgerTransformation} onClick={toggleNavVisibility} />
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
