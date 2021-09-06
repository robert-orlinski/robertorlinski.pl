import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { PostMeta } from '../PostMeta';

import { getPostFeaturedImage } from 'Helpers/components/posts';

import { Post } from 'Types/content';

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
`;

const Title = styled.h1`
  margin-bottom: 0.33rem;
  padding: 0 4rem;

  text-align: center;
`;

const MetaContainer = styled.p`
  padding: 0.3rem 0 2.2rem;
  text-align: center;
`;
