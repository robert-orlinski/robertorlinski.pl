import { FC } from 'react';
import styled from 'styled-components';

import P from '../P';

type Props = {
  as: 'ul' | 'ol';
};

const List: FC<Props> = ({ as, ...props }) => <ListContainer {...{ as }} {...props} />;

const ListContainer = styled(P)`
  li > & {
    padding-top: 0.5rem;
  }
`;

export default List;
