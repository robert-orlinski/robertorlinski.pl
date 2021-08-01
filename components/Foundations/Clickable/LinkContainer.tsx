import { FC } from 'react';
import Link from 'next/link';

interface LinkContainerType {
  href: string;
}

export const LinkContainer: FC<LinkContainerType> = ({ children, href }) => (
  <Link href={href} passHref>
    {children}
  </Link>
);
