import { FC } from 'react';
import { GetStaticProps } from 'next';

import CenteredText from 'Components/CenteredText';
import PostsExcerpt from 'Components/PostsExcerpt';
import MainBanner from 'Components/MainBanner';
import TextBlock from 'Components/TextBlock';
import Button from 'Components/Button';
import Head from 'Components/Head';
import P from 'Components/P';

import { getPosts } from 'Helpers/content/posts';
import addressSeparator from 'AddressSeparator';
import siteName from 'SiteName';
import slogan from 'Slogan';

import { Post } from 'Types/content';

import bannerImage from 'Images/featured-images/me.jpg';

type Props = {
  newestPosts: Post[];
  popularPosts: Post[];
};

const Home: FC<Props> = ({ newestPosts, popularPosts }) => (
  <>
    <Head
      title={`${siteName} ${addressSeparator} ${slogan}`}
      description="Na ten moment nie piszę nowych treści na bloga, ale gdy to robiłem, pisałem o front-endzie, WordPressie oraz pracy jako freelancer. Możliwe, że w ramach tego archiwum, znajdziesz coś przydatnego dla siebie!"
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
          Na ten moment nie piszę nowych treści na bloga, ale gdy to robiłem, pisałem o
          front-endzie, WordPressie oraz pracy jako freelancer. Możliwe, że w ramach tego archiwum,
          znajdziesz coś przydatnego dla siebie!
        </P>
        <CenteredText as="footer">
          <Button href="/tematy">Jakie tematy tu poruszałem?</Button>
        </CenteredText>
      </TextBlock>
      <PostsExcerpt
        title="Ostatnie artykuły"
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
        withSpaceBelow
      />
    </main>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  const menuOrderedPopularPosts = posts
    .filter(({ isPopular }) => isPopular)
    .sort((a, b) => a.menuOrder - b.menuOrder);

  return {
    props: {
      newestPosts: posts.slice(0, 6),
      popularPosts: menuOrderedPopularPosts.slice(0, 3),
    },
  };
};

export default Home;
