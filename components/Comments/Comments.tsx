import { FC } from 'react';
import styled from 'styled-components';
import { Giscus, Theme } from '@giscus/react';

import SectionTitle from 'Components/SectionTitle';
import Wrapper from 'Components/Wrapper';

import { from, to } from 'Devices';

import siteUrl from 'SiteUrl';

const theme = `${siteUrl}/css/comments.css` as Theme;

type Props = {
  title: string;
};

const Comments: FC<Props> = ({ title }) => (
  <Container id="komentarze">
    <Title>Czy chcesz dodać coś od siebie?</Title>
    <Giscus
      repo="robert-orlinski/robertorlinski.pl"
      repoId="MDEwOlJlcG9zaXRvcnkzOTAzOTkwOTA="
      category="Komentarze"
      categoryId="DIC_kwDOF0UEcs4CAeJj"
      mapping="specific"
      term={title}
      reactionsEnabled="0"
      emitMetadata="0"
      theme={theme}
    />
  </Container>
);

const Container = styled(Wrapper).attrs({
  withSpaceAbove: true,
  withSpaceBelow: true,
  withBorderAbove: true,
})`
  @media ${from.tabletL} {
    display: flex;
  }
`;

const Title = styled(SectionTitle)`
  @media ${from.laptopL} {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
  }

  @media ${from.tabletL} {
    padding-right: var(--section-gap);
  }

  @media ${to.tabletL} {
    margin-bottom: calc(var(--section-gap) * 0.6);
  }
`;

export default Comments;
