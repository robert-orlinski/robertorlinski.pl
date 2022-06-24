import styled from 'styled-components';

import useToggle from 'Hooks/useToggle';
import useStickyElement from 'Hooks/useStickyElement';

import HiddenMainPageTitle from 'Components/HiddenMainPageTitle';
import Separator from 'Components/Separator';
import SocialMedia from 'Components/SocialMedia';
import Search from 'Components/Search';
import Hamburger from 'Components/Hamburger';
import Brand from 'Components/Brand';

import NavBar from './parts/NavBar';
import NavMenu from './parts/NavMenu';
import NavLinks from './parts/NavLinks';

import { to } from 'Devices';

const Nav = () => {
  const [isNavVisibleOnMobile, toggleNavVisibility] = useToggle(false);
  const [isSticky] = useStickyElement();

  return (
    <NavBar {...{ isSticky }}>
      <HiddenMainPageTitle />
      <Brand />
      <Container>
        <NavLinks areVisible={isNavVisibleOnMobile} dataName="main-menu">
          <NavMenu />
          <SocialMedia />
        </NavLinks>
        <SeparatorHiddenOnMobile />
        <Container>
          <Search />
          <Hamburger
            onClick={toggleNavVisibility}
            isCrossed={isNavVisibleOnMobile}
            ariaLabelForClosed="Otwórz menu nawigacyjne"
            ariaLabelForOpened="Zamknij menu nawigacyjne"
            isHiddenOnDesktop={true}
            dataName="main-menu-opener"
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

export default Nav;
