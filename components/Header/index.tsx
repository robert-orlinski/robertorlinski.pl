import { FC } from 'react';

import { Nav } from '../Nav';

export const Header: FC = ({ children }) => (
  <header>
    <Nav />
    {children}
  </header>
);
