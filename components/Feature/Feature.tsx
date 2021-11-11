import { FC } from 'react';
import styled from 'styled-components';

import P from 'Components/P';

const Feature: FC = ({ children }) => (
  <Container>
    <P>{children}</P>
  </Container>
);

const Container = styled.li`
  position: relative;

  &::before {
    content: counter(feature);
    counter-increment: feature;

    position: absolute;
    left: -0.25em;
    top: -0.8em;
    z-index: -1;

    font-size: calc(var(--title-font-size) * 1.5);
    font-family: var(--serif);

    color: var(--brand-color-brightened);
  }
`;

export default Feature;
