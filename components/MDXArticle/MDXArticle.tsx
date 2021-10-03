import { FC, useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { Link } from 'Components/Link';

import { BiggerP } from './MDXComponents/BiggerP';
import { Code } from './MDXComponents/Code';
import { H1 } from './MDXComponents/H1';
import { H2 } from './MDXComponents/H2';
import { H3 } from './MDXComponents/H3';
import { H4 } from './MDXComponents/H4';
import { H5 } from './MDXComponents/H5';
import { H6 } from './MDXComponents/H6';

type Props = { source: string };

export const MDXArticle: FC<Props> = ({ source }) => {
  const MDXContainer = useMemo(() => getMDXComponent(source), [source]);

  return (
    <MDXContainer
      components={{
        a: Link as any,
        p: BiggerP,
        pre: Code,
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
      }}
    />
  );
};
