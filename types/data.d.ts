import { LinkHref } from './links';

export type Text = {
  type: 'text' | 'link';
  text: string;
  href: LinkHref;
};

export type Topic = {
  name: string;
  slug: string;
  featuredImage: string;
};

export type TopicsGroup = {
  groupName: string;
  topics: Topic[];
};
