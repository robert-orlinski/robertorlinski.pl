import { Category } from './data';

export type Post = {
  slug: string;
  readingTime: string;
  title: string;
  abstract: string;
  isPublished: boolean;
  featuredImage: string;
  date: string;
  category: Category;
};

export type Posts = Array<Post>;

export type PostsContainer = {
  posts: Posts;
};

export type PostWithContent = {
  metaData: Post;
  content: string;
};
