import { TopicsGroups } from 'Types/data';

import frontEnd from 'Images/taxonomies/topics/front-end.jpg';
import wordpress from 'Images/taxonomies/topics/wordpress.jpg';
import gutenberg from 'Images/taxonomies/topics/gutenberg.jpg';
import accesibility from 'Images/taxonomies/topics/accesibility.jpg';
import design from 'Images/taxonomies/topics/design.jpg';
import tools from 'Images/taxonomies/topics/tools.jpg';
import work from 'Images/taxonomies/topics/work.jpg';
import productivity from 'Images/taxonomies/topics/productivity.jpg';
import learning from 'Images/taxonomies/topics/learning.jpg';
import thoughts from 'Images/taxonomies/topics/thoughts.jpg';
import others from 'Images/taxonomies/topics/others.jpg';

export const images = {
  frontEnd,
  wordpress,
  gutenberg,
  accesibility,
  design,
  tools,
  work,
  productivity,
  learning,
  thoughts,
  others,
};

export const topicsGroups: TopicsGroups = [
  {
    groupName: 'Programowanie',
    topics: [
      {
        name: 'Front-end',
        slug: 'front-end',
        featuredImage: images.frontEnd,
      },
      {
        name: 'WordPress',
        slug: 'wordpress',
        featuredImage: images.wordpress,
      },
      {
        name: 'Dostępność',
        slug: 'dostepnosc',
        featuredImage: images.accesibility,
      },
      {
        name: 'Narzędzia',
        slug: 'narzedzia',
        featuredImage: images.tools,
      },
    ],
  },
  {
    groupName: 'Serie',
    topics: [
      {
        name: 'Własne bloki w WordPress Gutenberg',
        slug: 'wlasne-bloki-w-wordpress-gutenberg',
        featuredImage: images.gutenberg,
      },
    ],
  },
  {
    groupName: 'Życie i praca',
    topics: [
      {
        name: 'Design',
        slug: 'design',
        featuredImage: images.design,
      },
      {
        name: 'Praca',
        slug: 'praca',
        featuredImage: images.work,
      },
      {
        name: 'Produktywność',
        slug: 'produktywnosc',
        featuredImage: images.productivity,
      },
      {
        name: 'Nauka',
        slug: 'nauka',
        featuredImage: images.learning,
      },
      {
        name: 'Przemyślenia',
        slug: 'przemyslenia',
        featuredImage: images.thoughts,
      },
    ],
  },
  {
    groupName: 'Inne',
    topics: [
      {
        name: 'Inne',
        slug: 'inne',
        featuredImage: images.others,
      },
    ],
  },
];
