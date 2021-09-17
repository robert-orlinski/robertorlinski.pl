import { FC } from 'react';
import styled from 'styled-components';

import { Head } from 'Components/Head';
import { Wrapper } from 'Components/Wrapper';
import { MDXArticle } from 'Components/MDXArticle';

import { siteName } from 'SiteName';
import { RawHeader } from 'Components/RawHeader';
import { PostHeader } from 'Components/PostHeader';
import { CommentsButton } from 'Components/CommentsButton';

import { getPostBySlug, getPostsPaths, getRelatedPosts } from 'Helpers/content/posts';

import { PostWithContent } from 'Types/content';
import { from } from 'Helpers/devices';
import { RelatedPosts } from 'Components/RelatedPosts';

const meta = {
  title: `Test | ${siteName}`,
  description:
    'Wszystkie artykuły, które do tej pory pojawiły się na blogu. Przeczytasz o front-endzie, WordPressie, trochę przemyśleń i trochę rzeczy związanych z designem oraz pracą jako programista',
};

const Post: FC<PostWithContent> = ({ metaData, content, relatedPosts }) => (
  <>
    <Head {...meta} />
    <RawHeader />
    <Wrapper as="main" size="medium">
      <PostHeader {...metaData} />
      <ArticleInner>
        <MDXArticle source={content} />
        <CommentsButton />
      </ArticleInner>
    </Wrapper>
    <RelatedPosts posts={relatedPosts} />
  </>
);

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
