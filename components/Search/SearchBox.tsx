import { ChangeEvent, forwardRef, useState } from 'react';
import styled from 'styled-components';

import useDebounce from 'Hooks/useDebounce';

import { TextInput } from 'Components/TextInput';
import { PostsList } from 'Components/PostsList';
import { Error } from 'Components/Error';

import { Posts } from 'Types/content';
import { searchForPosts } from 'Helpers/requests/searchForPosts';

export const SearchBox = forwardRef((props, ref) => {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<Posts>([]);

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
      <section aria-live="polite" aria-atomic="true" id="search-results">
        {posts.length ? (
          <PostsList {...{ posts }} />
        ) : (
          <Error>Nie znalazłem nic, co pasuje do tej frazy. Może spróbujesz wpisać inną?</Error>
        )}
      </section>
    </>
  );
});

const Form = styled.form`
  width: min(100%, 570px);
  margin: 0 auto 3rem;
`;
