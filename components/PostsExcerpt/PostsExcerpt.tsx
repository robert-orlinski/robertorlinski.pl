import React, { FC } from 'react';
import styled from 'styled-components';

import CenteredText from 'Components/CenteredText';
import SectionTitle from 'Components/SectionTitle';
import PostsList from 'Components/PostsList';
import Wrapper, { WrapperProps } from 'Components/Wrapper';
import Button from 'Components/Button';

import { PostsContainer } from 'Types/content';

type Props = {
  title: string;
  button?: {
    href: string;
    title: string;
  };
} & PostsContainer &
  Omit<WrapperProps, 'size'>;

const PostsExcerpt: FC<Props> = ({
  title,
  posts,
  button,
  withSpaceAbove,
  withSpaceBelow,
  withBorderAbove,
  withBorderBelow,
}) => (
  <Wrapper
    {...{
      withSpaceAbove,
      withSpaceBelow,
      withBorderAbove,
      withBorderBelow,
    }}
  >
    <SectionTitle>{title}</SectionTitle>
    <PostsList {...{ posts }} />
    {button && (
      <MoreButtonContainer>
        <Button href={button.href}>{button.title}</Button>
      </MoreButtonContainer>
    )}
  </Wrapper>
);

const MoreButtonContainer = styled(CenteredText).attrs({
  as: 'footer',
})`
  padding-top: calc(var(--section-gap) * 0.6);
`;

export default PostsExcerpt;
