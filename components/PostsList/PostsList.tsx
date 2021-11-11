import { FC } from 'react';
import styled from 'styled-components';

import ListedPost from '../ListedPost';

import { from } from 'Devices';

import { PostsContainer } from 'Types/content';

const PostsList: FC<PostsContainer> = ({ posts }) => (
  <List>
    {posts.map((post) => {
      const { slug } = post;

      return <ListedPost key={slug} {...post} />;
    })}
  </List>
);

const List = styled.ul`
  display: grid;
  gap: calc(var(--section-gap) * 0.8) calc(var(--section-gap) * 0.45);

  @media ${from.tabletL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default PostsList;
