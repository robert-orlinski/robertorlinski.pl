import styled from 'styled-components';

export const VisuallyHiddenElement = styled.div`
  position: absolute;
  overflow: hidden;

  width: 1px;
  height: 1px;

  padding: 0;
  margin: -1px;
  border: 0;

  clip: rect(0 0 0 0);
  white-space: nowrap;
`;
