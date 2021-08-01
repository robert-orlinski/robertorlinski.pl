import styled from 'styled-components';

import { NarrowWrapper } from '../Foundations/Wrapper';
import { P } from '../Text/Paragraph';
import { Link } from '../Text/Link';
import { ButtonInner, Button } from '../Button';

import { mySummary } from '../../helpers/routes/mySummary';

const Content = styled(NarrowWrapper)`
  padding: 4rem 0;
  text-align: center;
  font-size: 1.1rem;
`;

const ButtonContainer = styled.footer`
  margin-top: 0.8rem;

  & > ${ButtonInner} {
    margin: 0 0.4rem;
  }
`;

export const Intro = () => (
  <Content>
    <P>
      Przez parę ostatnich lat pracowałem z WordPressem - aż do momentu, w którym okazało się, że
      niewiele może mnie w nim już zaskoczyć - dlatego niedawno przerzuciłem się na front-end
      stricte.
    </P>
    <P>
      {mySummary.map(({ type, text, href }) =>
        type === 'text' ? (
          text
        ) : type === 'internal-link' ? (
          <Link href={href} withLineVisible>
            {text}
          </Link>
        ) : (
          <Link href={href} external withLineVisible>
            {text}
          </Link>
        ),
      )}
    </P>
    <ButtonContainer>
      <Button href="/moje-projekty">Moje projekty</Button>
      <Button href="/tematy">Tematy artykułów</Button>
    </ButtonContainer>
  </Content>
);
