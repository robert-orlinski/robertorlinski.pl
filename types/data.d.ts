import { LinkHref } from './links';

type Text = {
  type: 'text' | 'internal-link' | 'external-link';
  text: string;
  href: LinkHref;
};

export type ArrayOfTexts = Array<Text>;

export type Category = {
  name:
    | 'Front-end'
    | 'WordPress'
    | 'Własne bloki w WordPress Gutenberg'
    | 'Dostępność'
    | 'Design'
    | 'Narzędzia'
    | 'Praca'
    | 'Produktywność'
    | 'Nauka'
    | 'Przemyślenia';
  slug:
    | 'front-end'
    | 'wordpress'
    | 'wlasne-bloki-w-wordpress-gutenberg'
    | 'dostepnosc'
    | 'design'
    | 'narzedzia'
    | 'praca'
    | 'produktywnosc'
    | 'nauka'
    | 'przemyslenia';
};

export type ListedCategory = {
  image: StaticImageData;
} & Category;
