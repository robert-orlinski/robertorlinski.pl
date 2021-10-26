import styled, { css } from 'styled-components';

import { to } from 'Devices';

type Props = {
  size?: 'tiny' | 'small' | 'medium' | 'big' | 'default';
  withSpaceAbove?: boolean;
  withSpaceBelow?: boolean;
};

const sizes = {
  desktop: {
    tiny: '460px',
    small: '740px',
    medium: '850px',
    big: 'min(1100px, 84vw)',
    default: 'min(1350px, 84vw)',
  },
  tablet: {
    tiny: '400px',
    default: '84vw',
  },
};

export const Wrapper = styled.section<Props>`
  --wrapper-width: ${({ size }) =>
    size === 'tiny'
      ? sizes.desktop.tiny
      : size === 'small'
      ? sizes.desktop.small
      : size === 'medium'
      ? sizes.desktop.medium
      : size === 'big'
      ? sizes.desktop.big
      : sizes.desktop.default};

  --wrapper-gap: calc((100vw - var(--wrapper-width)) / 2);

  ${({ withSpaceAbove }) =>
    withSpaceAbove &&
    css`
      padding-top: var(--section-gap);
    `}

  ${({ withSpaceBelow }) =>
    withSpaceBelow &&
    css`
      padding-bottom: var(--section-gap);
    `}

  width: var(--wrapper-width);
  margin-right: auto;
  margin-left: auto;

  @media ${to.laptop} {
    --wrapper-width: 900px;
  }

  @media ${to.tabletL} {
    --wrapper-width: 690px;
  }

  @media ${to.tablet} {
    --wrapper-width: ${({ size }) => (size === 'tiny' ? sizes.tablet.tiny : sizes.tablet.default)};
  }

  @media ${to.phoneL} {
    --wrapper-width: calc(100vw - 60px);
  }
`;
