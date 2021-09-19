import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const H: FC<Props> = ({ level, ...props }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <BaseTag {...props} as={Tag} />;
};

const BaseTag = styled.h1`
  padding-bottom: 0.8em;

  &:not(:nth-child(1)) {
    padding-top: 1em;
  }
`;
