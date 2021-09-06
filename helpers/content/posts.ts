import path from 'path';

import { getAllResources, getResourceBySlug, getResourcePaths } from './resources';

const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export const getPostsPaths = () => getResourcePaths(POSTS_PATH);

export const getPostBySlug = async (slug: string) => await getResourceBySlug(POSTS_PATH, slug);

export const getAllPosts = async () => await getAllResources(POSTS_PATH);
