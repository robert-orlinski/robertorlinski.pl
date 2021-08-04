import { Head } from '../../components/Head';
import { Footer } from '../../components/Footer';
import { WideWrapper } from '../../components/Foundations/Wrapper';
import { MainBanner } from '../../components/MainHeader';

import bannerImage from '../../public/images/banners/forest.jpg';

const meta = {
  title: 'Artykuły | Robert Orliński',
  description:
    'Wszystkie artykuły, które do tej pory pojawiły się na blogu. Przeczytasz o front-endzie, WordPressie, trochę przemyśleń i trochę rzeczy związanych z designem oraz pracą jako programista',
};

const Blog = () => (
  <>
    <Head {...meta} />
    <MainBanner
      title="Wszystkie artykuły"
      image={{
        src: bannerImage,
        alt: 'Robert zamierzający uderzyć ogromny, pluszowy przycisk "enter", który jednocześnie można podłączyć na USB i tym samym zatwierdzać rzeczy z potężnym impetem.',
      }}
    />
    <WideWrapper as="main"></WideWrapper>
    <Footer />
  </>
);

export default Blog;
