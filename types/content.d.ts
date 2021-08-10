import { Category } from './data';

export type Post = {
  title: string;
  slug: string;
  category: Category;
  time: string;
  thumbnail: StaticImageData;
};

export type Posts = Array<Post>;
