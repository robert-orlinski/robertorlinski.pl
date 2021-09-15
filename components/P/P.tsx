import styled from 'styled-components';

import { to } from 'Devices';

export const P = styled.p`
  &:not(:last-child) {
    padding-bottom: 1.5rem;

    @media ${to.phoneL} {
      padding-bottom: 1.2rem;
    }
  }
`;
