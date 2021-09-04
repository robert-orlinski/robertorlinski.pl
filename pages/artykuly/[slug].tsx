import { FC } from 'react';
import styled from 'styled-components';

import { Head } from 'Components/Head';
import { Wrapper } from 'Components/Wrapper';
import { MDXArticle } from 'Components/MDXArticle';

import { getPostBySlug, getPostsPaths } from 'ContentHelpers/posts';
import { siteName } from 'SiteName';
import { RawHeader } from 'Components/RawHeader';
import { PostHeader } from 'Components/PostHeader';

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
    <Wrapper as="main" size="medium">
      <PostHeader {...metaData} />
      <ArticleInner>
        <MDXArticle source={content} />
      </ArticleInner>
    </Wrapper>
  </>
);

const ArticleInner = styled.article`
  padding: 0 55px;
`;

export default Post;
