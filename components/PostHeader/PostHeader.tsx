import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { PostMeta } from '../PostMeta';

import { getPostFeaturedImage } from 'Helpers/components/posts';

import { Post } from 'Types/content';
import { from, to } from 'Helpers/devices';

export const PostHeader: FC<Post> = ({ title, category, date, slug }) => {
  const featuredImage = getPostFeaturedImage(slug);

  return (
    <Container>
      <Title>{title}</Title>
      <MetaContainer>
        <PostMeta {...{ category, date }} />
      </MetaContainer>
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
  margin-bottom: 0.33rem;

  text-align: center;

  @media ${from.tablet} {
    padding: 0 4rem;
  }

  @media ${to.tablet} {
    font-size: 1.6rem;
  }
`;

const MetaContainer = styled.p`
  padding: 0.3rem 0 2rem;
  text-align: center;
`;
