export interface LinkContainer {
  href: string;
}

export interface CatalogedLink extends LinkContainer {
  title: string;
}

export type CatalogedLinksArray = Array<CatalogedLink>;

export interface Link extends LinkContainer {
  external?: boolean;
  withLineVisible?: boolean;
}

export interface ClickableElement {
  onClick: () => void;
}
