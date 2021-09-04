import styled from 'styled-components';

import { Wrapper } from '../Wrapper';
import { ButtonContainer } from '../ButtonContainer';
import { TextWithLinks } from '../TextWithLinks';
import { Button } from '../Button';
import { P } from '../P';

import { mySummary } from 'Data/mySummary';

import { from } from 'Devices';

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
  padding-bottom: var(--section-space);
  font-size: 1.1rem;

  @media ${from.phoneL} {
    text-align: center;
  }
`;
