import { FC } from 'react';
import { GetStaticProps } from 'next';

import { Head } from 'Components/Head';
import { MainBanner } from 'Components/MainBanner';
import { Wrapper } from 'Components/Wrapper';
import { PostsList } from 'Components/PostsList';

import { siteName } from 'SiteName';
import { getAllPosts } from 'Helpers/content/posts';

import { PostsContainer } from 'Types/content';

import bannerImage from '../../public/images/banners/forest.jpg';

const meta = {
  title: `Artykuły | ${siteName}`,
  description:
    'Wszystkie artykuły, które do tej pory pojawiły się na blogu. Przeczytasz o front-endzie, WordPressie, trochę przemyśleń i trochę rzeczy związanych z designem oraz pracą jako programista',
};

const Blog: FC<PostsContainer> = ({ posts }) => (
  <>
    <Head {...meta} />
    <MainBanner
      title="Wszystkie artykuły"
      image={{
        src: bannerImage,
        alt: 'Robert zamierzający uderzyć ogromny, pluszowy przycisk "enter", który jednocześnie można podłączyć na USB i tym samym zatwierdzać rzeczy z potężnym impetem.',
      }}
    />
    <Wrapper as="main">
      <PostsList {...{ posts }} />
    </Wrapper>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
};

export default Blog;
