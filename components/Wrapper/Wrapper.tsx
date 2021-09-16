import styled, { css } from 'styled-components';

import { to } from 'Devices';

type Props = {
  size?: 'tiny' | 'small' | 'medium' | 'default';
  withSpaceAbove?: boolean;
  withSpaceBelow?: boolean;
};

const sizes = {
  desktop: {
    tiny: '460px',
    small: '740px',
    medium: '850px',
    big: 'min(1350px, 84vw)',
  },
  tablet: {
    tiny: '400px',
    default: '500px',
  },
};

export const Wrapper = styled.section<Props>`
  max-width: ${({ size }) =>
    size === 'tiny'
      ? sizes.desktop.tiny
      : size === 'small'
      ? sizes.desktop.small
      : size === 'medium'
      ? sizes.desktop.medium
      : sizes.desktop.big};

  ${({ withSpaceAbove }) =>
    withSpaceAbove &&
    css`
      margin-top: var(--section-space);
    `}

  ${({ withSpaceBelow }) =>
    withSpaceBelow &&
    css`
      margin-bottom: var(--section-space);
    `}

  margin-right: auto;
  margin-left: auto;

  @media ${to.laptop} {
    width: 900px;
  }

  @media ${to.tabletL} {
    width: 690px;
  }

  @media ${to.tablet} {
    width: ${({ size }) => (size === 'tiny' ? sizes.tablet.tiny : sizes.tablet.default)};
  }

  @media ${to.phoneL} {
    width: calc(100vw - 60px);
  }
`;
