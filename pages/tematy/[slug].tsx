import { FC } from 'react';

import { Head } from 'Components/Head';
import { Wrapper } from 'Components/Wrapper';
import { PostsList } from 'Components/PostsList';
import { MainBanner } from 'Components/MainBanner';

import { getTopic, getTopicsPaths } from 'Helpers/data/topics';
import { getPostsByTopic } from 'Helpers/content/posts';

import { Posts } from 'Types/content';
import { siteName } from 'SiteName';
import { Topic } from 'Types/data';

type Props = {
  currentTopic: Topic;
  postsInTopic: Posts;
};

const Post: FC<Props> = ({ currentTopic, postsInTopic }) => {
  const { name, featuredImage } = currentTopic;

  const meta = {
    title: `${name} | ${siteName}`,
    description: `Wszystkie artykuły, które do tej pory pojawiły się w ramach tematu "${name}".`,
  };

  return (
    <>
      <Head {...meta} />
      <MainBanner
        title={name}
        image={{
          src: featuredImage,
          alt: '',
        }}
      />
      <Wrapper as="main" withSpaceBelow>
        <PostsList posts={postsInTopic} />
      </Wrapper>
    </>
  );
};

type StaticProps = { params: { slug: string } };

export const getStaticProps = async ({ params: { slug } }: StaticProps) => {
  const currentTopic = getTopic(slug);
  const postsInTopic = await getPostsByTopic(slug);

  return {
    props: { currentTopic, postsInTopic },
  };
};

export const getStaticPaths = () => {
  const paths = getTopicsPaths();

  return {
    paths,
    fallback: false,
  };
};

export default Post;
