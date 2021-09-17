import path from 'path';

import { getResourcesByDateDescending, getResourceBySlug, getResourcePaths } from './resources';

import { Post } from 'Types/content';

const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export const getPostsPaths = () => getResourcePaths(POSTS_PATH);

export const getPosts = async () => await getResourcesByDateDescending<Post>(POSTS_PATH);

export const getNewestPosts = async () => {
  const posts = await getResourcesByDateDescending<Post>(POSTS_PATH);
  const lastSixPosts = posts.slice(0, 6);

  return lastSixPosts;
};

export const getRelatedPosts = async (givenCategory: string) => {
  const posts = await getResourcesByDateDescending<Post>(POSTS_PATH);
  const postsInGivenCategory = posts.filter(({ category }) => category === givenCategory);

  if (postsInGivenCategory.length >= 3) {
    const threePostsInGivenCategory = postsInGivenCategory.slice(0, 3);

    return threePostsInGivenCategory;
  } else {
    const numberOfPostsNeeded = 3 - postsInGivenCategory.length;
    const theRestFromOtherCategories = posts.slice(0, numberOfPostsNeeded);

    return postsInGivenCategory.concat(theRestFromOtherCategories);
  }
};

export const getPostBySlug = (slug: string) => getResourceBySlug<Post>(POSTS_PATH, slug);
