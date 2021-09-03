import { FC } from 'react';
import styled from 'styled-components';

import { Head } from 'components/Head';
import { NarrowWrapper } from 'components/NarrowWrapper';
import { MDXArticle } from 'components/MDXArticle';

import { getPostBySlug, getPostsPaths } from 'ContentHelpers/posts';
import { siteName } from 'SiteName';
import { RawHeader } from 'components/RawHeader';
import { PostHeader } from 'components/PostHeader';

const meta = {
  title: `Test | ${siteName}`,
  description:
    'Wszystkie artykuły, które do tej pory pojawiły się na blogu. Przeczytasz o front-endzie, WordPressie, trochę przemyśleń i trochę rzeczy związanych z designem oraz pracą jako programista',
};

type Props = { params: { slug: string } };

export const getStaticProps = async ({ params: { slug } }: Props) => {
  const { content, metaData } = await getPostBySlug(slug);

  return {
    props: {
      metaData: {
        ...metaData,
        slug,
      },
      content,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getPostsPaths();

  return {
    paths,
    fallback: false,
  };
};

const Post: FC<any> = ({ metaData, content }) => (
  <>
    <Head {...meta} />
    <RawHeader />
    <NarrowWrapper as="main">
      <PostHeader {...metaData} />
      <ArticleInner>
        <MDXArticle source={content} />
      </ArticleInner>
    </NarrowWrapper>
  </>
);

const ArticleInner = styled.article`
  padding: 0 55px;
`;

export default Post;
