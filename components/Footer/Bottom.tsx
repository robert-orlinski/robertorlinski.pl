import styled from 'styled-components';

import { Wrapper } from '../Foundations/Wrapper';

import { to } from '../../helpers/styles/devices';

export const Bottom = styled(Wrapper)`
  max-width: 460px;

  font-size: 0.9rem;
  text-align: center;

  @media ${to.tablet} {
    max-width: 400px;
  }
`;
