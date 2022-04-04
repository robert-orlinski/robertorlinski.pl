import { FC } from 'react';
import { GetStaticProps } from 'next';

import Head from 'Components/Head';
import MainBanner from 'Components/MainBanner';
import Wrapper from 'Components/Wrapper';
import PostsList from 'Components/PostsList';

import siteName from 'SiteName';
import addressSeparator from 'Helpers/metaData/addressSeparator';
import { getPosts } from 'Helpers/content/posts';

import { PostsContainer } from 'Types/content';

import bannerImage from 'Images/banners/best.jpg';

const PopularPosts: FC<PostsContainer> = ({ posts }) => (
  <>
    <Head
      title={`Popularne artykuły ${addressSeparator} ${siteName}`}
      description="A tu z kolei, znajdziesz artykuły najpopularniejsze! Wszystko, co do tej pory najczęściej pomagało czytelnikom, znajduje się w tym miejscu."
      featuredImage={bannerImage.src}
      contentType="website"
    />
    <MainBanner
      title="Popularne artykuły"
      image={{
        src: bannerImage,
        alt: '',
      }}
    />
    <Wrapper as="main" withSpaceAbove withSpaceBelow>
      <PostsList {...{ posts }} />
    </Wrapper>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  const menuOrderedPopularPosts = posts
    .sort((a, b) => a.menuOrder - b.menuOrder) // Lowest on top
    .filter(({ isPopular }) => isPopular);

  return {
    props: { posts: menuOrderedPopularPosts },
  };
};

export default PopularPosts;
