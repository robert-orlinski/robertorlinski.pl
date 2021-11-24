import styled from 'styled-components';

import { between } from 'Devices';

const ListedPostContainer = styled.li`
  position: relative;

  @media ${between.tabletAndTabletL} {
    display: flex;

    & > * {
      flex: 1 1 0;
    }
  }
`;

export default ListedPostContainer;
