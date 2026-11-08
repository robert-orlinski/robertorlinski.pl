import { FC } from 'react';

import UnderlinedLink from 'Components/UnderlinedLink';
import RouterLink from 'Components/RouterLink';

import { Link as LinkType } from 'Types/links';

const Link: FC<LinkType> = ({
  className,
  children,
  href,
  isUnderlineVisible,
  isExternal,
  tabIndex,
}) => {
  isExternal ||= href.includes('http');

  return isExternal ? (
    <UnderlinedLink
      target="_blank"
      rel="noreferrer"
      {...{ href, isUnderlineVisible, className, tabIndex }}
    >
      {children}
    </UnderlinedLink>
  ) : (
    <UnderlinedLink as={RouterLink} {...{ href, isUnderlineVisible, className, tabIndex }}>
      {children}
    </UnderlinedLink>
  );
};

export default Link;
