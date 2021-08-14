import styled from 'styled-components';

import { ElementWithCustomZIndex } from 'Types/styled-components';

export const Overlay = styled.div<ElementWithCustomZIndex>`
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  z-index: ${({ zIndex }) => `var(--${zIndex}-z-index)` || 10};
`;
