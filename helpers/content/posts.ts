import { getResourcesByDateDescending, getResourceBySlug, getResourcePaths } from './resources';
import { getTopic } from '../data/topics';
import { POSTS_PATH } from '../constants';

import { Post } from 'Types/content';

export const getPostsPaths = () => getResourcePaths(POSTS_PATH);

export const getPosts = async () => await getResourcesByDateDescending<Post>(POSTS_PATH, 'posts');

export const getNewestPosts = async () => {
  const posts = await getPosts();
  const lastSixPosts = posts.slice(0, 6);

  return lastSixPosts;
};

export const getRelatedPosts = async (givenTopicName: string) => {
  const posts = await getResourcesByDateDescending<Post>(POSTS_PATH, 'posts');
  const postsInGivenTopic = posts.filter(({ topics }) => topics.includes(givenTopicName));

  if (postsInGivenTopic.length >= 3) {
    const threePostsInGivenTopic = postsInGivenTopic.slice(0, 3);

    return threePostsInGivenTopic;
  } else {
    const numberOfPostsNeeded = 3 - postsInGivenTopic.length;
    const theRestFromOtherTopics = posts.slice(0, numberOfPostsNeeded);

    return postsInGivenTopic.concat(theRestFromOtherTopics);
  }
};

export const getPostBySlug = (slug: string) => getResourceBySlug<Post>(POSTS_PATH, slug, 'posts');

export const getPostsByTopic = async (topicSlug: string) => {
  const posts = await getPosts();
  const { name: givenTopicName } = getTopic(topicSlug);

  const postsInGivenTopic = posts.filter(({ topics }) => topics.includes(givenTopicName));

  return postsInGivenTopic;
};
