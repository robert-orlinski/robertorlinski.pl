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

export type LinksVisibilityProps = {
  areVisible: boolean;
};

export const Nav = () => {
  const [isNavVisibleOnMobile, toggleNavVisibility] = useToggle(false);
  const [isSticky] = useStickyElement();

  return (
    <NavBar {...{ isSticky }}>
      <HiddenMainPageTitle />
      <Brand />
      <Container>
        <NavLinks areVisible={isNavVisibleOnMobile}>
          <NavMenu />
          <SocialMedia />
        </NavLinks>
        <SeparatorHiddenOnMobile />
        <Container>
          <Search />
          <Hamburger
            onClick={toggleNavVisibility}
            isCrossed={isNavVisibleOnMobile}
            isHiddenOnDesktop={true}
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
