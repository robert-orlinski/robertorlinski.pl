import styled from 'styled-components';

import UnderlinedLink from 'Components/UnderlinedLink';
import RouterLink from 'Components/RouterLink';
import MenuItem from 'Components/MenuItem';

import mainMenu from 'Data/header/mainMenu';

import { from, to } from 'Devices';

const NavMenu = () => (
  <Menu>
    {mainMenu &&
      mainMenu.map(({ href, title }, i) => (
        <TopMenuItem key={`main-menu-${i}`}>
          <StyledLink as={RouterLink} href={href}>
            {title}
          </StyledLink>
        </TopMenuItem>
      ))}
  </Menu>
);

const Menu = styled.ul`
  @media ${to.tabletL} {
    margin-bottom: 1rem;
  }

  @media ${from.tabletL} {
    margin-right: 0.8rem;

    transform: translateY(-12%);
  }
`;

const TopMenuItem = styled(MenuItem)`
  @media ${to.tabletL} {
    padding: 0 0 0.5rem 0;
  }
`;

const StyledLink = styled(UnderlinedLink)`
  font-size: 0.9rem;
  font-weight: 600;

  @media ${to.tabletL} {
    color: #fff;
    font-size: 1.1rem;
  }
`;

export default NavMenu;
