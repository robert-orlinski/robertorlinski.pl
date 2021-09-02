import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { PostMeta } from 'components/PostMeta';

import { Post } from 'Types/content';

type Props = Post & { slug: string };

export const PostHeader: FC<Props> = ({ title, category, date, featuredImage, slug }) => {
  const featureImagePath = `/images/posts/${slug}${featuredImage}`;

  return (
    <header>
      <Title>{title}</Title>
      <PostMeta {...{ category, date }} />
      <Image src={featureImagePath} alt="" width="850" height="500" />
    </header>
  );
};

const Title = styled.h1`
  margin-bottom: 0.33rem;
  padding: 0 4rem;

  text-align: center;
`;
