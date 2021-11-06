import { FC } from 'react';

import { UnderlinedLink } from 'Components/UnderlinedLink';
import { LinkContainer } from 'Components/LinkContainer';

import { Link as LinkType } from 'Types/links';

export const Link: FC<LinkType> = ({ children, href, isUnderlineVisible, isExternal }) => {
  isExternal ||= href.includes('http');

  return isExternal ? (
    <UnderlinedLink href={href} target="_blank" rel="noreferrer" {...{ isUnderlineVisible }}>
      {children}
    </UnderlinedLink>
  ) : (
    <LinkContainer href={href}>
      <UnderlinedLink {...{ isUnderlineVisible }}>{children}</UnderlinedLink>
    </LinkContainer>
  );
};
