import { FlexType, PseudoElementType } from './types';

export const flex = ({ wrap, flexDirection, justifyContent, alignItems }: FlexType) => `
  display: flex;
  flex-wrap: ${wrap || 'wrap'};
  flex-direction: ${flexDirection || 'row'};
  justify-content: ${justifyContent || 'center'};
  align-items: ${alignItems || 'center'};
`;

export const pseudoElement = ({ display, position, content }: PseudoElementType) => `
  display: ${display || 'block'};
  position: ${position || 'absolute'};
  content: ${content || `''`};
`;
