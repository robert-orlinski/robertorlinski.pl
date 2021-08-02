export interface LinkContainerType {
  href: string;
}

export interface CatalogedLinkType extends LinkContainerType {
  title: string;
}

export type CatalogedLinksArrayType = Array<CatalogedLinkType>;

export interface LinkType extends LinkContainerType {
  external?: boolean;
  withLineVisible?: boolean;
}

export interface ClickableElmentType {
  onClick: () => void;
}

export interface ElementWithInlineStyleType {
  style?: CSSProperties;
}

export type ArrayOfTextsType = Array<{
  type: 'text' | 'internal-link' | 'external-link';
  text: string;
  href: string;
}>;
