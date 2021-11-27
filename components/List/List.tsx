import { FC } from 'react';

import P from '../P';

type Props = {
  as: 'ul' | 'ol';
};

const List: FC<Props> = ({ as, ...props }) => <P {...{ as }} {...props} />;

export default List;
