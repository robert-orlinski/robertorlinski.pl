import { FC } from 'react';
import styled from 'styled-components';

import { ListedPost } from 'Components/ListedPost';

import { from } from 'Devices';

import { PostsContainer } from 'Types/content';

export const PostsList: FC<PostsContainer> = ({ posts }) => (
  <List>
    {posts ? (
      posts.map((post) => {
        const { slug } = post;

        return <ListedPost key={slug} {...post} />;
      })
    ) : (
      <NarrowTitle level={2}>Wolisz nie ograniczać się do konkretnej tematyki?</NarrowTitle>
    )}
  </List>
);

const List = styled.ul`
  display: grid;
  gap: calc(var(--section-space) * 0.8) calc(var(--section-space) * 0.45);

  @media ${from.tabletL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
