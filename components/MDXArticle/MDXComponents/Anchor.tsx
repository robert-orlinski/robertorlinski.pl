import { FC } from 'react';

import { Link } from 'Components/Link';

export const Anchor: FC<any> = ({ children, href }) => {
  if (children.type === 'img') {
    return (
      <Link href={children.props.src} isExternal>
        {children}
      </Link>
    );
  }

  return <Link {...{ children, href }} />;
};
