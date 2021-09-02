import styled from 'styled-components';

import { UnderlinedLink } from '../UnderlinedLink';
import { LinkContainer } from '../LinkContainer';
import { mainMenu } from 'Data/header/mainMenu';
import { MenuItem } from '../MenuItem';

import { from, to } from 'Devices';

export const NavMenu = () => (
  <Menu>
    {mainMenu &&
      mainMenu.map(({ href, title }, i) => (
        <MenuItem key={`main-menu-${i}`}>
          <LinkContainer href={href}>
            <StyledLink>{title}</StyledLink>
          </LinkContainer>
        </MenuItem>
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

const StyledLink = styled(UnderlinedLink)`
  font-size: 0.95rem;
  font-weight: 600;

  @media ${to.tabletL} {
    color: #fff;
    font-size: 1.1rem;
  }
`;