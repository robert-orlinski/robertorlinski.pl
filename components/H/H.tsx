import { FC } from 'react';
import styled from 'styled-components';
import toSlug from 'Helpers/functions/toSlug';

import Link from 'Components/Link';

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  isAnchor?: boolean;
};

const H: FC<Props> = ({ level, isAnchor = true, ...props }) => {
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

  scroll-margin-top: var(--nav-height);

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
