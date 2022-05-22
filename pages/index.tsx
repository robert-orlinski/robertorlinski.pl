import { FC } from 'react';
import { GetStaticProps } from 'next';

import TextWithLinks from 'Components/TextWithLinks';
import CenteredText from 'Components/CenteredText';
import PostsExcerpt from 'Components/PostsExcerpt';
import MainBanner from 'Components/MainBanner';
import Newsletter from 'Components/Newsletter';
import TextBlock from 'Components/TextBlock';
import Button from 'Components/Button';
import Head from 'Components/Head';
import P from 'Components/P';

import { getPosts } from 'Helpers/content/posts';
import addressSeparator from 'AddressSeparator';
import mySummary from 'Data/mySummary';
import siteName from 'SiteName';
import slogan from 'Slogan';

import { Post } from 'Types/content';

import bannerImage from 'Images/banners/me.jpg';

type Props = {
  newestPosts: Post[];
  popularPosts: Post[];
};

const Home: FC<Props> = ({ newestPosts, popularPosts }) => (
  <>
    <Head
      title={`${siteName} ${addressSeparator} ${slogan}`}
      description="W WordPressie widziałem już dużo, więc teraz skupiam się na front-endzie. Programuję dla siebie oraz klientów, piszę na blogu i nagrywam filmy na YouTubie. Po godzinach działam jako aktywista ✨"
      featuredImage={bannerImage.src}
      contentType="website"
    />
    <MainBanner
      title="Cześć, jestem Robert!"
      image={{
        src: bannerImage,
        alt: 'Robert zamierzający uderzyć ogromny, pluszowy przycisk "enter", który jednocześnie można podłączyć na USB i tym samym zatwierdzać rzeczy z potężnym impetem.',
      }}
    />
    <main>
      <TextBlock>
        <P>
          Działałem jako freelancer, później pomagałem rozwijać się agencji kreatywnej, a od pewnego
          czasu, współtworzę większe aplikacje i platformy - jako front-end developer.
        </P>
        <TextWithLinks text={mySummary} />
        <CenteredText as="footer">
          <Button href="/tematy">Jakie tematy tu poruszam?</Button>
        </CenteredText>
      </TextBlock>
      <PostsExcerpt
        title="Najnowsze artykuły"
        posts={newestPosts}
        button={{
          href: '/artykuly',
          title: 'Wszystkie artykuły',
        }}
      />
      <PostsExcerpt
        title="Popularne artykuły"
        posts={popularPosts}
        button={{
          href: '/popularne-artykuly',
          title: 'Wszystkie popularne artykuły',
        }}
        withSpaceAbove
      />
      <Newsletter />
    </main>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  const menuOrderedPopularPosts = [...posts]
    .sort((a, b) => a.menuOrder - b.menuOrder) // Lowest on top
    .filter(({ isPopular }) => isPopular);

  return {
    props: {
      newestPosts: posts.slice(0, 6),
      popularPosts: menuOrderedPopularPosts.slice(0, 3),
    },
  };
};

export default Home;
