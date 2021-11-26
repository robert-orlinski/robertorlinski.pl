import MainBanner from 'Components/MainBanner';
import TextBlock from 'Components/TextBlock';
import Link from 'Components/Link';
import Head from 'Components/Head';
import P from 'Components/P';

import siteName from 'SiteName';
import addressSeparator from 'AddressSeparator';

import bannerImage from 'Images/banners/me-at-louvre.jpg';

const meta = {
  title: `Kontakt ${addressSeparator} ${siteName}`,
  description:
    'Jeśli interesuje Cię współpraca lub po prostu chcesz pogadać, to tutaj znajdziesz kontakt do mnie!',
};

const Contact = () => (
  <>
    <Head {...meta} />
    <MainBanner
      title="Kontakt"
      image={{
        src: bannerImage,
        alt: '',
      }}
      isImageFluid
    />
    <main>
      <TextBlock>
        <P>
          Jeśli interesuje Cię współpraca lub po prostu chcesz pogadać, nie bój się napisać na
          mojego maila:
        </P>
        <P>
          <Link href="mailto:kontakt@robertorlinski.pl" isUnderlineVisible>
            kontakt@robertorlinski.pl
          </Link>
        </P>
        <P>
          Jestem w stanie doradzić Ci w Twojej ścieżce zawodowej, pomóc z problemem technicznym,
          wdrożyć procesy wytwarzania oprogramowania w Twojej firmie (
          <Link href="https://www.linkedin.com/in/robert-orlinski" isExternal isUnderlineVisible>
            przez 1,5 roku pracowałem jako CTO, ulepszając agencję kreatywną pod kątem IT
          </Link>
          ), podjąć współpracę blogu i YouTubie, lub pomóc w Twoim projekcie, jako programista!
        </P>
        <P>Albo po prostu pogadać - o IT, filozofii, życiu lub czymkolwiek innym! Czemu nie ✨</P>
      </TextBlock>
    </main>
  </>
);

export default Contact;
