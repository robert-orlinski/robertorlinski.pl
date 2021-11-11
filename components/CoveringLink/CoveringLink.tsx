import { FC } from 'react';

import LinkContainer from 'Components/LinkContainer';
import Overlay from 'Components/Overlay';

import { LinkContainer as LinkContainerType } from 'Types/links';
import { ElementWithCustomZIndex } from 'Types/styledComponents';

type Props = LinkContainerType & ElementWithCustomZIndex;

const CoveringLink: FC<Props> = ({ href, zIndex }) => (
  <LinkContainer {...{ href }}>
    <Overlay as="a" rel="nofollow" aria-hidden={true} {...{ zIndex }} />
  </LinkContainer>
);

export default CoveringLink;
