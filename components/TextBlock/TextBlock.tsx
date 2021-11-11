import styled from 'styled-components';

import Wrapper from 'Components/Wrapper';

import { from } from 'Devices';

const TextBlock = styled(Wrapper).attrs({
  size: 'small',
  withSpaceBelow: true,
})`
  font-size: 1.1rem;

  @media ${from.phoneL} {
    text-align: center;
  }
`;

export default TextBlock;
