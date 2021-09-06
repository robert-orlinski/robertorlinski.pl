import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { CoveringLink } from '../CoveringLink';
import { Overlay } from '../Overlay';
import { ListedPostContainer } from '../ListedPostContainer';
import { Link } from '../Link';
import { PostMeta } from '../PostMeta';

import { getPostFeaturedImage, getPostLink } from 'Helpers/components/posts';

import { Post } from 'Types/content';

export const ListedPost: FC<Post> = ({ title, category, slug, readingTime }) => {
  const featuredImage = getPostFeaturedImage(slug);
  const link = getPostLink(slug);

  return (
    <ListedPostContainer>
      <CoveringLink href={link} zIndex="med" />
      <ThumbnailContainer>
        <Thumbnail as={Image} src={featuredImage} alt="" layout="fill" />
      </ThumbnailContainer>
      <MetaContainer>
        <PostMeta {...{ category, readingTime }} />
      </MetaContainer>
      <Title>
        <Link href={link} withUnderlineInvisible>
          {title}
        </Link>
      </Title>
    </ListedPostContainer>
  );
};

const ThumbnailContainer = styled.figure`
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    padding-bottom: 58.82%;
  }
`;

const Thumbnail = styled(Overlay)`
  transition: transform var(--long-transition-duration);
  object-fit: cover;

  ${ListedPostContainer}:hover & {
    transform: scale(1.05);
  }
`;

const MetaContainer = styled.p`
  font-size: 0.88rem;
`;

const Title = styled.h2`
  font-size: 1.1rem;
`;
