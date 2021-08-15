export type LinkContainer = {
  href: string;
};

export type CatalogedLink = {
  title: string;
} & LinkContainer;

export type CatalogedLinksArray = Array<CatalogedLink>;

export type Link = {
  children: string;
  withUnderlineVisible?: boolean;
} & LinkContainer;

export type ClickableElement = {
  onClick: () => void;
};
