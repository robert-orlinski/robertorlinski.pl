import { ReactChild, MouseEventHandler } from 'react';

export type LinkContainer = {
  href: string;
};

export type CatalogedLink = {
  title: string;
} & LinkContainer;

export type CatalogedLinksArray = Array<CatalogedLink>;

export type UnderlinedLinkStyle = {
  isUnderlineVisible?: boolean;
};

export type Link = {
  isExternal?: boolean;
  children: ReactChild;
} & UnderlinedLinkStyle &
  LinkContainer;

export type Button = {
  type?: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
  children: ReactChild;
} & {
  [P in keyof LinkContainer]?: LinkContainer[P];
};
