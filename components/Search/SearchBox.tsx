import { ChangeEvent, forwardRef, useState } from 'react';
import styled from 'styled-components';

import { TextInput } from 'Components/TextInput';
import { PostsList } from 'Components/PostsList';

import { Posts } from 'Types/content';
import { searchForPosts } from 'Helpers/requests/searchForPosts';

export const SearchBox = forwardRef((props, ref) => {
  const [posts, setPosts] = useState<Posts>([]);

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    const results = await searchForPosts(query);

    setPosts(results);
  };

  return (
    <>
      <Form method="GET">
        <TextInput
          label="Szukaj"
          name="query"
          required={false}
          autoComplete="off"
          onChange={handleSearch}
          {...{ ref }}
        />
      </Form>
      <section aria-live="polite" aria-atomic="true" id="search-results">
        <PostsList {...{ posts }} />
      </section>
    </>
  );
});

const Form = styled.form`
  width: min(100%, 570px);
  margin: 0 auto 3rem;
`;
