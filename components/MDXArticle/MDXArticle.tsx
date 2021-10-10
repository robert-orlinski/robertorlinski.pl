import { FC, useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { CodePenIframe } from 'Components/CodePenIframe';

import { Blockquote } from './MDXComponents/Blockquote';
import { Highlight } from './MDXComponents/Highlight';
import { BiggerP } from './MDXComponents/BiggerP';
import { Code } from './MDXComponents/Code';
import { Anchor } from './MDXComponents/Anchor';
import { H1 } from './MDXComponents/H1';
import { H2 } from './MDXComponents/H2';
import { H3 } from './MDXComponents/H3';
import { H4 } from './MDXComponents/H4';
import { H5 } from './MDXComponents/H5';
import { H6 } from './MDXComponents/H6';
import { Ul } from './MDXComponents/Ul';
import { Ol } from './MDXComponents/Ol';
import { Li } from './MDXComponents/Li';

type Props = { source: string };

export const MDXArticle: FC<Props> = ({ source }) => {
  const MDXContainer = useMemo(
    () => getMDXComponent(source, { codePenIframe: { CodePenIframe } }),
    [source],
  );

  return (
    <MDXContainer
      components={{
        blockquote: Blockquote,
        p: BiggerP,
        pre: Code,
        a: Anchor,
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        ul: Ul,
        ol: Ol,
        li: Li,

        // Single <code> (``) elements were replaced with custom highlight elemenent for better editing experience.
        code: Highlight,
      }}
    />
  );
};
