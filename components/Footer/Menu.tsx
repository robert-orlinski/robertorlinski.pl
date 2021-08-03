import { FC } from 'react';
import styled from 'styled-components';

import { MenuItem } from '../MenuItem';

// import { to } from '../../helpers/styles/devices';
import { LinkContainer } from '../Foundations/Clickable/LinkContainer';
import { CatalogedLinkType } from '../../types/global';

interface Props {
  source: Array<CatalogedLinkType>;
}

const StyledLink = styled.a`
  font-size: 0.85rem;
  text-transform: uppercase;
`;

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