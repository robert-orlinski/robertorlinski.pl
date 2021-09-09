import styled from 'styled-components';

import { NewsletterForm } from 'Components/NewsletterForm';
import { SectionTitle } from 'Components/SectionTitle';
import { Wrapper } from 'Components/Wrapper';
import { from, to } from 'Helpers/devices';

export const Newsletter = () => (
  <Wrapper>
    <SectionTitle>Chętnie zaproponuję Ci coś jeszcze</SectionTitle>
    <Content>
      <Text>
        Wiesz, że stworzyłem e-booka z 30 rzeczami, o które trzeba zadbać oddając stronę na
        WordPressie? A wiesz też, że co jakiś czas wysyłam dobre linki (swoje i innych twórców) w
        zakresie wszystkiego, o czym można czytać na blogu? A to wszystko, może być Twoje, po tym,
        gdy wpiszesz swojego maila w formularzu!
      </Text>
      <NewsletterForm />
    </Content>
  </Wrapper>
);

const Content = styled.article`
  display: grid;

  padding-bottom: var(--section-space);

  @media ${from.tabletL} {
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 3rem;
    align-items: center;
  }

  @media ${to.tabletL} {
    grid-row-gap: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.15rem;
`;
