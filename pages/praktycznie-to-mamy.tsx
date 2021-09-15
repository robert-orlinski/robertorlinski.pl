import { MainBanner } from 'Components/MainBanner';
import { Wrapper } from 'Components/Wrapper';
import { Intro } from 'Components/Intro';
import { Head } from 'Components/Head';

import { siteName } from 'SiteName';
import { addressSeparator } from 'AddressSeparator';

import bannerImage from 'Images/banners/me-at-louvre.jpg';
import { P } from 'Components/P';
import { Button } from 'Components/Button';

const meta = {
  title: `Praktycznie to mamy! ${addressSeparator} ${siteName}`,
  description:
    'Potwierdź swój adres. Po wejściu w link, który powinien być już na Twojej skrzynce odbiorczej, będę w stanie podrzucać Ci dobre rzeczy związane z tematami, które poruszam na blogu.',
};

const NewsletterConfirmation = () => (
  <>
    <Head {...meta} />
    <MainBanner
      title="Praktycznie to mamy!"
      image={{
        src: bannerImage,
        alt: 'Robert robiący rzeczy na kompiku przed piramidą w Luwrze.',
      }}
    />
    <Wrapper as="main">
      <Intro>
        <P>Fajnie, że będziemy mieli tam kontakt!</P>
        <P>
          Jedna tylko sprawa - <strong>potwierdź swój adres.</strong> Po wejściu w link, który
          powinien być już na Twojej skrzynce odbiorczej, będę w stanie przesłać Ci e-book i
          podrzucać dobre rzeczy związane z tematami, które poruszam na blogu.
        </P>
        <P>Do zobaczenia!</P>
        <Button href="/">Strona główna</Button>
      </Intro>
    </Wrapper>
  </>
);

export default NewsletterConfirmation;
