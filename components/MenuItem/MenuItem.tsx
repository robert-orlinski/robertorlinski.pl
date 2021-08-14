import styled from 'styled-components';

import { from, to } from 'Devices';

export const MenuItem = styled.li`
  padding: 0 0.6rem;

  @media ${from.tabletL} {
    display: inline-block;
  }

  @media ${to.tabletL} {
    padding: 0 0 0.5rem 0;
  }
`;
