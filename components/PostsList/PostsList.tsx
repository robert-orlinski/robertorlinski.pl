import { FC } from 'react';
import styled from 'styled-components';

import { ListedPost } from './ListedPost';

import { Posts } from 'Types/content';

import bannerImage from 'Images/banners/me.jpg';

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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem 1.8rem;
`;

const dummyPosts: Posts = [
  {
    title: 'Własne bloki w WordPress Gutenberg #006 – Format API',
    slug: 'wordpress-gutenberg-006',
    category: {
      name: 'Front-end',
      slug: 'front-end',
    },
    time: '7 minut',
    thumbnail: bannerImage,
  },
  {
    title: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    slug: 'wordpress-gutenberg-006',
    category: {
      name: 'Front-end',
      slug: 'front-end',
    },
    time: '7 minut',
    thumbnail: bannerImage,
  },
  {
    title: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    slug: 'wordpress-gutenberg-006',
    category: {
      name: 'Front-end',
      slug: 'front-end',
    },
    time: '7 minut',
    thumbnail: bannerImage,
  },
  {
    title: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    slug: 'wordpress-gutenberg-006',
    category: {
      name: 'Front-end',
      slug: 'front-end',
    },
    time: '7 minut',
    thumbnail: bannerImage,
  },
  {
    title: 'Własne bloki w WordPress Gutenberg #005 – Toolbar',
    slug: 'wordpress-gutenberg-006',
    category: {
      name: 'Front-end',
      slug: 'front-end',
    },
    time: '7 minut',
    thumbnail: bannerImage,
  },
];