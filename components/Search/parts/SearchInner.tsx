import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { polishPlurals } from 'polish-plurals';

import useDebounce from 'Hooks/useDebounce';

import TextInput from 'Components/TextInput';
import PostsList from 'Components/PostsList';

import searchForPosts from 'Helpers/requests/searchForPosts';

import { Post } from 'Types/content';

type Props = {
  isVisible: boolean;
};

type Status = 'idle' | 'loading' | 'done' | 'error';

const SearchInner = ({ isVisible }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const latestRequestId = useRef(0);

  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<Status>('idle');

  const trimmedQuery = query.trim();

  useEffect(() => {
    if (isVisible) {
      inputRef.current?.focus();
    }
  }, [isVisible]);

  useDebounce(
    async () => {
      const requestId = ++latestRequestId.current;

      if (!trimmedQuery) {
        setPosts([]);
        setStatus('idle');

        return;
      }

      setStatus('loading');

      try {
        const results = await searchForPosts(trimmedQuery);

        if (requestId === latestRequestId.current) {
          setPosts(results);
          setStatus('done');
        }
      } catch {
        if (requestId === latestRequestId.current) {
          setStatus('error');
        }
      }
    },
    150,
    [trimmedQuery],
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const resultsCount = posts.length;
  const resultsSummary = `Znaleziono ${resultsCount} ${polishPlurals(
    'artykuł',
    'artykuły',
    'artykułów',
    resultsCount,
  )}.`;

  return (
    <>
      <Form method="GET" onSubmit={(e) => e.preventDefault()}>
        <TextInput
          ref={inputRef}
          label="Szukaj"
          name="query"
          autoComplete="off"
          onChange={handleInputChange}
          type="search"
        />
      </Form>
      <Results aria-live="polite" aria-atomic="true" id="search-results">
        {status === 'idle' && <Hint>Wpisz fragment tytułu artykułu, którego szukasz.</Hint>}
        {status === 'error' && (
          <p role="alert">Nie udało się wyszukać artykułów. Spróbuj ponownie za chwilę.</p>
        )}
        {(status === 'done' || status === 'loading') && resultsCount > 0 && (
          <>
            <Summary>{status === 'loading' ? 'Szukam…' : resultsSummary}</Summary>
            <ResultsList $isStale={status === 'loading'}>
              <PostsList {...{ posts }} />
            </ResultsList>
          </>
        )}
        {status === 'loading' && resultsCount === 0 && <Hint>Szukam…</Hint>}
        {status === 'done' && resultsCount === 0 && (
          <p>
            Nie istnieje tytuł artykułu, który pasuje do tej frazy. Może spróbujesz wpisać inną?
          </p>
        )}
      </Results>
    </>
  );
};

const Form = styled.form`
  width: var(--search-inner-width);
`;

const Results = styled.div`
  width: var(--search-inner-width);
  padding: var(--hamburger-size) 0;
`;

const Hint = styled.p`
  opacity: 0.6;
`;

const Summary = styled.p`
  margin-bottom: 1.5rem;
  opacity: 0.6;
`;

const ResultsList = styled.div<{ $isStale: boolean }>`
  opacity: ${({ $isStale }) => ($isStale ? 0.5 : 1)};
  transition: opacity var(--short-transition-duration);
`;

export default SearchInner;
