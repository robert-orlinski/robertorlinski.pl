import styled from 'styled-components';

import { UnderlinedLink } from '../Foundations/Clickable/UnderlinedLink';
import { LinkContainer } from '../Foundations/Clickable/LinkContainer';
import { mainMenuRoutes } from '../../helpers/routes/mainMenu';

import { from, to } from '../../helpers/styles/devices';

const Menu = styled.ul`
  display: flex;
  align-items: center;

  margin-right: 15px;

  @media ${to.tabletL} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  @media ${from.tabletL} {
    transform: translateY(-12%);
  }
`;

const Item = styled.li`
  padding: 0 12px;

  @media ${to.tabletL} {
    padding: 0 0 15px 0;
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
    {mainMenuRoutes &&
      mainMenuRoutes.map(({ href, title }, i) => (
        <Item key={`main-menu-${i}`}>
          <LinkContainer href={href}>
            <StyledLink>{title}</StyledLink>
          </LinkContainer>
        </Item>
      ))}
  </Menu>
);
