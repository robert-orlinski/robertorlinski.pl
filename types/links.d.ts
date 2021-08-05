export interface LinkContainer {
  href: string;
}

export interface CatalogedLink extends LinkContainer {
  title: string;
}

export type CatalogedLinksArray = [CatalogedLink];

export interface Link extends LinkContainer {
  external?: boolean;
  withLineVisible?: boolean;
}

export interface ClickableElment {
  onClick: () => void;
}
