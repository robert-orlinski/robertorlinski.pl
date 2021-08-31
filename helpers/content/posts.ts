import path from 'path';

import { getResourceBySlug, getResourcePaths } from './resources';

const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export const getPostsPaths = () => getResourcePaths(POSTS_PATH);

export const getPostBySlug = async (slug: string) => await getResourceBySlug(POSTS_PATH, slug);
