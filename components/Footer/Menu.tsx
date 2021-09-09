import { FC } from 'react';
import styled from 'styled-components';

import { MenuItem } from '../MenuItem';

import { LinkContainer } from '../LinkContainer';
import { CatalogedLinksArray } from 'Types/links';

type Props = {
  source: CatalogedLinksArray;
};

export const FooterMenu: FC<Props> = ({ source }) => (
  <ul>
    {source &&
      source.map(({ href, title }, i) => (
        <MenuItem key={`main-menu-${i}`}>
          <LinkContainer href={href}>
            <StyledLink>{title}</StyledLink>
          </LinkContainer>
        </MenuItem>
      ))}
  </ul>
);

const StyledLink = styled.a`
  font-size: 0.85rem;
  text-transform: uppercase;
`;
