import { FC } from 'react';
import Link from 'next/link';

import { LinkContainer as LinkContainerType } from 'Types/links';

const LinkContainer: FC<LinkContainerType> = ({ children, href }) => (
  <Link href={href} passHref>
    {children}
  </Link>
);

export default LinkContainer;
