export type LinkContainer = {
  href: string;
};

export type CatalogedLink = {
  title: string;
} & LinkContainer;

export type CatalogedLinksArray = Array<CatalogedLink>;

export type Link = {
  external?: boolean;
  withLineVisible?: boolean;
} & LinkContainer;

export type ClickableElement = {
  onClick: () => void;
};
