export const getResourceFeaturedImage = (resourceType: string, slug: string) =>
  `/images/${resourceType}/${slug}/featuredImage.jpg`;

export const getResourceLink = (prefix: string, slug: string) => `/${prefix}/${slug}`;
