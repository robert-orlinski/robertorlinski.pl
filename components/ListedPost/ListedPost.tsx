import { FC } from 'react';
import styled from 'styled-components';

import CoveringLink from 'Components/CoveringLink';
import Link from 'Components/Link';
import PostMeta from 'Components/PostMeta';

import ListedPostContainer from './parts/ListedPostContainer';

import { getPostFeaturedImage, getPostLink } from 'Helpers/components/posts';

import { Post } from 'Types/content';
import { between } from 'Devices';

type Props = {
  isFeaturedImageHidden?: boolean;
} & Post;

const ListedPost: FC<Props> = ({ title, topics, slug, readingTime, isFeaturedImageHidden }) => {
  const featuredImage = !isFeaturedImageHidden && getPostFeaturedImage(slug);
  const link = getPostLink(slug);

  return (
    <ListedPostContainer>
      <CoveringLink href={link} zIndex="mid" />
      {featuredImage && (
        <ThumbnailContainer>
          <Thumbnail src={featuredImage} alt="" />
        </ThumbnailContainer>
      )}
      <Content>
        <MetaContainer>
          <PostMeta {...{ topics, readingTime }} />
        </MetaContainer>
        <Title>
          <Link tabIndex={-1} href={link}>
            {title}
          </Link>
        </Title>
      </Content>
    </ListedPostContainer>
  );
};

const ThumbnailContainer = styled.figure`
  overflow: hidden;
`;

const Thumbnail = styled.img`
  aspect-ratio: 165/100;
  object-fit: cover;
  transition: transform var(--long-transition-duration);

  ${ListedPostContainer}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  @media ${between.tabletAndTabletL} {
    padding-left: 2rem;
  }
`;

const MetaContainer = styled.p`
  font-size: 0.88rem;
`;

const Title = styled.h2`
  font-size: 1.1rem;
`;

export default ListedPost;
