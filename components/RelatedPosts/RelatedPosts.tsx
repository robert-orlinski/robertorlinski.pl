import { FC } from 'react';
import styled from 'styled-components';

import { PostsList } from 'Components/PostsList';
import { Wrapper } from 'Components/Wrapper';

import { PostsContainer } from 'Types/content';
import { SectionTitle } from 'Components/SectionTitle';

export const RelatedPosts: FC<PostsContainer> = ({ posts }) => (
  <WrapperWithBorder withSpaceAbove withSpaceBelow>
    <SectionTitle>Mogą Cię zainteresować:</SectionTitle>
    <PostsList {...{ posts }} />
  </WrapperWithBorder>
);

const WrapperWithBorder = styled(Wrapper)`
  border-top: 1px solid var(--line-gray);
`;
