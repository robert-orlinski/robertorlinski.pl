import styled, { css } from 'styled-components';

import { ListedPostContainer } from 'Components/ListedPost';

import { UnderlinedLinkStyle } from 'Types/links';

export const UnderlinedLink = styled.a<UnderlinedLinkStyle>`
  position: relative;

  padding-bottom: 2px;

  background: linear-gradient(var(--dark-gray), var(--dark-gray)) no-repeat;
  background-size: var(--line-size-initial, 0 1px);
  background-position: var(--line-position-initial, 100% 100%);

  transition: background-size var(--short-transition-duration);

  ${({ withUnderlineInvisible }) =>
    withUnderlineInvisible &&
    css`
      --line-size-initial: 100% 1px;
      --line-size-hovered: 0 1px;
      --line-position-initial: 0 100%;
      --line-position-hovered: 100% 100%;
    `}

  &:hover,
  &:focus,
  ${ListedPostContainer}:hover &,
  ${ListedPostContainer}:focus & {
    background-size: var(--line-size-hovered, 100% 1px);
    background-position: var(--line-position-hovered, 0 100%);
  }
`;
