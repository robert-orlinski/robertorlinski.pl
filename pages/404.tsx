import { FC } from 'react';

import MainBanner from 'Components/MainBanner';
import Wrapper from 'Components/Wrapper';
import TextBlock from 'Components/TextBlock';
import Head from 'Components/Head';
import P from 'Components/P';

import siteName from 'SiteName';
import addressSeparator from 'AddressSeparator';

import bannerImage from 'Images/banners/me-broken.jpg';
import SectionTitle from 'Components/SectionTitle';
import PostsList from 'Components/PostsList';

import { getRandomPosts } from 'Helpers/content/posts';

import { Post } from 'Types/content';
import Newsletter from 'Components/Newsletter';

const meta = {
  title: `Toż to strona 404! ${addressSeparator} ${siteName}`,
  description: 'Klasyczna strona 404, która mówi nam, że danej ścieżki nie ma w ramach serwisu 🦔',
};

type Props = {
  randomPosts: Post[];
};

const Page404: FC<Props> = ({ randomPosts }) => (
  <>
    <Head {...meta} />
    <MainBanner
      title="Toż to strona 404!"
      image={{
        src: bannerImage,
        alt: 'Załamy Robur, trzymający się za głowę 🙈',
      }}
    />
    <Wrapper>
      <TextBlock>
        <P>Ten Robert powyżej też nie odnalazł swojej ulubionej podstrony.</P>
        <P>
          Aby Ciebie nie pozostawić z niczym tak jak jego, podrzucam Ci 2 grupy treści, wśród
          których mam nadzieję, że znajdziesz coś dla siebie!
        </P>
      </TextBlock>
    </Wrapper>
    <Wrapper>
      <SectionTitle>3 wpisy, które mogą Cię zainteresować:</SectionTitle>
      <PostsList posts={randomPosts} />
    </Wrapper>
    <Newsletter title="Oraz mój newsletter:" />
  </>
);

export const getStaticProps = async () => {
  const randomPosts = await getRandomPosts(3);

  return {
    props: { randomPosts },
  };
};

export default Page404;
