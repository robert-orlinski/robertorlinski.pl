import { FC, useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import styled from 'styled-components';

import CodePenIframe from 'Components/CodePenIframe';
import VideoInterlude from 'Components/VideoInterlude';
import Blockquote from 'Components/Blockquote';
import CodeBlock from 'Components/CodeBlock';
import Highlight from 'Components/Highlight';
import Li from 'Components/Li';
import H1 from 'Components/H1';
import H2 from 'Components/H2';
import H3 from 'Components/H3';
import H4 from 'Components/H4';
import H5 from 'Components/H5';
import H6 from 'Components/H6';
import P from 'Components/P';

import Anchor from './parts/Anchor';
import Img from './parts/Img';
import Ul from './parts/Ul';
import Ol from './parts/Ol';

type Props = { source: string } & JSX.IntrinsicElements['article'];

const MDXArticle: FC<Props> = ({ source, className }) => {
  const MDXContainer = useMemo(
    () =>
      getMDXComponent(source, {
        codePenIframe: CodePenIframe,
        videoInterlude: VideoInterlude,
      }),
    [source],
  );

  return (
    <Article {...{ className }}>
      <MDXContainer
        components={{
          blockquote: Blockquote,
          code: Highlight,
          pre: CodeBlock,
          a: Anchor,
          img: Img,
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
          ul: Ul,
          ol: Ol,
          li: Li,
          p: P,
        }}
      />
    </Article>
  );
};

const Article = styled.article`
  p,
  ul,
  ol {
    font-size: 1.1rem;
  }
`;

export default MDXArticle;
