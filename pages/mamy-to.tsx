import MainBanner from 'Components/MainBanner';
import Wrapper from 'Components/Wrapper';
import TextBlock from 'Components/TextBlock';
import Head from 'Components/Head';

import siteName from 'SiteName';
import addressSeparator from 'AddressSeparator';

import bannerImage from 'Images/banners/me-in-austria.jpg';
import P from 'Components/P';
import DistantButton from 'Components/DistantButton';

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
        <DistantButton href="/bonusy/niezbednik-wordpress-developera.pdf">
          Pobierz e-book
        </DistantButton>
        <P>Niech służy!</P>
        <P>Do zobaczenia na Twojej skrzynce odbiorczej ❤️</P>
      </TextBlock>
    </Wrapper>
  </>
);

export default NewsletterSuccess;
