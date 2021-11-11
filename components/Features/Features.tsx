import styled from 'styled-components';

import { from } from 'Devices';

const Features = styled.ol`
  display: grid;
  gap: calc(var(--section-gap) * 0.8);

  padding: calc(var(--section-gap) * 0.3) 0 0 calc(var(--title-font-size) * 0.3);

  counter-reset: feature;

  @media ${from.tabletL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Features;
