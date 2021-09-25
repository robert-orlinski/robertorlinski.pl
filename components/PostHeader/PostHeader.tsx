import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { PostMeta } from 'Components/PostMeta';

import { getPostFeaturedImage } from 'Helpers/components/posts';

import { Post } from 'Types/content';
import { to } from 'Devices';

export const PostHeader: FC<Post> = ({ title, topics, date, slug }) => {
  const featuredImage = getPostFeaturedImage(slug);

  return (
    <Container>
      <PostMeta {...{ topics, date }} />
      <Title>{title}</Title>
      <Image src={featuredImage} alt="" width="850" height="500" />
    </Container>
  );
};

const Container = styled.header`
  padding: 6.2rem 0 3rem;

  @media ${to.tablet} {
    padding: 3rem 0 1.75rem;
  }
`;

const Title = styled.h1`
  margin: 0.8rem 0 2rem;

  font-size: clamp(1.6rem, 4vw, 2.6rem);
`;
