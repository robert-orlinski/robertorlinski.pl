import styled from 'styled-components';

import { P } from 'Components/P';

import { to } from 'Devices';

export const BiggerP = styled(P)`
  font-size: 1.2rem;

  @media ${to.phoneL} {
    font-size: 1.1rem;
  }
`;
