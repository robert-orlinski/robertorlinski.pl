import { FC } from 'react';

import { CssVariables } from './CssVariables';
import { GlobalStyle } from './GlobalStyle';
import { FocusVisibleWhileUserIsTabbing } from './FocusVisibleWhileUserIsTabbing';

import { Footer } from '../Footer';

export const Layout: FC = ({ children }) => (
  <>
    <CssVariables />
    <GlobalStyle />
    <FocusVisibleWhileUserIsTabbing />
    {children}
    <Footer />
  </>
);
