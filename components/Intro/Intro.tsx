import styled from 'styled-components';

import { Wrapper } from '../Wrapper';

import { from } from 'Devices';

export const Intro = styled(Wrapper).attrs({
  size: 'small',
})`
  padding-bottom: var(--section-space);
  font-size: 1.1rem;

  @media ${from.phoneL} {
    text-align: center;
  }
`;
