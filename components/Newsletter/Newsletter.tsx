import styled from 'styled-components';

import { NewsletterForm } from 'Components/NewsletterForm';
import { SectionTitle } from 'Components/SectionTitle';
import { Wrapper } from 'Components/Wrapper';
import { Row } from 'Components/Row';
import { P } from 'Components/P';

export const Newsletter = () => (
  <Wrapper withSpaceAbove>
    <SectionTitle>Chętnie zaproponuję Ci coś jeszcze</SectionTitle>
    <Content>
      <div>
        <Text>
          Co jakiś czas, w ramach newslettera piszę o rzeczach, które nie pojawiają się na blogu,
          wysyłam linki do autorskich treści, jak i do wartościowych rzeczy, na które natrafiłem w
          Internecie. Zero spamu. Tylko treści, które mogą przydać Ci się w karierze programisty!
        </Text>
        <Text>
          PS. Nie musisz wpisywać swojego imienia, ale dzięki niemu, będę w stanie witać Cię,
          używając go, a to zawsze jest milsze ☀️
        </Text>
      </div>
      <NewsletterForm />
    </Content>
  </Wrapper>
);

const Content = styled(Row).attrs({
  as: 'article',
})`
  --columns: 1.5fr 1fr;
`;

const Text = styled(P)`
  font-size: 1.1rem;
`;
