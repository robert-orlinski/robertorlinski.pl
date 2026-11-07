import { getPostsBySearchQuery } from 'Helpers/content/posts';

import type { NextApiRequest, NextApiResponse } from 'next';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query;
  const query = typeof q === 'string' ? q : '';

  const results = await getPostsBySearchQuery(query);

  return res.status(200).json(results);
};

export default search;
