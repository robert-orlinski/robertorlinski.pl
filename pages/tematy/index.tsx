import { FC } from 'react';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { CenteredText } from 'Components/CenteredText';
import { TopicsGroup } from 'Components/TopicsGroup';
import { MainBanner } from 'Components/MainBanner';
import { TextBlock } from 'Components/TextBlock';
import { Button } from 'Components/Button';
import { Head } from 'Components/Head';
import { H } from 'Components/H';
import { P } from 'Components/P';

import { topicsGroups } from 'Data/taxonomies/topics';

import { getNewestPosts } from 'Helpers/content/posts';
import { addressSeparator } from 'AddressSeparator';
import { siteName } from 'SiteName';

import { PostsContainer } from 'Types/content';

import bannerImage from 'Images/banners/books.jpg';

const Home: FC<PostsContainer> = () => {
  const meta = {
    title: `Tematy ${addressSeparator} ${siteName}`,
    description:
      'W WordPressie widziałem już prawie wszystko, więc teraz skupiam się na front-endzie. Programuję dla siebie oraz klientów, piszę na blogu i nagrywam filmy na YouTubie. Po godzinach działam jako aktywista ✨',
  };

  return (
    <>
      <Head {...meta} />
      <MainBanner
        title="Tematy"
        image={{
          src: bannerImage,
          alt: '',
        }}
      />
      <main>
        <TextBlock>
          <P>
            Wszystkie tematy, o których kiedykolwiek napisałem, znajdziedsz w tym oto miejscu.
            Rozgość się i wybierz dokładnie to, co Cię interesuje ✨
          </P>
        </TextBlock>
        {topicsGroups ? (
          topicsGroups
            .filter(({ groupName }) => groupName !== 'Inne')
            .map(({ groupName, topics }) => (
              <TopicsGroup key={groupName} groupName={groupName} topics={topics} />
            ))
        ) : (
          <P as={CenteredText}>
            Z jakiegoś powodu, tematy się nie wyświetliły. Ja czym prędzej to ogarnę, a tymczasem
            Ty, możesz sprawdzić inne miejsca na blogu.
          </P>
        )}
        <TextBlock>
          <NarrowTitle level={2}>Wolisz nie ograniczać się do konkretnej tematyki?</NarrowTitle>
          <CenteredText as="footer">
            <Button href="/artykuly">Zobacz wszystkie artykuły</Button>
          </CenteredText>
        </TextBlock>
      </main>
    </>
  );
};

const NarrowTitle = styled(H)`
  max-width: 600px;

  margin-left: auto;
  margin-right: auto;
`;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getNewestPosts();

  return {
    props: { posts },
  };
};

export default Home;
