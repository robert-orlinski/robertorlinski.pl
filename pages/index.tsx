import Head from 'next/head';

import { Title } from '../components/SectionTitle';
import { WideWrapper } from '../components/Foundations/Wrapper';
import { MainBanner } from '../components/MainHeader';
import { Intro } from '../components/Intro';
import { Footer } from '../components/Footer';

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
    <WideWrapper as="main">
      <Intro />
      <section>
        <Title>Najnowsze artykuły</Title>
      </section>
    </WideWrapper>
    <Footer />
  </>
);

export default Home;
