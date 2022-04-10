import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import useDebounce from 'Hooks/useDebounce';

import TextInput from 'Components/TextInput';
import PostsList from 'Components/PostsList';

import searchForPosts from 'Helpers/requests/searchForPosts';

import { Post } from 'Types/content';

const SearchInner = () => {
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
          type="search"
        />
      </Form>
      <Results aria-live="polite" aria-atomic="true" id="search-results">
        {posts &&
          (posts.length ? (
            <PostsList {...{ posts }} />
          ) : (
            <p>
              Nie istnieje tytuł artykułu, który pasuje do tej frazy. Może spróbujesz wpisać inną?
            </p>
          ))}
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

export default SearchInner;
