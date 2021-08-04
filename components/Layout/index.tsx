import { FC } from 'react';

import { Variables } from './Variables';
import { Global } from './Global';

import { Footer } from '../Footer';

export const Layout: FC = ({ children }) => (
  <>
    <Variables />
    <Global />
    {children}
    <Footer />
  </>
);
