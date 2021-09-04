import styled from 'styled-components';

import { Wrapper } from '../Wrapper';
import { ButtonContainer } from '../ButtonContainer';
import { TextWithLinks } from '../TextWithLinks';
import { Button } from '../Button';
import { P } from '../P';

import { mySummary } from 'Data/mySummary';

export const Intro = () => (
  <Content size="small">
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

const Content = styled(Wrapper)`
  padding-bottom: 4rem;
  text-align: center;
  font-size: 1.1rem;
`;
