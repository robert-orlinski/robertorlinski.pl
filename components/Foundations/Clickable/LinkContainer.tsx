import { FC } from 'react';
import Link from 'next/link';

import { LinkContainerType } from '../../../types/global';

export const LinkContainer: FC<LinkContainerType> = ({ children, href }) => (
  <Link href={href} passHref>
    {children}
  </Link>
);
