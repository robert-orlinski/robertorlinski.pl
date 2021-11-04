import { ChangeEvent, forwardRef, useState } from 'react';
import styled from 'styled-components';

import useDebounce from 'Hooks/useDebounce';

import { TextInput } from 'Components/TextInput';
import { PostsList } from 'Components/PostsList';
import { Error } from 'Components/Error';

import { Posts } from 'Types/content';
import { searchForPosts } from 'Helpers/requests/searchForPosts';
import { to } from 'Devices';

export const SearchBox = forwardRef((props, ref) => {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<Posts | null>(null);

  useDebounce(
    async () => {
      const results = await searchForPosts(query);

      setPosts(results);
    },
    1000,
    [query],
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

  return (
    <>
      <Form method="GET">
        <TextInput
          label="Szukaj"
          name="query"
          required={false}
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
            <Error>Nie znalazłem nic, co pasuje do tej frazy. Może spróbujesz wpisać inną?</Error>
          ))}
      </Results>
    </>
  );
});

const Form = styled.form`
  width: min(100%, 570px);
  margin: 0 auto 3rem;
`;

const Results = styled.section`
  padding: calc(var(--hamburger-size) * 0.8) 0 calc(var(--hamburger-size) * 3);

  @media ${to.phoneL} {
    padding: calc(var(--hamburger-size) * 0) 0 calc(var(--hamburger-size) * 3);
  }
`;
