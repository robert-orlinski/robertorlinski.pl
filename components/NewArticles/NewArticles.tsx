import React, { FC } from 'react';
import styled from 'styled-components';

import CenteredText from 'Components/CenteredText';
import SectionTitle from 'Components/SectionTitle';
import PostsList from 'Components/PostsList';
import Button from 'Components/Button';

import { PostsContainer } from 'Types/content';

const NewArticles: FC<PostsContainer> = ({ posts }) => (
  <section>
    <SectionTitle>Najnowsze artykuły</SectionTitle>
    <PostsList {...{ posts }} />
    <MoreButtonContainer>
      <Button href="/artykuly">Wszystkie artykuły</Button>
    </MoreButtonContainer>
  </section>
);

const MoreButtonContainer = styled(CenteredText).attrs({
  as: 'footer',
})`
  padding-top: calc(var(--section-gap) * 0.6);
`;

export default NewArticles;
