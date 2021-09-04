import { FC } from 'react';
import styled from 'styled-components';

import { ListedPost } from '../ListedPost';

import { from } from 'Devices';

import { Posts } from 'Types/content';

export const PostsList: FC<Posts> = () => (
  <List>
    {dummyPosts.map((post) => {
      const { title } = post;

      return <ListedPost key={title} {...post} />;
    })}
  </List>
);

const List = styled.ul`
  display: grid;
  gap: calc(var(--section-space) * 0.8) calc(var(--section-space) * 0.45);

  @media ${from.phoneL} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${from.tabletL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const dummyPosts: Posts = [
  {
    title: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    abstract: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    isPublished: true,
    featuredImage: '/images/banners/me.jpg',
    category: 'Front-end',
  },
  {
    title: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    abstract: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    isPublished: true,
    featuredImage: '/images/banners/me.jpg',
    category: 'Front-end',
  },
  {
    title: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    abstract: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    isPublished: true,
    featuredImage: '/images/banners/me.jpg',
    category: 'Front-end',
  },
  {
    title: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    abstract: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    isPublished: true,
    featuredImage: '/images/banners/me.jpg',
    category: 'Front-end',
  },
  {
    title: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    abstract: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    isPublished: true,
    featuredImage: '/images/banners/me.jpg',
    category: 'Front-end',
  },
];
