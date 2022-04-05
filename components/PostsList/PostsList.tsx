import { FC } from 'react';

import ListedPost from '../ListedPost';

import { PostsContainer } from 'Types/content';
import styled from 'styled-components';

const PostsList: FC<PostsContainer> = ({ posts }) => (
  <PostsListWrapper>
    {posts.map((post) => {
      const { slug } = post;

      return <ListedPost key={slug} {...post} withFeaturedImageHidden />;
    })}
  </PostsListWrapper>
);

const PostsListWrapper = styled.ul`
  margin: 0 auto;
`;

export default PostsList;
