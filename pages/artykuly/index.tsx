import { Head } from '../../components/Head';
import { MainBanner } from '../../components/MainHeader';
import { PostsList } from '../../components/PostsListing';

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
    <PostsList />
  </>
);

export default Blog;
