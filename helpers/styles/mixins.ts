interface Flex {
  justifyContent?: string;
  alignItems?: string;
}

export const flex = ({ justifyContent, alignItems }: Flex) => `
  display: flex;
  justify-content: ${justifyContent || 'center'};
  align-items: ${alignItems || 'center'};
`;
