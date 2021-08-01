import { FC, CSSProperties } from 'react';

import { LinkContainer } from '../Foundations/Clickable/LinkContainer';

import { LinkType } from '../../types/global';
import { UnderlinedLink } from '../Foundations/Clickable/UnderlinedLink';

export const Link: FC<LinkType> = ({ children, href, external, withLineVisible }) => {
  const lineVisibility = (
    withLineVisible
      ? {
          '--line-size-initial': '100% 1px',
          '--line-size-hovered': '0 1px',
          '--line-position-initial': '0 100%',
          '--line-position-hovered': '100% 100%',
        }
      : undefined
  ) as CSSProperties | undefined;

  return external ? (
    <UnderlinedLink href={href} target="_blank" rel="noreferrer" style={lineVisibility}>
      {children}
    </UnderlinedLink>
  ) : (
    <LinkContainer href={href}>
      <UnderlinedLink style={lineVisibility}>{children}</UnderlinedLink>
    </LinkContainer>
  );
};
