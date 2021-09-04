import styled from 'styled-components';

import { to } from 'Devices';

type Props = {
  size?: 'tiny' | 'small' | 'medium' | 'big';
};

const sizes = {
  desktop: {
    tiny: '460px',
    small: '740px',
    medium: '850px',
    big: 'min(1350px, calc(100vw - 140px))',
  },
  tablet: {
    tiny: '460px',
    default: '500px',
  },
};

export const Wrapper = styled.section<Props>`
  width: ${({ size }) =>
    size === 'tiny'
      ? sizes.desktop.tiny
      : size === 'small'
      ? sizes.desktop.small
      : size === 'medium'
      ? sizes.desktop.medium
      : sizes.desktop.big};

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
