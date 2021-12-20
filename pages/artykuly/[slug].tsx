import { FC } from 'react';
import styled from 'styled-components';

import Head from 'Components/Head';
import Wrapper from 'Components/Wrapper';
import MDXArticle from 'Components/MDXArticle';

import RawHeader from 'Components/RawHeader';
import PostHeader from 'Components/PostHeader';
import RelatedPosts from 'Components/RelatedPosts';

import { getPostBySlug, getPostsPaths, getRelatedPosts } from 'Helpers/content/posts';
import { from } from 'Devices';
import siteName from 'SiteName';

import { PostWithContentAndRelatedPosts } from 'Types/content';

const Post: FC<PostWithContentAndRelatedPosts> = ({ metaData, content, relatedPosts }) => {
  const seoTitle = metaData.seoTitle || metaData.title;

  const meta = {
    title: `${seoTitle} | ${siteName}`,
    description:
      'Wszystkie artykuły, które do tej pory pojawiły się na blogu. Przeczytasz o front-endzie, WordPressie, trochę przemyśleń i trochę rzeczy związanych z designem oraz pracą jako programista',
  };

  return (
    <>
      <Head {...meta} />
      <RawHeader />
      <Wrapper as="main" size="medium" withSpaceBelow>
        <PostHeader {...metaData} />
        <Article source={content} />
      </Wrapper>
      <RelatedPosts posts={relatedPosts} />
    </>
  );
};

const Article = styled(MDXArticle)`
  @media ${from.tablet} {
    --side-padding: 55px;

    padding: 0 var(--side-padding);
  }
`;

type Props = { params: { slug: string } };

export const getStaticProps = async ({ params: { slug } }: Props) => {
  const { content, metaData } = await getPostBySlug(slug);

  const currentPostMainTopic = metaData.topics[0];

  const relatedPosts = await getRelatedPosts(slug, currentPostMainTopic, 3);

  return {
    props: { metaData, content, relatedPosts },
  };
};

export const getStaticPaths = async () => {
  const paths = await getPostsPaths();

  return {
    paths,
    fallback: false,
  };
};

export default Post;
