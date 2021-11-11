import styled from 'styled-components';

import { from, to } from 'Devices';

import Wrapper from 'Components/Wrapper';

const Row = styled(Wrapper)`
  display: grid;

  padding-bottom: var(--section-gap);

  @media ${from.tabletL} {
    grid-template-columns: var(--columns, 1fr 1fr);
    grid-column-gap: calc(var(--section-gap) * 0.65);
  }

  @media ${to.tabletL} {
    grid-row-gap: calc(var(--section-gap) * 0.7);
  }
`;

export default Row;
