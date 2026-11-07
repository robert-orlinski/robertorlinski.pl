import { FC, PropsWithChildren } from 'react';

import FocusVisibleWhileUserIsTabbing from './parts/FocusVisibleWhileUserIsTabbing';
import CssVariables from './parts/CssVariables';
import GlobalStyle from './parts/GlobalStyle';

import Footer from 'Components/Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <CssVariables />
    <GlobalStyle />
    <FocusVisibleWhileUserIsTabbing />
    {children}
    <Footer />
  </>
);

export default Layout;
