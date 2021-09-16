import path from 'path';

import { getResourcesByDateDescending, getResourceBySlug, getResourcePaths } from './resources';

import { Post } from 'Types/content';

const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export const getPostsPaths = () => getResourcePaths(POSTS_PATH);

export const getPosts = async () => await getResourcesByDateDescending<Post>(POSTS_PATH);

export const getNewestPosts = async () => {
  const posts = await getResourcesByDateDescending<Post>(POSTS_PATH);
  const newestSixPosts = posts.slice(0, 6);

  return newestSixPosts;
};

export const getPostBySlug = (slug: string) => getResourceBySlug(POSTS_PATH, slug);
