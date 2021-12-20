export type ElementWithCustomZIndex = {
  zIndex?: 'min' | 'med' | 'max' | 'extreme';
};

export type PolymorphicElement = {
  as: keyof JSX.IntrinsicElements;
};
