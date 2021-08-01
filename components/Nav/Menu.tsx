import styled from 'styled-components';

import { ElementWithOpacity } from '../Foundations/Clickable/ElementWithOpacity';
import { LinkContainer } from '../Foundations/Clickable/LinkContainer';
import { mainMenuRoutes } from '../../helpers/routes/mainMenu';

import { from, to } from '../../helpers/styles/devices';
import { pseudoElement } from '../../helpers/styles/mixins';

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
  line-height: 1;

  @media ${to.tabletL} {
    padding: 0 0 15px 0;
  }
`;

const StyledLink = styled(ElementWithOpacity)`
  position: relative;
  font-size: 17px;
  font-weight: 600;

  @media ${to.tabletL} {
    color: #fff;
    font-size: 19px;
  }

  &::after {
    ${pseudoElement}

    width: 100%;
    height: 1px;
    bottom: -2px;

    background-color: var(--dark-gray);

    transform: scale(0, 1);
    transform-origin: right center;
    transition: transform 250ms ease-in-out;
  }

  &:hover {
    &::after {
      transform-origin: left center;
      transform: scale(1, 1);
    }
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
