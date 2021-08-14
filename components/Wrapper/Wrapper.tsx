import styled from 'styled-components';

import { WrapperBase } from '../WrapperBase';

import { to } from 'Devices';

export const Wrapper = styled(WrapperBase)`
  width: 1170px;

  @media ${to.laptop} {
    width: 900px;
  }

  @media ${to.tabletL} {
    width: 690px;
  }

  @media ${to.tablet} {
    width: 500px;
  }
`;
