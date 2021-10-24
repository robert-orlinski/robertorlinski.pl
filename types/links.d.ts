import { MouseEventHandler } from 'react';
import { ObligatoryChildren } from './global';

export type LinkContainer = {
  href: string;
};

export type CatalogedLink = {
  title: string;
} & LinkContainer;

export type CatalogedLinksArray = Array<CatalogedLink>;

export type Link = {
  withUnderlineInvisible?: boolean;
  isExternal?: boolean;
} & ObligatoryChildren &
  LinkContainer;

export type Button = {
  type?: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
} & {
  [P in keyof LinkContainer]?: LinkContainer[P];
} & ObligatoryChildren;
