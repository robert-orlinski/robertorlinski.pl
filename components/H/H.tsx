import { FC } from 'react';
import styled from 'styled-components';
import toSlug from 'Helpers/functions/toSlug';

import Link from 'Components/Link';

export type DeterminedHeader = {
  isAnchor?: boolean;
} & JSX.IntrinsicElements['h1'];

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
} & DeterminedHeader;

const H: FC<Props> = ({ level, isAnchor = false, ...props }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const { children } = props;

  if (typeof children === 'string' && isAnchor) {
    const sluggedHeader = toSlug(children);

    return (
      <BaseTag id={sluggedHeader} as={Tag}>
        <AnchorLink href={`#${sluggedHeader}`}>{children}</AnchorLink>
      </BaseTag>
    );
  }

  return <BaseTag as={Tag}>{children}</BaseTag>;
};

const BaseTag = styled.h1`
  padding-bottom: 0.8em;

  &:not(:nth-child(1)) {
    padding-top: 1em;
  }
`;

const AnchorLink = styled(Link)`
  &::before {
    position: absolute;
    content: '#';

    top: -0.2em;
    left: -1.5ch;

    font-size: 1.2em;
  }
`;

export default H;
