import { ChangeEvent, forwardRef, useState } from 'react';
import styled from 'styled-components';

import useDebounce from 'Hooks/useDebounce';

import TextInput from 'Components/TextInput';
import PostsList from 'Components/PostsList';
import Error from 'Components/ErrorSection';

import searchForPosts from 'Helpers/requests/searchForPosts';

import { Post } from 'Types/content';
import { to } from 'Devices';

const SearchInner = forwardRef((props, ref) => {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<Post[] | null>(null);

  useDebounce(
    async () => {
      const results = await searchForPosts(query);

      setPosts(results);
    },
    100,
    [query],
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Form method="GET" onSubmit={(e) => e.preventDefault()}>
        <TextInput
          label="Szukaj"
          name="query"
          autoComplete="off"
          onChange={handleInputChange}
          {...{ ref }}
        />
      </Form>
      <Results aria-live="polite" aria-atomic="true" id="search-results">
        {posts &&
          (posts.length ? (
            <PostsList {...{ posts }} />
          ) : (
            <>
              <Error>
                Nie istnieje tytuł artykułu, który pasuje do tej frazy. Może spróbujesz wpisać inną?
              </Error>
            </>
          ))}
      </Results>
    </>
  );
});

const Form = styled.form`
  width: min(100%, 570px);
  margin: 0 auto 3rem;
`;

const Results = styled.div`
  padding: calc(var(--hamburger-size) * 0.8) 0 calc(var(--hamburger-size) * 3);

  @media ${to.phoneL} {
    padding: calc(var(--hamburger-size) * 0) 0 calc(var(--hamburger-size) * 3);
  }
`;

export default SearchInner;
