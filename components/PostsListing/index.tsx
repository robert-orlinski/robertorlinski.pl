import { FC } from 'react';
import { Wrapper } from '../Foundations/Wrapper';
import bannerImage from '../public/images/banners/me.jpg';

const dummyPosts = [
  {
    title: 'Własne bloki w WordPress Gutenberg #006 – Format API ',
    categories: ['WordPress', 'Własne bloki Gutenberga'],
    time: '7 minut',
    thumbnail: {
      src: bannerImage,
      alt: '',
    },
  },
];

export const PostsList: FC<> = () => <Wrapper></Wrapper>;
