import { getResourceFeaturedImage, getResourceLink } from './resources';

export const getPostFeaturedImage = (slug: string) => getResourceFeaturedImage('posts', slug);

export const getPostLink = (slug: string) => getResourceLink('artykuly', slug);
