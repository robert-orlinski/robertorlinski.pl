import styled from 'styled-components';

import { from } from 'Devices';

const CenteredText = styled.div`
  @media ${from.phoneL} {
    text-align: center;
  }
`;

export default CenteredText;
