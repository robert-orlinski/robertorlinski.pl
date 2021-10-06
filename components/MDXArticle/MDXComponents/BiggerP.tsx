import styled from 'styled-components';

import { P } from 'Components/P';

import { to } from 'Devices';

export const BiggerP = styled(P)`
  font-size: 1.2rem;

  h1 + & > img,
  h2 + & > img,
  h3 + & > img,
  h4 + & > img,
  h5 + & > img,
  h6 + & > img {
    margin-top: 0.5rem;
  }

  @media ${to.phoneL} {
    font-size: 1.1rem;
  }
`;
