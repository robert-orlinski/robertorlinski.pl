import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { PostMeta } from 'components/PostMeta';

import { to } from 'Devices';

import { Category } from 'Types/data';

type Props = {
  title: string;
  category: Category;
  date: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export const PostHeader: FC<Props> = ({ title, category, date, image }) => (
  <header>
    <Title>{title}</Title>
    <PostMeta {...{ category, date }} />
    <Image {...image} />
  </header>
);

const Title = styled.h1`
  margin-bottom: 0.33rem;
  padding: 0 4rem;

  text-align: center;
`;
