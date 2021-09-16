import { FC } from 'react';

import { CssVariables } from './CssVariables';
import { GlobalStyle } from './GlobalStyle';

import { Footer } from '../Footer';

export const Layout: FC = ({ children }) => (
  <>
    <CssVariables />
    <GlobalStyle />
    {children}
    <Footer />
  </>
);
