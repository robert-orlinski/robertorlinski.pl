import { getResourceFeaturedImage, getResourceLink } from './resources';

export const getPostFeaturedImage = (slug: string): string =>
  getResourceFeaturedImage('posts', slug);

export const getPostLink = (slug: string): string => getResourceLink('artykuly', slug);
