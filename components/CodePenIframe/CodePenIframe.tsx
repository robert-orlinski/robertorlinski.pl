import { FC } from 'react';
import styled from 'styled-components';

import { P } from 'Components/P';

type Props = {
  id: string;
  title: string;
  defaultTab?: string;
};

export const CodePenIframe: FC<Props> = ({ id, title, defaultTab = 'html' }) => {
  const href = `https://codepen.io/ROrlilnski/pen/${id}`;
  const srcBase = href.replace('/pen/', '/embed/');

  return (
    <P>
      <Pen
        title={title}
        src={`${srcBase}?default-tab=${defaultTab}%2Cresult&editable=true`}
        loading="lazy"
        allowFullScreen={true}
      >
        Oryginał: {href}
      </Pen>
    </P>
  );
};

const Pen = styled.iframe`
  width: 100%;
  height: 360px;

  border: none;
`;
