import styled from 'styled-components';

import NewsletterExample from 'Components/NewsletterExample';
import NewsletterForm from 'Components/NewsletterForm';
import SectionTitle from 'Components/SectionTitle';
import MainBanner from 'Components/MainBanner';
import TextBlock from 'Components/TextBlock';
import Features from 'Components/Features';
import Wrapper from 'Components/Wrapper';
import Feature from 'Components/Feature';
import Head from 'Components/Head';
import P from 'Components/P';

import siteName from 'SiteName';
import addressSeparator from 'AddressSeparator';
import { to } from 'Devices';

import bannerImage from 'Images/banners/river.jpg';

const meta = {
  title: `Newsletter ${addressSeparator} ${siteName}`,
  description: 'Dodatkowe, front-endowe treści, prosto na Twoją skrzynkę odbiorczą!',
};

const Newsletter = () => (
  <>
    <Head {...meta} />
    <MainBanner
      title="Co powiesz na dodatkowe treści?"
      image={{
        src: bannerImage,
        alt: 'Robert robiący rzeczy na kompiku na tle cudownych Alp.',
      }}
    />
    <main>
      <TextBlock>
        <P>
          <b>Zero spamu</b>, tylko jakościowy content co parę tygodni - o front-endzie, WordPressie
          i rzeczach związanych z blogiem 🚀
        </P>
        <NewsletterContainer>
          <NewsletterForm />
        </NewsletterContainer>
      </TextBlock>
      <FeaturesContainer withSpaceBelow>
        <SectionTitle>Co trafi na Twoją skrzynkę?</SectionTitle>
        <Features>
          <Feature>
            Autorski tekst na temat front-endu, programowania ogólnie, kariery, produktywności,
            książek i innych!
          </Feature>
          <Feature>
            Najlepsze, ostatnio znalezione miejsca w Internecie, które mnie rozwinęły i sądzę, że
            rozwiną też Ciebie!
          </Feature>
          <Feature>I nowości z samego bloga! Ostatnie artykuły, filmy i inne materiały ✨</Feature>
        </Features>
      </FeaturesContainer>
      <NewsletterExample />
      <Wrapper>
        <SectionTitle>Brzmi interesująco?</SectionTitle>
        <TextBlock as="article">
          <P>Jeśli tak, to podrzucam sam formularz, raz jeszcze!</P>
          <NewsletterContainer>
            <NewsletterForm />
          </NewsletterContainer>
        </TextBlock>
      </Wrapper>
    </main>
  </>
);

const FeaturesContainer = styled(Wrapper)`
  --wrapper-gap: calc(var(--section-gap) * 0.7);

  padding-top: 1.5rem;

  @media ${to.laptopL} {
    --wrapper-gap: calc(var(--section-gap) * 0.3);
  }
`;

const NewsletterContainer = styled.figure`
  max-width: 400px;
  margin: 1rem auto 0;

  font-size: 1rem;
`;

export default Newsletter;
