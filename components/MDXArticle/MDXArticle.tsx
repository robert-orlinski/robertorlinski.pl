import { FC, useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import styled from 'styled-components';

import VideoInterlude from 'Components/VideoInterlude';
import CodePenIframe from 'Components/CodePenIframe';
import Blockquote from 'Components/Blockquote';
import CodeBlock from 'Components/CodeBlock';
import Highlight from 'Components/Highlight';
import Ul from 'Components/Ul';
import Ol from 'Components/Ol';
import Li from 'Components/Li';
import P from 'Components/P';
import H from 'Components/H';

import Anchor from './parts/Anchor';
import Img from './parts/Img';
import DistantButton from 'Components/DistantButton';

type Props = { source: string } & JSX.IntrinsicElements['article'];

const MDXArticle: FC<Props> = ({ source, className }) => {
  const MDXContainer = useMemo(
    () =>
      getMDXComponent(source, {
        videoInterlude: VideoInterlude,
        codePenIframe: CodePenIframe,
        distantButton: DistantButton,
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

const H1 = (props: JSX.IntrinsicElements['h1']) => <H as="h1" isAnchor={true} {...props} />;
const H2 = (props: JSX.IntrinsicElements['h2']) => <H as="h2" isAnchor={true} {...props} />;
const H3 = (props: JSX.IntrinsicElements['h3']) => <H as="h3" isAnchor={true} {...props} />;
const H4 = (props: JSX.IntrinsicElements['h4']) => <H as="h4" isAnchor={true} {...props} />;
const H5 = (props: JSX.IntrinsicElements['h5']) => <H as="h5" isAnchor={true} {...props} />;
const H6 = (props: JSX.IntrinsicElements['h6']) => <H as="h6" isAnchor={true} {...props} />;

export default MDXArticle;
