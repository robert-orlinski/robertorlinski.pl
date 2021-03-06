import { TopicName } from './data';

export type Resource = {
  slug: string;
  title: string;
  seoTitle?: string;
  abstract: string;
  isPublished: boolean;
  date: string;
};

export type ResourceWithContent<T> = {
  metaData: T;
  content: string;
};

export type Post = {
  readingTime: string;
  topics: TopicName[];
  isPopular: boolean;
  menuOrder: number;
} & Resource;

export type PostWithContentAndRelatedPosts = {
  relatedPosts: Post[];
} & ResourceWithContent<Post>;

export type PostsContainer = {
  posts: Post[];
};

export type PathParams<T> = Record<'params', { [key: T]: string }>[];
