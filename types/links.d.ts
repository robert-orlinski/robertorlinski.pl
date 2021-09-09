import { ObligatoryChildren } from 'Helpers/types';

export type LinkContainer = {
  href: string;
};

export type CatalogedLink = {
  title: string;
} & LinkContainer;

export type CatalogedLinksArray = Array<CatalogedLink>;

export type Link = {
  withUnderlineInvisible?: boolean;
} & ObligatoryChildren &
  LinkContainer;

export type ClickableElement = {
  onClick: () => void;
};

type ButtonWithType = {
  type?: 'submit' | 'button';
};

export type Button = {
  [P in keyof LinkContainer]?: LinkContainer[P];
} &
  {
    [P in keyof ClickableElement]?: ClickableElement[P];
  } &
  ButtonWithType &
  ObligatoryChildren;
