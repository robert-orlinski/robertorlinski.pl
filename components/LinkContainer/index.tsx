import { FC } from 'react';
import Link from 'next/link';

import { LinkContainer as LinkContainerType } from '../../types/links';

export const LinkContainer: FC<LinkContainerType> = ({ children, href }) => (
  <Link href={href} passHref>
    {children}
  </Link>
);
