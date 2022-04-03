import { FC } from 'react';
import styled from 'styled-components';

import CoveringLink from 'Components/CoveringLink';
import Link from 'Components/Link';
import PostMeta from 'Components/PostMeta';

import ListedPostContainer from './parts/ListedPostContainer';

import { getPostLink } from 'Helpers/components/posts';

import { Post } from 'Types/content';
import { between } from 'Devices';

const ListedPost: FC<Post> = ({ title, topics, slug, readingTime }) => {
  const link = getPostLink(slug);

  return (
    <ListedPostContainer>
      <CoveringLink href={link} zIndex="med" />
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
