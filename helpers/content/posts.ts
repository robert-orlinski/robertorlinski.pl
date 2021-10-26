import { getResourcesByDateDescending, getResourceBySlug, getResourcePaths } from './resources';
import { getTopic } from '../data/topics';
import { POSTS_PATH } from '../constants';

import { Post, ResourceWithContent } from 'Types/content';

export const getPostsPaths = () => getResourcePaths(POSTS_PATH);

export const getPosts = async () => await getResourcesByDateDescending<Post>(POSTS_PATH, 'posts');

export const getNewestPosts = async () => {
  const posts = await getPosts();
  const lastSixPosts = posts.slice(0, 6);

  return lastSixPosts;
};

export const getRelatedPosts = async (
  currentPostWithContent: ResourceWithContent<Post>,
  givenTopicName: string,
) => {
  const posts = await getResourcesByDateDescending<Post>(POSTS_PATH, 'posts');
  const postsWithoutTheCurrentOne = posts.filter((post) => {
    const iteratedPostToCompare = JSON.stringify(post);
    const currentPostToCompare = JSON.stringify(currentPostWithContent.metaData);

    return iteratedPostToCompare !== currentPostToCompare;
  });

  const theRestOfPostsInGivenTopic = postsWithoutTheCurrentOne.filter(({ topics }) =>
    topics.includes(givenTopicName),
  );

  if (theRestOfPostsInGivenTopic.length >= 3) {
    const threePostsInGivenTopic = theRestOfPostsInGivenTopic.slice(0, 3);

    return threePostsInGivenTopic;
  } else {
    const numberOfPostsNeeded = 3 - theRestOfPostsInGivenTopic.length;
    const theRestFromOtherTopics = postsWithoutTheCurrentOne.slice(0, numberOfPostsNeeded);

    return theRestOfPostsInGivenTopic.concat(theRestFromOtherTopics);
  }
};

export const getPostsByTopic = async (topicSlug: string) => {
  const posts = await getPosts();
  const { name: givenTopicName } = getTopic(topicSlug);

  const postsInGivenTopic = posts.filter(({ topics }) => topics.includes(givenTopicName));

  return postsInGivenTopic;
};

export const getPostBySlug = (slug: string) => getResourceBySlug<Post>(POSTS_PATH, slug, 'posts');

export const getPostsBySearchQuery = async (query: string) => {
  const posts = await getPosts();

  const postsInGivenQuery = posts.filter(({ title }) => title.includes(query));

  return postsInGivenQuery;
};
