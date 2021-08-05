type Text = {
  type: 'text' | 'internal-link' | 'external-link';
  text: string;
  href: string;
};

export type ArrayOfTexts = [Text];

export type Category = {
  name: string;
  slug: string;
  image: StaticImageData;
};
