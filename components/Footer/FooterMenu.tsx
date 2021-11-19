import { FC } from 'react';
import styled from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import LinkContainer from 'Components/LinkContainer';
import MenuItem from 'Components/MenuItem';

import { CatalogedLink } from 'Types/links';
import { to } from 'Devices';

type Props = {
  source: CatalogedLink[];
};

const FooterMenu: FC<Props> = ({ source }) => (
  <Container>
    {source &&
      source.map(({ href, title }, i) => (
        <MenuItem key={`main-menu-${i}`}>
          <LinkContainer href={href}>
            <StyledLink>{title}</StyledLink>
          </LinkContainer>
        </MenuItem>
      ))}
  </Container>
);

const Container = styled.ul`
  @media ${to.tabletL} {
    text-align: center;
  }
`;

const StyledLink = styled(ElementWithOpacity)`
  font-size: 0.85rem;
  text-transform: uppercase;
`;

export default FooterMenu;
