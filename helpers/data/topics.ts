import topicsGroups from '../../data/taxonomies/topics';

import { Topic } from 'Types/data';
import { PathParams } from 'Types/content';

export const getTopics = (): Topic[] => {
  const topicsGrouped: Topic[][] = topicsGroups.map(({ topics }) => topics.map((topic) => topic));

  const topics: Topic[] = topicsGrouped.flat();

  return topics;
};

export const getTopicsPaths = (): PathParams<'slug'> => {
  const topics = getTopics();

  const topicsPaths = topics.map(({ slug }) => ({ params: { slug } }));

  return topicsPaths;
};

export const getTopic = (nameOrSlug: string): Topic => {
  const allTopics = getTopics();

  const wantedTopic = allTopics.find((topic) => nameOrSlug === topic.slug || topic.name);

  return wantedTopic as Topic;
};

export const getPrimaryTopic = (topics: string[]): Topic => {
  const primaryTopicNameOrSlug = topics[0];

  return getTopic(primaryTopicNameOrSlug);
};

export const getTopicLink = (slug: string): string => `/tematy/${slug}`;
