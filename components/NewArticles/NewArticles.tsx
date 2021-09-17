import React, { FC } from 'react';
import styled from 'styled-components';

import { CenteredText } from '../CenteredText';
import { SectionTitle } from '../SectionTitle';
import { PostsList } from '../PostsList';
import { Button } from '../Button';

import { PostsContainer } from 'Types/content';

export const NewArticles: FC<PostsContainer> = ({ posts }) => (
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
  padding: calc(var(--section-space) * 0.6) 0 var(--section-space);
`;
