import { FC, useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import styled from 'styled-components';

import { Link } from 'components/Link';
import { P } from 'components/P';
import { H1 } from 'components/H1';
import { H2 } from 'components/H2';
import { H3 } from 'components/H3';
import { H4 } from 'components/H4';
import { H5 } from 'components/H5';
import { H6 } from 'components/H6';

type Props = { source: string };

export const MDXArticle: FC<Props> = ({ source }) => {
  const MDXContainer = useMemo(() => getMDXComponent(source), [source]);

  return (
    <MDXContainer
      components={{
        a: Link as any,
        p: BiggerP,
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

const BiggerP = styled(P)`
  font-size: 1.2rem;
`;
