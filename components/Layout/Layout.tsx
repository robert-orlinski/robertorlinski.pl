import { FC } from 'react';

import { FocusVisibleWhileUserIsTabbing } from './FocusVisibleWhileUserIsTabbing';
import { CssVariables } from './CssVariables';
import { GlobalStyle } from './GlobalStyle';

import { Footer } from 'Components/Footer';

export const Layout: FC = ({ children }) => (
  <>
    <CssVariables />
    <GlobalStyle />
    <FocusVisibleWhileUserIsTabbing />
    {children}
    <Footer />
  </>
);
