import styled from 'styled-components';

const Highlight = (props: JSX.IntrinsicElements['code']) => {
  if (props.className) {
    return <code {...props} />;
  }

  return <HighlightedCode {...props} />;
};

const HighlightedCode: typeof Highlight = styled.code`
  background-color: var(--highlight);

  font-family: var(--monospace);
  font-size: 0.85em;
`;

export default Highlight;
