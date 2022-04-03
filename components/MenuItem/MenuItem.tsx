import styled from 'styled-components';

import { from, between } from 'Devices';

const MenuItem = styled.li`
  padding: 0 0.6rem;

  @media ${between.tabletLAndLaptop} {
    padding: 0 0.4rem;
  }

  @media ${from.tabletL} {
    display: inline-block;
  }
`;

export default MenuItem;
