import slugify from 'slugify';

const toSlug = (string: string): string =>
  slugify(string, {
    lower: true,
    strict: true,
  });

export default toSlug;
