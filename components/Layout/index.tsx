import { FC } from 'react';

import { Variables } from './Variables';
import { Global } from './Global';

export const Layout: FC = ({ children }) => (
  <>
    <Variables />
    <Global />
    {children}
  </>
);
