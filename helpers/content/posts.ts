import path from 'path';

import { getResourcesByDateDescending, getResourceBySlug, getResourcePaths } from './resources';
import { getTopic } from 'Helpers/data/topics';

import { Post } from 'Types/content';

const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export const getPostsPaths = () => getResourcePaths(POSTS_PATH);

export const getPosts = async () => await getResourcesByDateDescending<Post>(POSTS_PATH);

export const getNewestPosts = async () => {
  const posts = await getPosts();
  const lastSixPosts = posts.slice(0, 6);

  return lastSixPosts;
};

export const getRelatedPosts = async (givenTopicName: string) => {
  const posts = await getResourcesByDateDescending<Post>(POSTS_PATH);
  const postsInGivenTopic = posts.filter(({ topic }) => topic === givenTopicName);

  if (postsInGivenTopic.length >= 3) {
    const threePostsInGivenTopic = postsInGivenTopic.slice(0, 3);

    return threePostsInGivenTopic;
  } else {
    const numberOfPostsNeeded = 3 - postsInGivenTopic.length;
    const theRestFromOtherTopics = posts.slice(0, numberOfPostsNeeded);

    return postsInGivenTopic.concat(theRestFromOtherTopics);
  }
};

export const getPostBySlug = (slug: string) => getResourceBySlug<Post>(POSTS_PATH, slug);

export const getPostsByTopic = async (topicSlug: string) => {
  const posts = await getPosts();
  const givenTopic = getTopic(topicSlug);

  const postsInGivenTopic = posts.filter(({ topic }) => topic === givenTopic.name);

  return postsInGivenTopic;
};
