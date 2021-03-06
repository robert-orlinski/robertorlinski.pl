import { FC } from 'react';
import styled from 'styled-components';

import NewsletterForm from 'Components/NewsletterForm';
import SectionTitle from 'Components/SectionTitle';
import Wrapper from 'Components/Wrapper';
import Row from 'Components/Row';
import P from 'Components/P';

import { to } from 'Devices';

type Props = {
  title?: string;
};

const Newsletter: FC<Props> = ({ title = 'Chętnie zaproponuję Ci coś jeszcze' }) => (
  <Wrapper withSpaceAbove id="newsletter">
    <SectionTitle>{title}</SectionTitle>
    <Content>
      <div>
        <P>
          Co jakiś czas, w ramach newslettera piszę o rzeczach, które nie pojawiają się na blogu,
          wysyłam linki do autorskich treści, jak i do wartościowych rzeczy, na które natrafiłem w
          Internecie. Zero spamu. Tylko treści, które mogą przydać Ci się w karierze programisty!
        </P>
        <P>
          PS. Nie musisz wpisywać swojego imienia, ale dzięki niemu, będę w stanie witać Cię,
          używając go, a to zawsze jest milsze ☀️
        </P>
      </div>
      <NewsletterForm isInline />
    </Content>
  </Wrapper>
);

const Content = styled(Row).attrs({
  as: 'article',
})`
  --columns: 1.5fr 1fr;

  @media ${to.tabletL} {
    grid-row-gap: var(--section-gap);
  }
`;

export default Newsletter;
