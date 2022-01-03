import { FC } from 'react';

import PostsList from 'Components/PostsList';
import Wrapper from 'Components/Wrapper';

import { PostsContainer } from 'Types/content';
import SectionTitle from 'Components/SectionTitle';

const RelatedPosts: FC<PostsContainer> = ({ posts }) => (
  <Wrapper withSpaceAbove withSpaceBelow withBorderAbove withBorderBelow>
    <SectionTitle>Mogą Cię zainteresować:</SectionTitle>
    <PostsList {...{ posts }} />
  </Wrapper>
);

export default RelatedPosts;
