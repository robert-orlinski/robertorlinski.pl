import styled from 'styled-components';

import { UnderlinedLink } from '../Foundations/Clickable/UnderlinedLink';
import { LinkContainer } from '../Foundations/Clickable/LinkContainer';
import { mainMenu } from '../../helpers/routes/header/mainMenu';
import { MenuItem } from '../MenuItem';

import { from, to } from '../../helpers/styles/devices';

const Menu = styled.ul`
  margin-right: 15px;

  @media ${to.tabletL} {
    margin-bottom: 10px;
  }

  @media ${from.tabletL} {
    transform: translateY(-12%);
  }
`;

const StyledLink = styled(UnderlinedLink)`
  font-size: 0.95rem;
  font-weight: 600;

  @media ${to.tabletL} {
    color: #fff;
    font-size: 19px;
  }
`;

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
