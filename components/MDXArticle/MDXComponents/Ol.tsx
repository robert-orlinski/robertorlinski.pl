import styled from 'styled-components';

import { List } from './List';

export const Ol = styled(List).attrs({ as: 'ol' })`
  counter-reset: list;
`;
