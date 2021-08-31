import { Category } from './data';

export type Post = {
  title: string;
  abstract: string;
  isPublished: boolean;
  featuredImage: string;
  category: Category;
};

export type Posts = Array<Post>;

export type Resource = Post;
