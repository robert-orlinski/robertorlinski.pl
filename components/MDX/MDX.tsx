import { FC, useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

type Props = { source: string };

export const MDX: FC<Props> = ({ source }) => {
  const MDXContainer = useMemo(() => getMDXComponent(source), [source]);

  return <MDXContainer />;
};
