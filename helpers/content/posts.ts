import { getResourcesByDateDescending, getResourceBySlug } from './resources';
import { getTopic } from '../data/topics';
import { POSTS_PATH } from '../constants';

import { PathParams, Post, ResourceWithContent } from 'Types/content';

import postsCache from 'Cache/posts.json';
import normalizeForSearch from 'Helpers/functions/normalizeForSearch';
import shuffle from 'Helpers/functions/shuffle';

export const getPosts = async (): Promise<Post[]> => {
  return await getPostsByDateDescending();
};

export const getPostsPaths = async (): Promise<PathParams<'slug'>> => {
  const posts = await getPosts();

  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return paths;
};

export const getPostsByDateDescending = async (): Promise<Post[]> =>
  (await getResourcesByDateDescending(POSTS_PATH, 'posts')) as Post[];

export const getRandomPosts = async (numberOfPostsToReturn: number): Promise<Post[]> => {
  const posts = await getPosts();

  return shuffle(posts).slice(0, numberOfPostsToReturn);
};

export const getRelatedPosts = async (
  currentPostSlug: string,
  givenTopicName: string,
  numberOfPostsToReturn: number,
): Promise<Post[]> => {
  const posts = await getPosts();
  const postsWithoutTheCurrentOne = posts.filter(({ slug }) => slug !== currentPostSlug);

  const theRestOfPostsInGivenTopic = postsWithoutTheCurrentOne.filter(({ topics }) =>
    topics.includes(givenTopicName),
  );

  if (theRestOfPostsInGivenTopic.length >= numberOfPostsToReturn) {
    const threePostsInGivenTopic = theRestOfPostsInGivenTopic.slice(0, numberOfPostsToReturn);

    return threePostsInGivenTopic;
  } else {
    const numberOfPostsNeeded = numberOfPostsToReturn - theRestOfPostsInGivenTopic.length;
    const theRestFromOtherTopics = postsWithoutTheCurrentOne
      .filter(({ topics }) => !topics.includes(givenTopicName))
      .slice(0, numberOfPostsNeeded);

    return theRestOfPostsInGivenTopic.concat(theRestFromOtherTopics);
  }
};

export const getPostsByTopic = async (topicSlug: string): Promise<Post[]> => {
  const posts = await getPosts();
  const { name: givenTopicName } = getTopic(topicSlug);

  const postsInGivenTopic = posts.filter(({ topics }) => topics.includes(givenTopicName));

  return postsInGivenTopic;
};

const getSearchablePosts = async (): Promise<Post[]> =>
  process.env.NODE_ENV === 'production' ? postsCache : await getPosts();

export const getPostsBySearchQuery = async (query: string): Promise<Post[]> => {
  const posts = await getSearchablePosts();

  const queryWords = normalizeForSearch(query).split(/\s+/).filter(Boolean);

  const postsInGivenQuery = posts.filter(({ title }) => {
    const titleToCompare = normalizeForSearch(title);

    return queryWords.every((word) => titleToCompare.includes(word));
  });

  return postsInGivenQuery;
};

export const getPostBySlug = async (slug: string): Promise<ResourceWithContent<Post>> => {
  const post = await getResourceBySlug(POSTS_PATH, slug, 'posts');

  return post as ResourceWithContent<Post>;
};
