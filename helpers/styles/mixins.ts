interface Flex {
  justifyContent?: string;
  alignItems?: string;
}

export const flex = ({ justifyContent, alignItems }: Flex) => `
  display: flex;
  justify-content: ${justifyContent || 'center'};
  align-items: ${alignItems || 'center'};
`;

interface PseudoElement {
  display?: string;
  position?: string;
  content?: string;
}

export const pseudoElement = ({ display, position, content }: PseudoElement) => `
  display: ${display || 'block'};
  position: ${position || 'absolute'};
  content: ${content || `''`};
`;
