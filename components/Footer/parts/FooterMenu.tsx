import { FC } from 'react';
import styled from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import RouterLink from 'Components/RouterLink';
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
          <StyledLink as={RouterLink} href={href}>
            {title}
          </StyledLink>
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
