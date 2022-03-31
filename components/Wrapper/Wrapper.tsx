import styled, { css } from 'styled-components';

import { to } from 'Devices';

export type Props = {
  size?: 'tiny' | 'small' | 'medium' | 'big' | 'default';
  withSpaceAbove?: boolean;
  withSpaceBelow?: boolean;
  withBorderAbove?: boolean;
  withBorderBelow?: boolean;
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

const Wrapper = styled.section<Props>`
  width: var(--wrapper-width);
  margin-right: auto;
  margin-left: auto;

  --wrapper-width: ${({ size }) => (size ? sizes.desktop[size] : sizes.desktop.default)};
  --wrapper-gap: var(--section-gap);

  ${({ withSpaceAbove }) =>
    withSpaceAbove &&
    css`
      padding-top: var(--wrapper-gap);
    `}

  ${({ withSpaceBelow }) =>
    withSpaceBelow &&
    css`
      padding-bottom: var(--wrapper-gap);
    `}

  ${({ withBorderAbove }) =>
    withBorderAbove &&
    css`
      border-top: 1px solid var(--line-gray);
    `}

  ${({ withBorderBelow }) =>
    withBorderBelow &&
    css`
      border-bottom: 1px solid var(--line-gray);
    `}

  ${({ size }) =>
    (size === 'big' || size === 'default') &&
    css`
      @media ${to.laptop} {
        --wrapper-width: 900px;
      }
    `}

  ${({ size }) =>
    size !== 'tiny' &&
    css`
      @media ${to.tabletL} {
        --wrapper-width: 690px;
      }
    `}

  @media ${to.tablet} {
    --wrapper-width: ${({ size }) => (size === 'tiny' ? sizes.tablet.tiny : sizes.tablet.default)};
  }

  @media ${to.phoneL} {
    --wrapper-width: calc(100vw - 60px);
  }
`;

export default Wrapper;
