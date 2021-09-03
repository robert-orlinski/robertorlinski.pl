import styled from 'styled-components';

import { NarrowWrapper } from '../NarrowWrapper';
import { P } from '../P';
import { Button } from '../Button';
import { TextWithLinks } from '../TextWithLinks';

import { mySummary } from 'Data/mySummary';

export const Intro = () => (
  <Content>
    <P>
      Przez parę ostatnich lat pracowałem z WordPressem, aż do momentu, w którym okazało się, że
      niewiele może mnie w nim już zaskoczyć - dlatego niedawno przerzuciłem się w pełni na
      front-end.
    </P>
    <TextWithLinks text={mySummary} />
    <ButtonContainer>
      <Button href="/najpopularniejsze">Najpopularniejsze artykuły</Button>
    </ButtonContainer>
  </Content>
);

const Content = styled(NarrowWrapper)`
  --width: 740px;

  padding-bottom: 4rem;
  text-align: center;
  font-size: 1.1rem;
`;

const ButtonContainer = styled.footer`
  margin-top: 0.8rem;
`;
