import { getPostsBySearchQuery } from 'Helpers/content/posts';
import type { NextApiRequest, NextApiResponse } from 'next';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query;

  const results = await getPostsBySearchQuery(q as string);

  return res.status(200).json(JSON.stringify(results));
};

export default search;
