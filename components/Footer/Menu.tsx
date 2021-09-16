import { FC } from 'react';
import styled from 'styled-components';

import { ElementWithOpacity } from '../ElementWithOpacity';
import { LinkContainer } from '../LinkContainer';
import { MenuItem } from '../MenuItem';

import { CatalogedLinksArray } from 'Types/links';
import { to } from 'Helpers/devices';

type Props = {
  source: CatalogedLinksArray;
};

export const FooterMenu: FC<Props> = ({ source }) => (
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
