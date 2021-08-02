import { FlexType, PseudoElementType } from './types';

export const flex = ({ justifyContent, alignItems }: FlexType) => `
  display: flex;
  justify-content: ${justifyContent || 'center'};
  align-items: ${alignItems || 'center'};
`;

export const pseudoElement = ({ display, position, content }: PseudoElementType) => `
  display: ${display || 'block'};
  position: ${position || 'absolute'};
  content: ${content || `''`};
`;
