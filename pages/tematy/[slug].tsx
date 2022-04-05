import { FC } from 'react';

import Head from 'Components/Head';
import Wrapper from 'Components/Wrapper';
import PostsGrid from 'Components/PostsGrid';
import MainBanner from 'Components/MainBanner';

import { getTopic, getTopicsPaths } from 'Helpers/data/topics';
import { getPostsByTopic } from 'Helpers/content/posts';
import siteName from 'SiteName';

import { Post as PostType } from 'Types/content';
import { Topic as TopicType } from 'Types/data';

type Props = {
  currentTopic: TopicType;
  postsInTopic: PostType[];
};

const Topic: FC<Props> = ({ currentTopic, postsInTopic }) => {
  const { name, featuredImage } = currentTopic;

  return (
    <>
      <Head
        title={`${name} | ${siteName}`}
        description={`Wszystkie artykuły, które do tej pory pojawiły się w ramach tematu "${name}".`}
        featuredImage={featuredImage}
        contentType="website"
      />
      <MainBanner
        title={name}
        image={{
          src: featuredImage,
          alt: '',
        }}
        withAdditionalSpaceOnPhone
      />
      <Wrapper as="main" withSpaceBelow>
        <PostsGrid posts={postsInTopic} />
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

export default Topic;
