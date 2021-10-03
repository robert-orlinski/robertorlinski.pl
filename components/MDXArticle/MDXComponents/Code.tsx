import styled from 'styled-components';

import { to } from 'Devices';

export const Code = styled.pre`
  width: 100%;
  max-height: 75vh;

  margin: 0.3rem 0 1.8rem;
  border-radius: 6px;
  overflow: auto;

  color: #f8f8f2;
  background: #2e3440;

  font-family: 'Inconsolata', monospace;
  font-weight: 300;
  font-size: 0.9rem;

  line-height: 1.5;
  tab-size: 4;

  & > code {
    display: block;
    padding: 1.2rem;
  }

  @media ${to.phoneL} {
    white-space: normal;
  }

  .comment,
  .prolog,
  .cdata {
    color: #636f88;
  }

  .punctuation {
    color: #81a1c1;
  }

  .namespace {
    opacity: 0.7;
  }

  .property,
  .tag,
  .constant,
  .symbol,
  .deleted {
    color: #81a1c1;
  }

  .number {
    color: #b48ead;
  }

  .boolean {
    color: #81a1c1;
  }

  .selector,
  .attr-name,
  .string,
  .char,
  .builtin,
  .inserted {
    color: #a3be8c;
  }

  .operator,
  .entity,
  .url,
  .language-css .string,
  .style .string,
  .variable {
    color: #81a1c1;
  }

  .atrule,
  .attr-value,
  .function,
  .class-name {
    color: #88c0d0;
  }

  .keyword {
    color: #81a1c1;
  }

  .regex,
  .important {
    color: #ebcb8b;
  }

  .important,
  .bold {
    font-weight: bold;
  }

  .italic {
    font-style: italic;
  }

  .entity {
    cursor: help;
  }
`;
