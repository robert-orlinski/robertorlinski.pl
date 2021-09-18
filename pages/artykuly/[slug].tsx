import { FC } from 'react';
import styled from 'styled-components';

import { Head } from 'Components/Head';
import { Wrapper } from 'Components/Wrapper';
import { MDXArticle } from 'Components/MDXArticle';

import { RawHeader } from 'Components/RawHeader';
import { PostHeader } from 'Components/PostHeader';
import { RelatedPosts } from 'Components/RelatedPosts';

import { getPostBySlug, getPostsPaths, getRelatedPosts } from 'Helpers/content/posts';

import { PostWithContent } from 'Types/content';
import { siteName } from 'SiteName';
import { from } from 'Devices';

const Post: FC<PostWithContent> = ({ metaData, content, relatedPosts }) => {
  const meta = {
    title: `${metaData.title} | ${siteName}`,
    description:
      'Wszystkie artykuły, które do tej pory pojawiły się na blogu. Przeczytasz o front-endzie, WordPressie, trochę przemyśleń i trochę rzeczy związanych z designem oraz pracą jako programista',
  };

  return (
    <>
      <Head {...meta} />
      <RawHeader />
      <Wrapper as="main" size="medium" withSpaceBelow>
        <PostHeader {...metaData} />
        <ArticleInner>
          <MDXArticle source={content} />
        </ArticleInner>
      </Wrapper>
      <RelatedPosts posts={relatedPosts} />
    </>
  );
};

const ArticleInner = styled.article`
  @media ${from.tablet} {
    padding: 0 55px;
  }
`;

type Props = { params: { slug: string } };

export const getStaticProps = async ({ params: { slug } }: Props) => {
  const { content, metaData } = await getPostBySlug(slug);

  const currentPostCategory = metaData.category;

  const relatedPosts = await getRelatedPosts(currentPostCategory);

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
