import { FEATURED_IMAGE_NAME } from 'Helpers/constants';

export const getResourceFeaturedImage = (resourceType: string, slug: string) =>
  `/images/${resourceType}/${slug}/${FEATURED_IMAGE_NAME}`;

export const getResourceLink = (prefix: string, slug: string) => `/${prefix}/${slug}`;
