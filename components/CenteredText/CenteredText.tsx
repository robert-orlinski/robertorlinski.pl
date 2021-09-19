import styled from 'styled-components';

import { from } from 'Devices';

export const CenteredText = styled.div`
  @media ${from.phoneL} {
    text-align: center;
  }
`;
