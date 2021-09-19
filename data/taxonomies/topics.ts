import { TopicsGroup } from 'Types/data';

import { images } from 'Images/taxonomies/topics';

export const topicGroups: Array<TopicsGroup> = [
  {
    groupName: 'Programowanie',
    topics: [
      {
        name: 'Front-end',
        featuredImage: images.frontEnd,
      },
      {
        name: 'WordPress',
        featuredImage: images.wordpress,
      },
      {
        name: 'Dostępność',
        featuredImage: images.accesibility,
      },
      {
        name: 'Narzędzia',
        featuredImage: images.tools,
      },
    ],
  },
  {
    groupName: 'Serie',
    topics: [
      {
        name: 'Własne bloki w WordPress Gutenberg',
        featuredImage: images.gutenberg,
      },
    ],
  },
  {
    groupName: 'Życie i praca',
    topics: [
      {
        name: 'Design',
        featuredImage: images.design,
      },
      {
        name: 'Praca',
        featuredImage: images.work,
      },
      {
        name: 'Produktywność',
        featuredImage: images.productivity,
      },
      {
        name: 'Nauka',
        featuredImage: images.learning,
      },
      {
        name: 'Przemyślenia',
        featuredImage: images.thoughts,
      },
    ],
  },
  {
    groupName: 'Inne',
    topics: [
      {
        name: 'Inne',
        featuredImage: images.others,
      },
    ],
  },
];
