import { FC } from 'react';

import { Link } from 'Components/Link';

export const Anchor: FC<any> = ({ children, href }) => {
  if (children.type === 'img' && !href) {
    return (
      <Link href={children.props.src} isExternal isUnderlineVisible>
        {children}
      </Link>
    );
  }

  return <Link {...{ children, href }} isUnderlineVisible />;
};
