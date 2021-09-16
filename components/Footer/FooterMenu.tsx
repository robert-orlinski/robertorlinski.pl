import { FC } from 'react';
import styled from 'styled-components';

import { MenuItem } from '../MenuItem';

import { ElementWithOpacity } from 'Components/ElementWithOpacity';
import { CatalogedLinksArray } from 'Types/links';
import { LinkContainer } from '../LinkContainer';

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

const StyledLink = styled(ElementWithOpacity)`
  font-size: 0.85rem;
  text-transform: uppercase;
`;
