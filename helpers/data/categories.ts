import slugify from 'slugify';

import { Category } from 'Types/data';

export const getCategoryLink = (category: Category) => slugify(`/kategorie/${category}`);
