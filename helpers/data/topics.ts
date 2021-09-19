import slugify from 'slugify';

export const getTopicSlug = (topic: string) => {
  const slug = slugify(topic, {
    lower: true,
  });

  return slug;
};

export const getTopicLink = (topic: string) => {
  const topicSlug = getTopicSlug(topic);

  return `/tematy/${topicSlug}`;
};
