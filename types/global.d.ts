export interface LinkContainerType {
  href: string;
}

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
