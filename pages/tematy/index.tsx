import { FC } from 'react';
import { GetStaticProps } from 'next';

import CenteredText from 'Components/CenteredText';
import NarrowTitle from 'Components/NarrowTitle';
import TopicsGroup from 'Components/TopicsGroup';
import MainBanner from 'Components/MainBanner';
import TextBlock from 'Components/TextBlock';
import Button from 'Components/Button';
import ErrorSection from 'Components/ErrorSection';
import Head from 'Components/Head';
import P from 'Components/P';

import topicsGroups from 'Data/taxonomies/topics';

import { getPosts } from 'Helpers/content/posts';
import addressSeparator from 'AddressSeparator';
import siteName from 'SiteName';

import { PostsContainer } from 'Types/content';

import bannerImage from 'Images/banners/books.jpg';

const Topics: FC<PostsContainer> = () => (
  <>
    <Head
      title={`Tematy ${addressSeparator} ${siteName}`}
      description="Znajdziesz tu wszystkie grupy treści, które do tej pory powstały!"
      featuredImage={bannerImage.src}
      contentType="website"
    />
    <MainBanner
      title="Tematy"
      image={{
        src: bannerImage,
        alt: '',
      }}
    />
    <main>
      {topicsGroups ? (
        <>
          <TextBlock>
            <P>
              Wszystkie tematy, o których kiedykolwiek napisałem, znajdziedsz w tym oto miejscu.
              Rozgość się i wybierz dokładnie to, co Cię interesuje ✨
            </P>
          </TextBlock>

          {topicsGroups
            .filter(({ groupName }) => groupName !== 'Inne')
            .map(({ groupName, topics }) => (
              <TopicsGroup key={groupName} groupName={groupName} topics={topics} />
            ))}

          <TextBlock>
            <NarrowTitle>Wolisz nie ograniczać się do konkretnej tematyki?</NarrowTitle>
            <CenteredText as="footer">
              <Button href="/artykuly">Zobacz wszystkie artykuły</Button>
            </CenteredText>
          </TextBlock>
        </>
      ) : (
        <ErrorSection>
          Z jakiegoś powodu, tematy się nie wyświetliły. Ja czym prędzej to ogarnę, a tymczasem Ty,
          możesz sprawdzić inne miejsca na blogu 😌
        </ErrorSection>
      )}
    </main>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  const lastSixPosts = posts.slice(0, 6);

  return {
    props: { posts: lastSixPosts },
  };
};

export default Topics;
