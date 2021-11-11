import styled from 'styled-components';

import { from } from 'Devices';

const MenuItem = styled.li`
  padding: 0 0.6rem;

  @media ${from.tabletL} {
    display: inline-block;
  }
`;

export default MenuItem;
