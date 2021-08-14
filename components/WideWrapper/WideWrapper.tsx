import styled from 'styled-components';

import { WrapperBase } from '../WrapperBase';

import { to } from 'Devices';

export const WideWrapper = styled(WrapperBase)`
  width: min(1350px, calc(100vw - 140px));

  @media ${to.tablet} {
    width: calc(100vw - 80px);
  }
`;
