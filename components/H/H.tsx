import { FC } from 'react';
import styled, { css } from 'styled-components';

import Link from 'Components/Link';

import { to } from 'Devices';
import toSlug from 'Helpers/functions/toSlug';

export type DeterminedHeader = {
  isAnchor?: boolean;
} & JSX.IntrinsicElements['h1'];

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & DeterminedHeader;

const H: FC<Props> = ({ as, isAnchor = false, ...props }) => {
  const { children } = props;

  if (typeof children === 'string' && isAnchor) {
    const sluggedHeader = toSlug(children);

    return (
      <BaseTag id={sluggedHeader} {...{ as, isAnchor }}>
        <AnchorLink href={`#${sluggedHeader}`}>{children}</AnchorLink>
      </BaseTag>
    );
  }

  return <BaseTag {...{ as }}>{children}</BaseTag>;
};

const BaseTag = styled.h1<DeterminedHeader>`
  padding-bottom: 0.8em;

  &:not(:nth-child(1)) {
    padding-top: 1em;
  }

  ${({ isAnchor }) =>
    isAnchor &&
    css`
      @media ${to.tablet} {
        padding-left: 1.6ch;
      }
    `}
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
