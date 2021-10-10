import styled from 'styled-components';

export const P = styled.p`
  &:not(:last-child) {
    padding-bottom: var(--text-gap);
  }
`;
