import styled from 'styled-components';

import { NarrowWrapper } from '../Foundations/Wrapper';
import { P } from '../Text/Paragraph';
import { Button } from '../Button';
import { TextWithLinks } from '../TextWithLinks';

import { mySummary } from '../../helpers/content/mySummary';

const Content = styled(NarrowWrapper)`
  padding: 4rem 0;
  text-align: center;
  font-size: 1.1rem;
`;

const ButtonContainer = styled.footer`
  margin-top: 0.8rem;
`;

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
