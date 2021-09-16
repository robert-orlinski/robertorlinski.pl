import { Category } from './data';

export type Resource = {
  slug: string;
  title: string;
  abstract: string;
  isPublished: boolean;
  date: string;
  featuredImage: string;
};

export type Resources = Array<Resource>;

export type ResourceWithContent<T> = {
  metaData: T;
  content: string;
};

export type Post = {
  readingTime: string;
  category: Category;
} & Resource;

export type Posts = Array<Post>;

export type PostsContainer = {
  posts: Posts;
};
