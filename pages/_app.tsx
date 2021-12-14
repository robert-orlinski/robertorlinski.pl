import { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';

import Layout from 'Components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <CookiesProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CookiesProvider>
);

export default MyApp;
