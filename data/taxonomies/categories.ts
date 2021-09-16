import { ListedCategory } from 'Types/data';

import { images } from 'Images/categories';

export const categories: Array<ListedCategory> = [
  {
    name: 'Front-end',
    image: images.frontEnd,
  },
  {
    name: 'WordPress',
    image: images.wordpress,
  },
  {
    name: 'Własne bloki w WordPress Gutenberg',
    image: images.gutenberg,
  },
  {
    name: 'Dostępność',
    image: images.accesibility,
  },
  {
    name: 'Design',
    image: images.design,
  },
  {
    name: 'Narzędzia',
    image: images.tools,
  },
  {
    name: 'Praca',
    image: images.work,
  },
  {
    name: 'Produktywność',
    image: images.productivity,
  },
  {
    name: 'Nauka',
    image: images.learning,
  },
  {
    name: 'Przemyślenia',
    image: images.thoughts,
  },
  {
    name: 'Inne',
    image: images.others,
  },
];
