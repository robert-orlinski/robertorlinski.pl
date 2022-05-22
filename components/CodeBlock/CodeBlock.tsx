import styled from 'styled-components';

import { to } from 'Devices';

const CodeBlock = styled.pre`
  width: 100%;

  margin: 0.3rem 0 1.8rem;
  border-radius: 6px;
  overflow: auto;

  color: #f8f8f2;
  background: #2e3440;

  font-size: 0.85rem;
  line-height: 1.5;

  & > code {
    display: block;
    padding: 1.4rem;
  }

  @media ${to.phoneL} {
    white-space: pre-wrap;
  }

  .comment,
  .prolog,
  .cdata {
    color: #636f88;
  }

  .namespace {
    opacity: 0.7;
  }

  .punctuation,
  .property,
  .tag,
  .constant,
  .symbol,
  .deleted,
  .boolean,
  .operator,
  .entity,
  .url,
  .language-css .string,
  .style .string,
  .variable,
  .keyword {
    color: #81a1c1;
  }

  .number {
    color: #b48ead;
  }

  .selector,
  .attr-name,
  .string,
  .char,
  .builtin,
  .inserted {
    color: #a3be8c;
  }

  .atrule,
  .attr-value,
  .function,
  .class-name {
    color: #88c0d0;
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

  .language-bash .variable .variable {
    color: #fff;
  }
`;

export default CodeBlock;
