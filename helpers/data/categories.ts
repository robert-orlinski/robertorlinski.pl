import slugify from 'slugify';

import { Category } from 'Types/data';

export const getCategoryLink = (category: Category) => {
  const slugifiedCategory = slugify(category, {
    lower: true,
  });

  return `/kategorie/${slugifiedCategory}`;
};
