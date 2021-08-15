import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Separator } from '../Separator';
import { CoveringLink } from '../CoveringLink';
import { Overlay } from '../Overlay';
import { ElementWithOpacity } from '../ElementWithOpacity';
import { ListedPostContainer } from './ListedPostContainer';
import { Link } from '../Link';

import { Post } from 'Types/content';

export const ListedPost: FC<Post> = ({ title, slug, category, time, thumbnail }) => (
  <ListedPostContainer>
    <CoveringLink href={`/artykuly/${slug}`} zIndex="med" />
    <ThumbnailContainer>
      <Thumbnail as={Image} src={thumbnail} alt="" />
    </ThumbnailContainer>
    <Meta>
      <Category href={`/kategoria/${category.slug}`}>{category.name}</Category>
      <Separator />
      <span>{time}</span>
    </Meta>
    <Title>
      <Link href={slug}>{title}</Link>
    </Title>
  </ListedPostContainer>
);

const ThumbnailContainer = styled.figure`
  overflow: hidden;

  &::after {
    content: '';
    padding-bottom: 58.82%;
  }
`;

const Category = styled(ElementWithOpacity)`
  z-index: var(--max-z-index);
`;

const Thumbnail = styled(Overlay)`
  transition: transform var(--long-transition-duration);

  ${ListedPostContainer}:hover & {
    transform: scale(1.05);
  }
`;

const Meta = styled.p`
  display: flex;
  align-items: center;

  margin: 0.27rem 0 0.2rem;

  font-size: 0.88rem;
`;

const Title = styled.h2`
  font-size: 1rem;
`;
