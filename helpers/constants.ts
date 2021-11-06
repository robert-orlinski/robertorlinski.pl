import path from 'path';

export const DATE_PATTERN = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

export const EMAIL_PATTERN = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

export const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export const FEATURED_IMAGE_NAME = 'featured-image.jpg';
