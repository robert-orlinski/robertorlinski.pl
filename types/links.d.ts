import { ReactChild } from 'react';

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
  children: ReactChild;
  isExternal?: boolean;
  className?: string;
  tabIndex?: number;
} & UnderlinedLinkStyle &
  LinkContainer;
