import { LinkHref } from './links';

type Text = {
  type: 'text' | 'link';
  text: string;
  href: LinkHref;
};

export type ArrayOfTexts = Array<Text>;

export type Topic = {
  name: string;
  featuredImage: StaticImageData;
};

export type TopicsGroup = {
  groupName: string;
  topics: Array<Topic>;
};
