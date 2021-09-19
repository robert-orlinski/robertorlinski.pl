import styled from 'styled-components';

import { from, to } from 'Devices';

import { Wrapper } from 'Components/Wrapper';

export const Row = styled(Wrapper)`
  display: grid;

  padding-bottom: var(--section-space);

  @media ${from.tabletL} {
    grid-template-columns: var(--columns, 1fr 1fr);
    grid-column-gap: calc(var(--section-space) * 0.65);
  }

  @media ${to.tabletL} {
    grid-row-gap: calc(var(--section-space) * 0.7);
  }
`;
