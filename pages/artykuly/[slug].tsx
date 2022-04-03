import { FC } from 'react';
import styled from 'styled-components';

import Head from 'Components/Head';
import Wrapper from 'Components/Wrapper';
import MDXArticle from 'Components/MDXArticle';

import Comments from 'Components/Comments';
import RawHeader from 'Components/RawHeader';
import Newsletter from 'Components/Newsletter';
import PostHeader from 'Components/PostHeader';
import CommentsInvite from 'Components/CommentsInvite';

import { getPostBySlug, getPostsPaths, getRelatedPosts } from 'Helpers/content/posts';
import { from } from 'Devices';
import siteName from 'SiteName';

import { PostWithContentAndRelatedPosts } from 'Types/content';
import PostsExcerpt from 'Components/PostsExcerpt';

import bannerImage from 'Images/banners/forest.jpg';

const Post: FC<PostWithContentAndRelatedPosts> = ({ metaData, content, relatedPosts }) => {
  const { seoTitle, title, topics, date, abstract } = metaData;
  const metaTitle = seoTitle || title;

  return (
    <>
      <Head
        title={`${metaTitle} | ${siteName}`}
        description={abstract}
        featuredImage={bannerImage.src}
        contentType="article"
        publicationDate={date}
      />
      <RawHeader />
      <Wrapper as="main" size="medium" withSpaceBelow>
        <PostHeader {...{ title, topics, date, featuredImage: bannerImage.src }} />
        <Article source={content} />
        <CommentsInvite />
      </Wrapper>
      <PostsExcerpt
        title="Mogą Cię zainteresować:"
        posts={relatedPosts}
        withSpaceAbove
        withSpaceBelow
        withBorderAbove
        withBorderBelow
      />
      <Newsletter />
      <Comments title={metaTitle} />
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
