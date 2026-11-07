import { FC } from 'react';

import RouterLink from 'Components/RouterLink';
import Overlay from 'Components/Overlay';

import { LinkContainer as LinkContainerType } from 'Types/links';
import { ElementWithCustomZIndex } from 'Types/styles';

type Props = LinkContainerType & ElementWithCustomZIndex;

const CoveringLink: FC<Props> = ({ href, zIndex }) => (
  <Overlay as={RouterLink} href={href} rel="nofollow" aria-hidden={true} {...{ zIndex }} />
);

export default CoveringLink;
