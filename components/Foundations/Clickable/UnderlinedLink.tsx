import styled from 'styled-components';

export const UnderlinedLink = styled.a`
  position: relative;

  background: linear-gradient(var(--dark-gray), var(--dark-gray)) no-repeat;
  background-size: var(--line-size-initial, 0 1px);
  background-position: var(--line-position-initial, 100% 100%);

  transition: background-size var(--short-animation-duration);

  &:hover,
  &:focus {
    background-size: var(--line-size-hovered, 100% 1px);
    background-position: var(--line-position-hovered, 0 100%);
  }
`;