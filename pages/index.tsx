import { FC } from 'react';
import { GetStaticProps } from 'next';

import { ButtonContainer } from 'Components/ButtonContainer';
import { TextWithLinks } from 'Components/TextWithLinks';
import { NewArticles } from 'Components/NewArticles';
import { MainBanner } from 'Components/MainBanner';
import { Newsletter } from 'Components/Newsletter';
import { Wrapper } from 'Components/Wrapper';
import { Button } from 'Components/Button';
import { Intro } from 'Components/Intro';
import { Head } from 'Components/Head';
import { P } from 'Components/P';

import { getNewestPosts } from 'Helpers/content/posts';
import { siteName } from 'SiteName';
import { mySummary } from 'Data/mySummary';

import { PostsContainer } from 'Types/content';

import bannerImage from 'Images/banners/me.jpg';

const meta = {
  title: siteName,
  description:
    'W WordPressie widziałem już prawie wszystko, więc teraz skupiam się na front-endzie. Programuję dla siebie oraz klientów, piszę na blogu i nagrywam filmy na YouTubie. Po godzinach działam jako aktywista ✨',
};

const Home: FC<PostsContainer> = ({ posts }) => (
  <>
    <Head {...meta} />
    <MainBanner
      title="Cześć, jestem Robert!"
      image={{
        src: bannerImage,
        alt: 'Robert zamierzający uderzyć ogromny, pluszowy przycisk "enter", który jednocześnie można podłączyć na USB i tym samym zatwierdzać rzeczy z potężnym impetem.',
      }}
    />
    <Wrapper as="main">
      <Intro>
        <P>
          Przez parę ostatnich lat pracowałem z WordPressem, aż do momentu, w którym okazało się, że
          niewiele może mnie w nim już zaskoczyć - dlatego niedawno przerzuciłem się w pełni na
          front-end.
        </P>
        <TextWithLinks text={mySummary} />
        <ButtonContainer>
          <Button href="/najpopularniejsze">Najpopularniejsze artykuły</Button>
        </ButtonContainer>
      </Intro>
      <NewArticles {...{ posts }} />
      <Newsletter />
    </Wrapper>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getNewestPosts();

  return {
    props: { posts },
  };
};

export default Home;
