import styled from 'styled-components';

import { to } from '../../helpers/styles/devices';

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.2rem;

  @media ${to.phoneL} {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;
