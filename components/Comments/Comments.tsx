import { FC, useEffect, useState } from 'react';
import Giscus, { Theme } from '@giscus/react';
import styled, { keyframes } from 'styled-components';

import SectionTitle from 'Components/SectionTitle';
import Wrapper from 'Components/Wrapper';

import { from, to } from 'Devices';

// giscus.app loads this with CORS, which fails on the apex domain's redirect to www, so it needs the final URL.
const theme = 'https://www.robertorlinski.pl/css/comments.css' as Theme;

type Props = {
  title: string;
};

const GISCUS_ORIGIN = 'https://giscus.app';
const LOADING_TIMEOUT = 15000;

const Comments: FC<Props> = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === GISCUS_ORIGIN && event.data?.giscus) {
        setIsLoading(false);
      }
    };

    window.addEventListener('message', handleMessage);
    const timeout = window.setTimeout(() => setIsLoading(false), LOADING_TIMEOUT);

    return () => {
      window.removeEventListener('message', handleMessage);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <Container id="komentarze">
      <Title>Czy chcesz dodać coś od siebie?</Title>
      <Content>
        {isLoading && (
          <Loader role="status" aria-live="polite">
            <Spinner aria-hidden="true" />
            Ładowanie komentarzy…
          </Loader>
        )}
        <Giscus
          repo="robert-orlinski/robertorlinski.pl"
          repoId="MDEwOlJlcG9zaXRvcnkzOTAzOTkwOTA="
          category="Komentarze"
          categoryId="DIC_kwDOF0UEcs4CAeJj"
          mapping="specific"
          term={title}
          reactionsEnabled="0"
          emitMetadata="1"
          theme={theme}
          lang="pl"
        />
      </Content>
    </Container>
  );
};

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

const Loader = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;
`;

const Spinner = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 2.4s;
  }
`;

const Container = styled(Wrapper).attrs({
  withSpaceAbove: true,
  withSpaceBelow: true,
  withBorderAbove: true,
})`
  giscus-widget::part(iframe) {
    color-scheme: light;
  }

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
