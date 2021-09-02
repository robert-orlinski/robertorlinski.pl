import { FC, useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { P } from 'components/P';

type Props = { source: string };

export const MDXArticle: FC<Props> = ({ source }) => {
  const MDXContainer = useMemo(() => getMDXComponent(source), [source]);

  return <MDXContainer components={{ p: P }} />;
};
