export type Resource = {
  slug: string;
  title: string;
  seoTitle?: string;
  abstract: string;
  isPublished: boolean;
  date: string;
};

export type Resources = Array<Resource>;

export type ResourceWithContent<T> = {
  metaData: T;
  content: string;
};

export type Post = {
  readingTime: string;
  topics: Array<string>;
  isPopular: boolean;
} & Resource;

export type Posts = Array<Post>;

export type PostWithContent = {
  relatedPosts: Posts;
} & ResourceWithContent<Post>;

export type PostsContainer = {
  posts: Posts;
};
