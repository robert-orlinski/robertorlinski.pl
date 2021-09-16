import { LinkHref } from './links';

type Text = {
  type: 'text' | 'link';
  text: string;
  href: LinkHref;
};

export type ArrayOfTexts = Array<Text>;

export type Category =
  | 'Front-end'
  | 'WordPress'
  | 'Własne bloki w WordPress Gutenberg'
  | 'Dostępność'
  | 'Design'
  | 'Narzędzia'
  | 'Praca'
  | 'Produktywność'
  | 'Nauka'
  | 'Przemyślenia'
  | 'Inne';

export type ListedCategory = {
  name: Category;
  image: StaticImageData;
};
