import { FC } from 'react';

import ListedPost from '../ListedPost';

import { PostsContainer } from 'Types/content';
import Wrapper from 'Components/Wrapper';

const PostsList: FC<PostsContainer> = ({ posts }) => (
  <Wrapper size="medium" as="ul">
    {posts.map((post) => {
      const { slug } = post;

      return <ListedPost key={slug} {...post} isFeaturedImageHidden />;
    })}
  </Wrapper>
);

export default PostsList;
