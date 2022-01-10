import { FC } from 'react';
import { GetStaticProps } from 'next';

import CenteredText from 'Components/CenteredText';
import TextWithLinks from 'Components/TextWithLinks';
import NewArticles from 'Components/NewArticles';
import MainBanner from 'Components/MainBanner';
import Newsletter from 'Components/Newsletter';
import TextBlock from 'Components/TextBlock';
import Wrapper from 'Components/Wrapper';
import Button from 'Components/Button';
import Head from 'Components/Head';
import P from 'Components/P';

import { getNewestPosts } from 'Helpers/content/posts';
import addressSeparator from 'AddressSeparator';
import mySummary from 'Data/mySummary';
import siteName from 'SiteName';
import slogan from 'Slogan';

import { PostsContainer } from 'Types/content';

import bannerImage from 'Images/banners/me.jpg';

const Home: FC<PostsContainer> = ({ posts }) => {
  const meta = {
    title: `${siteName} ${addressSeparator} ${slogan}`,
    description:
      'W WordPressie widziałem już dużo, więc teraz skupiam się na front-endzie. Programuję dla siebie oraz klientów, piszę na blogu i nagrywam filmy na YouTubie. Po godzinach działam jako aktywista ✨',
  };

  return (
    <>
      <Head {...meta} />
      <MainBanner
        title="Cześć, jestem Robert!"
        image={{
          src: bannerImage,
          alt: 'Robert zamierzający uderzyć ogromny, pluszowy przycisk "enter", który jednocześnie można podłączyć na USB i tym samym zatwierdzać rzeczy z potężnym impetem.',
        }}
        isImageFluid
      />
      <Wrapper as="main">
        <TextBlock>
          <P>
            Działałem jako freelancer, pomagałem rozwijać agencję kreatywną, a niedawno zacząłem pracę jako front-end developer, aby współtworzyć naprawdę duże projekty, a przez to zbierać jeszcze więcej doświadczeń!
          </P>
          <TextWithLinks text={mySummary} />
          <CenteredText as="footer">
            <Button href="/popularne-artykuly">Sprawdź najchętniej czytane artykuły!</Button>
          </CenteredText>
        </TextBlock>
        <NewArticles {...{ posts }} />
        <Newsletter />
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getNewestPosts();

  return {
    props: { posts },
  };
};

export default Home;
