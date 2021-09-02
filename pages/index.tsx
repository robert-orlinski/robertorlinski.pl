import { Head } from '../components/Head';
import { SectionTitle } from '../components/SectionTitle';
import { WideWrapper } from '../components/WideWrapper';
import { MainBanner } from '../components/MainBanner';
import { Intro } from '../components/Intro';
import { PostsList } from '../components/PostsList';

import { siteName } from 'SiteName';

import bannerImage from 'Images/banners/me.jpg';

const meta = {
  title: siteName,
  description:
    'W WordPressie widziałem już prawie wszystko, więc teraz skupiam się na front-endzie. Programuję dla siebie oraz klientów, piszę na blogu i nagrywam filmy na YouTubie. Po godzinach działam jako aktywista ✨',
};

const Home = () => (
  <>
    <Head {...meta} />
    <MainBanner
      title="Cześć, jestem Robert"
      image={{
        src: bannerImage,
        alt: 'Robert zamierzający uderzyć ogromny, pluszowy przycisk "enter", który jednocześnie można podłączyć na USB i tym samym zatwierdzać rzeczy z potężnym impetem.',
      }}
    />
    <WideWrapper as="main">
      <Intro />
      <section>
        <SectionTitle>Najnowsze artykuły</SectionTitle>
        <PostsList />
      </section>
    </WideWrapper>
  </>
);

export default Home;
