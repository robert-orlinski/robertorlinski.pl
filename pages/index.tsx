import Head from 'next/head';
import { Intro } from '../components/Intro';

import { MainBanner } from '../components/MainBanner';

const Home = () => (
  <>
    <Head>
      <title>Robert Orliński</title>
      <meta
        name="description"
        content="W WordPressie widziałem już prawie wszystko, więc teraz skupiam się na front-endzie. Programuję dla siebie oraz klientów, piszę na blogu i nagrywam filmy na YouTubie. Po godzinach działam jako aktywista ✨"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainBanner />
    <main>
      <Intro />
    </main>
  </>
);

export default Home;
