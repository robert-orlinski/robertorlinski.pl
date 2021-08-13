import styled from 'styled-components';

import { to } from '../../helpers/styles/devices';

export const WrapperBase = styled.section`
  margin-right: auto;
  margin-left: auto;

  @media ${to.phoneL} {
    width: 84%;
  }
`;
