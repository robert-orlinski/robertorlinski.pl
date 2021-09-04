import React from 'react';
import styled from 'styled-components';

import { ButtonContainer } from '../ButtonContainer';
import { SectionTitle } from '../SectionTitle';
import { PostsList } from '../PostsList';
import { Button } from '../Button';

export const NewArticles = () => (
  <section>
    <SectionTitle>Najnowsze artykuły</SectionTitle>
    <PostsList />
    <MoreButtonContainer>
      <Button href="/artykuly">Wszystkie artykuły</Button>
    </MoreButtonContainer>
  </section>
);

const MoreButtonContainer = styled(ButtonContainer)`
  padding-top: 2.5rem;
`;
