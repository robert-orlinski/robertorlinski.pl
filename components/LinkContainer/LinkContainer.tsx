import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';

import { LinkContainer as LinkContainerType } from 'Types/links';

const LinkContainer: FC<PropsWithChildren<LinkContainerType>> = ({ children, href }) => (
  <Link href={href} passHref legacyBehavior>
    {children}
  </Link>
);

export default LinkContainer;
