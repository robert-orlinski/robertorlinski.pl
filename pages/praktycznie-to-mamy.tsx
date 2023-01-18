import MainBanner from 'Components/MainBanner';
import TextBlock from 'Components/TextBlock';
import Wrapper from 'Components/Wrapper';
import Button from 'Components/Button';
import Head from 'Components/Head';
import P from 'Components/P';

import siteName from 'SiteName';
import addressSeparator from 'AddressSeparator';

import bannerImage from 'Images/featured-images/frisbee.jpg';

const NewsletterConfirmation = () => (
  <>
    <Head
      title={`Praktycznie to mamy! ${addressSeparator} ${siteName}`}
      description="Potwierdź swój adres. Po wejściu w link, który powinien być już na Twojej skrzynce odbiorczej, będę w stanie podrzucać Ci dobre rzeczy związane z tematami, które poruszam na blogu."
      featuredImage={bannerImage.src}
      contentType="website"
    />
    <MainBanner
      title="Praktycznie to mamy!"
      image={{
        src: bannerImage,
        alt: 'Robert robiący rzeczy na kompiku przed piramidą w Luwrze.',
      }}
    />
    <Wrapper as="main">
      <TextBlock>
        <P>Fajnie, że będziemy mieli tam kontakt!</P>
        <P>
          Jedna tylko sprawa - <strong>potwierdź swój adres.</strong> Po wejściu w link, który
          powinien być już na Twojej skrzynce odbiorczej, będę w stanie przesłać Ci e-book i
          podrzucać dobre rzeczy związane z tematami, które poruszam na blogu.
        </P>
        <P>Do zobaczenia!</P>
        <Button href="/">Strona główna</Button>
      </TextBlock>
    </Wrapper>
  </>
);

export default NewsletterConfirmation;
