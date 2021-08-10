import { FC } from 'react';

import { LinkContainer } from '../LinkContainer';
import { Overlay } from '../Overlay';

import { LinkContainer as LinkContainerType } from '../../types/links';
import { ElementWithCustomZIndex, ElementWithInlineStyle } from '../../types/styled-components';

type Props = LinkContainerType & ElementWithInlineStyle & ElementWithCustomZIndex;

export const CoveringLink: FC<Props> = ({ href, zIndex }) => (
  <LinkContainer {...{ href }}>
    <Overlay as="a" rel="nofollow" aria-hidden={true} {...{ zIndex }} />
  </LinkContainer>
);
