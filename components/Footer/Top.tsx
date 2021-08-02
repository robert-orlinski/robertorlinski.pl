import styled from 'styled-components';

import { to } from '../../helpers/styles/devices';
import { flex } from '../../helpers/styles/mixins';

export const Top = styled.section`
  ${flex({ justifyContent: 'space-between' })}
  margin-bottom: 60px;

  @media ${to.tabletL} {
    margin-bottom: 50px;
  }

  @media ${to.tablet} {
    flex-direction: column;
    margin-bottom: 35px;
  }
`;
