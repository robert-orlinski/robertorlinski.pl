import MainBanner from 'Components/MainBanner';
import TextBlock from 'Components/TextBlock';
import Wrapper from 'Components/Wrapper';
import Head from 'Components/Head';
import P from 'Components/P';

import siteName from 'SiteName';
import addressSeparator from 'AddressSeparator';

import bannerImage from 'Images/featured-images/me-in-austria.jpg';

const NewsletterSuccess = () => (
  <>
    <Head
      title={`Mamy to! ${addressSeparator} ${siteName}`}
      description="'Teraz już oficjalnie - mamy kontakt na mailu!"
      featuredImage={bannerImage.src}
      contentType="website"
    />
    <MainBanner
      title="Mamy to!"
      image={{
        src: bannerImage,
        alt: 'Robert robiący rzeczy na kompiku na tle cudownych Alp.',
      }}
    />
    <Wrapper as="main">
      <TextBlock>
        <P>Teraz już oficjalnie - mamy kontakt na mailu!</P>
        <P>Do zobaczenia na Twojej skrzynce odbiorczej 🥳</P>
      </TextBlock>
    </Wrapper>
  </>
);

export default NewsletterSuccess;
