import { LinkHref } from './links';

type Text = {
  type: 'text' | 'link';
  text: string;
  href: LinkHref;
};

export type ArrayOfTexts = Array<Text>;

export type Topic = {
  name: string;
  slug: string;
  featuredImage: string;
};

export type Topics = Array<Topic>;

export type TopicsGroup = {
  groupName: string;
  topics: Topics;
};

export type TopicsGroups = Array<TopicsGroup>;
