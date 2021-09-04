import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { PostMeta } from 'components/PostMeta';

import { Post } from 'Types/content';

type Props = Post & { slug: string };

export const PostHeader: FC<Props> = ({ title, category, date, featuredImage, slug }) => {
  const featureImagePath = `/images/posts/${slug}${featuredImage}`;

  return (
    <Container>
      <Title>{title}</Title>
      <MetaContainer>
        <PostMeta {...{ category, date }} />
      </MetaContainer>
      <Image src={featureImagePath} alt="" width="850" height="500" />
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
