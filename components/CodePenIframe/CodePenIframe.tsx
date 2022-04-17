import { FC } from 'react';
import styled from 'styled-components';

import P from 'Components/P';

type Props = {
  id: string;
  title: string;
  author?: string;
  defaultTab?: string;
};

const CodePenIframe: FC<Props> = ({ id, title, author = 'ROrlilnski', defaultTab = 'html' }) => {
  const srcBase = `https://codepen.io/${author}/embed/${id}`;

  return (
    <P>
      <Pen
        title={title}
        src={`${srcBase}?default-tab=${defaultTab}%2Cresult&editable=true`}
        loading="lazy"
        allowFullScreen={true}
      ></Pen>
    </P>
  );
};

const Pen = styled.iframe`
  width: 100%;
  height: 360px;

  border: none;
`;

export default CodePenIframe;
