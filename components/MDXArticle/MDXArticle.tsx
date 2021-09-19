import { FC, useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import styled from 'styled-components';

import { Link } from 'components/Link';
import { P } from 'components/P';
import { H } from 'Components/H';

import { to } from 'Devices';

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

  @media ${to.phoneL} {
    font-size: 1.1rem;
  }
`;

const H1: FC = (props) => <H level={1} {...props} />;

const H2: FC = (props) => <H level={2} {...props} />;

const H3: FC = (props) => <H level={3} {...props} />;

const H4: FC = (props) => <H level={4} {...props} />;

const H5: FC = (props) => <H level={5} {...props} />;

const H6: FC = (props) => <H level={6} {...props} />;
