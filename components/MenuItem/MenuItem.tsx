import styled from 'styled-components';

import { from } from 'Devices';

export const MenuItem = styled.li`
  padding: 0 0.6rem;

  @media ${from.tabletL} {
    display: inline-block;
  }
`;
