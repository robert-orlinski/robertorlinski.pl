import styled from 'styled-components';

export const ElementWithOpacity = styled.a`
  transition: opacity var(--short-transition-duration);

  &:hover {
    opacity: 0.6;
  }
`;
