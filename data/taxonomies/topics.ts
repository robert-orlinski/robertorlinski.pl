import { TopicsGroup } from 'Types/data';

const topicsImagesDir = '/images/taxonomies/topics';

const topicsGroups: TopicsGroup[] = [
  {
    groupName: 'Programowanie',
    topics: [
      {
        name: 'Front-end',
        slug: 'front-end',
        featuredImage: `${topicsImagesDir}/front-end.jpg`,
      },
      {
        name: 'WordPress',
        slug: 'wordpress',
        featuredImage: `${topicsImagesDir}/wordpress.jpg`,
      },
      {
        name: 'Dostępność',
        slug: 'dostepnosc',
        featuredImage: `${topicsImagesDir}/accessibility.jpg`,
      },
      {
        name: 'Narzędzia',
        slug: 'narzedzia',
        featuredImage: `${topicsImagesDir}/tools.jpg`,
      },
    ],
  },
  {
    groupName: 'Serie',
    topics: [
      {
        name: 'Własne bloki w WordPress Gutenberg',
        slug: 'wlasne-bloki-w-wordpress-gutenberg',
        featuredImage: `${topicsImagesDir}/gutenberg.jpg`,
      },
      {
        name: 'Jak stworzyć motyw WordPress',
        slug: 'jak-stworzyc-motyw-wordpress',
        featuredImage: `${topicsImagesDir}/wordpress-theme.jpg`,
      },
    ],
  },
  {
    groupName: 'Życie i praca',
    topics: [
      {
        name: 'Design',
        slug: 'design',
        featuredImage: `${topicsImagesDir}/design.jpg`,
      },
      {
        name: 'Praca',
        slug: 'praca',
        featuredImage: `${topicsImagesDir}/work.jpg`,
      },
      {
        name: 'Produktywność',
        slug: 'produktywnosc',
        featuredImage: `${topicsImagesDir}/productivity.jpg`,
      },
      {
        name: 'Nauka',
        slug: 'nauka',
        featuredImage: `${topicsImagesDir}/learning.jpg`,
      },
      {
        name: 'Przemyślenia',
        slug: 'przemyslenia',
        featuredImage: `${topicsImagesDir}/thoughts.jpg`,
      },
    ],
  },
  {
    groupName: 'Inne',
    topics: [
      {
        name: 'Inne',
        slug: 'inne',
        featuredImage: `${topicsImagesDir}/others.jpg`,
      },
    ],
  },
];

export default topicsGroups;
