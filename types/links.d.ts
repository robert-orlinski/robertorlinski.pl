import { ReactChild, MouseEventHandler } from 'react';

export type LinkContainer = {
  href: string;
};

export type CatalogedLink = {
  title: string;
} & LinkContainer;

export type UnderlinedLinkStyle = {
  isUnderlineVisible?: boolean;
};

export type Link = {
  isExternal?: boolean;
  children: ReactChild;
  className?: string;
} & UnderlinedLinkStyle &
  LinkContainer;

export type Button = {
  type?: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
} & {
  [P in keyof LinkContainer]?: LinkContainer[P];
} & (JSX.IntrinsicElements['a'] | JSX.IntrinsicElements['button']);
