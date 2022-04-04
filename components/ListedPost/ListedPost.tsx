import { FC } from 'react';
import styled from 'styled-components';

import CoveringLink from 'Components/CoveringLink';
import Link from 'Components/Link';
import PostMeta from 'Components/PostMeta';

import ListedPostWrapper, { ListedPostWrapperProps } from './parts/ListedPostWrapper';

import { getPostFeaturedImage, getPostLink } from 'Helpers/components/posts';

import { Post } from 'Types/content';
import { between } from 'Devices';

const ListedPost: FC<ListedPostWrapperProps & Post> = ({
  title,
  topics,
  slug,
  readingTime,
  withFeaturedImageHidden,
}) => {
  const featuredImage = !withFeaturedImageHidden && getPostFeaturedImage(slug);
  const link = getPostLink(slug);

  return (
    <ListedPostWrapper {...{ withFeaturedImageHidden }}>
      <CoveringLink href={link} zIndex="mid" />
      {featuredImage && (
        <ThumbnailContainer>
          <Thumbnail src={featuredImage} alt="" />
        </ThumbnailContainer>
      )}
      <div>
        <MetaContainer>
          <PostMeta {...{ topics, readingTime }} />
        </MetaContainer>
        <Title>
          <Link tabIndex={-1} href={link}>
            {title}
          </Link>
        </Title>
      </div>
    </ListedPostWrapper>
  );
};

const ThumbnailContainer = styled.figure`
  overflow: hidden;

  @media ${between.tabletAndTabletL} {
    padding-right: 2rem;
  }
`;

const Thumbnail = styled.img`
  aspect-ratio: 165/100;
  object-fit: cover;
  transition: transform var(--long-transition-duration);

  ${ListedPostWrapper}:hover & {
    transform: scale(1.05);
  }
`;

const MetaContainer = styled.p`
  font-size: 0.88rem;
`;

const Title = styled.h2`
  font-size: 1.1rem;
`;

export default ListedPost;
