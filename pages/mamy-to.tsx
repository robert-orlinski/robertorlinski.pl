import DistantButton from 'Components/DistantButton';
import MainBanner from 'Components/MainBanner';
import TextBlock from 'Components/TextBlock';
import Wrapper from 'Components/Wrapper';
import Head from 'Components/Head';
import P from 'Components/P';

import siteName from 'SiteName';
import addressSeparator from 'AddressSeparator';

import bannerImage from 'Images/banners/me-in-austria.jpg';

const meta = {
  title: `Mamy to! ${addressSeparator} ${siteName}`,
  description: 'Teraz już oficjalnie - mamy kontakt na mailu!',
};

const NewsletterSuccess = () => (
  <>
    <Head {...meta} />
    <MainBanner
      title="Mamy to!"
      image={{
        src: bannerImage,
        alt: 'Robert robiący rzeczy na kompiku na tle cudownych Alp.',
      }}
    />
    <Wrapper as="main">
      <TextBlock>
        <P>
          Teraz już oficjalnie - mamy kontakt na mailu! Jeśli tylko Cię to interesuje, to e-booka z
          30 rzeczami, o które trzeba zadbać oddając stronę na WordPressie, znajdziesz poniżej:
        </P>
        <DistantButton href="https://static.robertorlinski.pl/niezbednik-wordpress-developera.pdf">
          Pobierz e-book
        </DistantButton>
        <P>Niech służy!</P>
        <P>Do zobaczenia na Twojej skrzynce odbiorczej ❤️</P>
      </TextBlock>
    </Wrapper>
  </>
);

export default NewsletterSuccess;
