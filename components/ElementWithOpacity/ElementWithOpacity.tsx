import styled from 'styled-components';

const ElementWithOpacity = styled.a`
  transition: opacity var(--short-transition-duration);

  &:hover {
    opacity: 0.6;
  }
`;

export default ElementWithOpacity;
