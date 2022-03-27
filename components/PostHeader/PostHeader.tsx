import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import PostMeta from 'Components/PostMeta';

import { to } from 'Devices';
import { TopicName } from 'Types/data';

type Props = {
  title: string;
  topics: TopicName[];
  date: string;
  featuredImage: string;
};

const PostHeader: FC<Props> = ({ title, topics, date, featuredImage }) => (
  <Container>
    <PostMeta {...{ topics, date }} />
    <Title>{title}</Title>
    <Image src={featuredImage} alt="" width="850" height="500" />
  </Container>
);

const Container = styled.header`
  padding: 6.2rem 0 3rem;

  @media ${to.tabletL} {
    padding: 3rem 0 1.75rem;
  }
`;

const Title = styled.h1`
  margin: 0.8rem 0 2rem;

  font-size: clamp(1.4rem, 4vw, 2.2rem);
`;

export default PostHeader;
