import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { CoveringLink } from 'Components/CoveringLink';
import { Link } from 'Components/Link';
import { PostMeta } from 'Components/PostMeta';

import { getPostFeaturedImage, getPostLink } from 'Helpers/components/posts';

import { Post } from 'Types/content';
import { between } from 'Devices';

export const ListedPost: FC<Post> = ({ title, topics, slug, readingTime }) => {
  const featuredImage = getPostFeaturedImage(slug);
  const link = getPostLink(slug);

  return (
    <ListedPostContainer>
      <CoveringLink href={link} zIndex="med" />
      <ThumbnailContainer>
        <Thumbnail as={Image} src={featuredImage} alt="" width="500" height="300" />
      </ThumbnailContainer>
      <Content>
        <MetaContainer>
          <PostMeta {...{ topics, readingTime }} />
        </MetaContainer>
        <Title>
          <Link href={link} withUnderlineInvisible>
            {title}
          </Link>
        </Title>
      </Content>
    </ListedPostContainer>
  );
};

export const ListedPostContainer = styled.li`
  position: relative;

  @media ${between.tabletAndTabletL} {
    display: flex;

    & > * {
      flex: 1 1 0;
    }
  }
`;

const ThumbnailContainer = styled.figure`
  overflow: hidden;
`;

const Thumbnail = styled.div`
  position: absolute;
  transition: transform var(--long-transition-duration);
  object-fit: cover;

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
