import { FC } from 'react';

import UnderlinedLink from 'Components/UnderlinedLink';
import LinkContainer from 'Components/LinkContainer';

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
    <LinkContainer {...{ href }}>
      <UnderlinedLink {...{ isUnderlineVisible, className, tabIndex }}>{children}</UnderlinedLink>
    </LinkContainer>
  );
};

export default Link;
