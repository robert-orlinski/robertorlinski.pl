import { FC } from 'react';
import { GetStaticProps } from 'next';

import Head from 'Components/Head';
import MainBanner from 'Components/MainBanner';
import Wrapper from 'Components/Wrapper';
import PostsList from 'Components/PostsList';

import siteName from 'SiteName';
import addressSeparator from 'Helpers/metaData/addressSeparator';
import { getPopularPosts } from 'Helpers/content/posts';

import { PostsContainer } from 'Types/content';

import bannerImage from 'Images/banners/best.jpg';

const PopularPosts: FC<PostsContainer> = ({ posts }) => {
  const meta = {
    title: `Popularne artykuły ${addressSeparator} ${siteName}`,
    description:
      'A tu z kolei, znajdziesz artykuły najpopularniejsze! Wszystko, co do tej pory najczęściej pomagało czytelnikom, znajduje się w tym miejscu.',
  };

  return (
    <>
      <Head {...meta} />
      <MainBanner
        title="Popularne artykuły"
        image={{
          src: bannerImage,
          alt: '',
        }}
      />
      <Wrapper as="main" withSpaceBelow>
        <PostsList {...{ posts }} />
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPopularPosts();

  return {
    props: { posts },
  };
};

export default PopularPosts;
