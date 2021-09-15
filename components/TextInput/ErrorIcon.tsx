import styled from 'styled-components';

export const ErrorIcon = () => (
  <Icon viewBox="0 0 24 24">
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />
    <path d="M12 19c-.827 0-1.5-.673-1.5-1.5S11.173 16 12 16s1.5.673 1.5 1.5S12.827 19 12 19zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM12 14a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5z" />
  </Icon>
);

const Icon = styled.svg`
  display: flex;
  align-items: center;
  position: absolute;

  width: 1rem;
  height: 100%;

  right: 0;
  top: 0;

  fill: var(--error-red);
`;
