export type InlineStyle = CSSProperties | undefined;

export type ElementWithInlineStyle = {
  style?: CSSProperties;
};

export type ElementWithCustomZIndex = {
  zIndex?: 'min' | 'med' | 'max' | 'extreme';
};
