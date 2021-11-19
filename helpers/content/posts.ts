import { getResourcesByDateDescending, getResourceBySlug, getResourcePaths } from './resources';
import { getTopic } from '../data/topics';
import { POSTS_PATH } from '../constants';

import { Post } from 'Types/content';

import postsCache from 'Cache/posts.json';

const env = process.env.NODE_ENV || 'development';

export const getPostsPaths = () => getResourcePaths(POSTS_PATH);

export const getPostsByDateDescending = async () =>
  await getResourcesByDateDescending<Post>(POSTS_PATH, 'posts');

export const getPosts = async () => {
  if (env === 'production') {
    return postsCache;
  }

  return await getPostsByDateDescending();
};

export const getNewestPosts = async () => {
  const posts = await getPosts();
  const lastSixPosts = posts.slice(0, 6);

  return lastSixPosts;
};

export const getRelatedPosts = async (currentPostSlug: string, givenTopicName: string) => {
  const posts = await getPostsByDateDescending();
  const postsWithoutTheCurrentOne = posts.filter(({ slug }) => slug !== currentPostSlug);

  const theRestOfPostsInGivenTopic = postsWithoutTheCurrentOne.filter(({ topics }) =>
    topics.includes(givenTopicName),
  );

  if (theRestOfPostsInGivenTopic.length >= 3) {
    const threePostsInGivenTopic = theRestOfPostsInGivenTopic.slice(0, 3);

    return threePostsInGivenTopic;
  } else {
    const numberOfPostsNeeded = 3 - theRestOfPostsInGivenTopic.length;
    const theRestFromOtherTopics = postsWithoutTheCurrentOne
      .filter(({ topics }) => !topics.includes(givenTopicName))
      .slice(0, numberOfPostsNeeded);

    return theRestOfPostsInGivenTopic.concat(theRestFromOtherTopics);
  }
};

export const getPopularPosts = async () => {
  const posts = await getPostsByDateDescending();

  return posts.filter(({ isPopular }) => isPopular);
};

export const getPostsByTopic = async (topicSlug: string) => {
  const posts = await getPosts();
  const { name: givenTopicName } = getTopic(topicSlug);

  const postsInGivenTopic = posts.filter(({ topics }) => topics.includes(givenTopicName));

  return postsInGivenTopic;
};

export const getPostsBySearchQuery = async (query: string) => {
  const posts = await getPosts();

  const postsInGivenQuery = posts.filter(({ title }) => {
    const titleToCompare = title.toLowerCase();
    const queryToCompare = query.toLowerCase();

    return titleToCompare.includes(queryToCompare);
  });

  return postsInGivenQuery;
};

export const getPostBySlug = (slug: string) => getResourceBySlug<Post>(POSTS_PATH, slug, 'posts');
