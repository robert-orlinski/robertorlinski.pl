import { FC } from 'react';
import { Global } from './Global';

const Layout: FC = ({ children }) => (
  <>
    <Global />
    {children}
  </>
);

export { Layout };
