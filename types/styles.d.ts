export type ElementWithCustomZIndex = {
  zIndex?: 'min' | 'mid' | 'max' | 'extreme';
};

export type PolymorphicElement = {
  as: keyof JSX.IntrinsicElements;
};
