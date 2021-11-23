import topicsGroups from '../../data/taxonomies/topics';

import { Topic } from 'Types/data';

export const getTopics = () => {
  const topicsGrouped: Array<Topic[]> = topicsGroups.map(({ topics }) =>
    topics.map((topic) => topic),
  );

  const topics: Topic[] = topicsGrouped.flat();

  return topics;
};

export const getTopicsPaths = () => {
  const topics = getTopics();

  const topicsPaths = topics.map(({ slug }) => ({ params: { slug } }));

  return topicsPaths;
};

export const getTopic = (nameOrSlug: string) => {
  const allTopics = getTopics();

  const wantedTopic = allTopics.find(
    (topic) => nameOrSlug === topic.slug || nameOrSlug === topic.name,
  );

  return wantedTopic as Topic;
};

export const getPrimaryTopic = (topics: Array<string>) => {
  const primaryTopicNameOrSlug = topics[0];

  return getTopic(primaryTopicNameOrSlug);
};

export const getTopicLink = (slug: string) => `/tematy/${slug}`;
