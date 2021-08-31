import { FC } from 'react';

import { Head } from 'components/Head';
import { NarrowWrapper } from 'components/NarrowWrapper';
import { MDX } from 'components/MDX';

import { getPostBySlug, getPostsPaths } from 'ContentHelpers/posts';
import { siteName } from 'SiteName';

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
      metaData,
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
    <NarrowWrapper as="main">
      <MDX source={content} />
    </NarrowWrapper>
  </>
);

export default Post;
