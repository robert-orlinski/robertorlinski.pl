import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

export const Highlight: FC<Props> = (props) => {
  if (props.className) {
    return <code>{props.children}</code>;
  }

  return <Mark {...props} />;
};

const Mark = styled.span`
  background-color: var(--highlight);
`;
