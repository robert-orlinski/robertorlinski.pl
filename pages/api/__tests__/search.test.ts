import type { NextApiRequest, NextApiResponse } from 'next';

import search from '../search';
import { getPostsBySearchQuery } from 'Helpers/content/posts';

jest.mock('Helpers/content/posts', () => ({ getPostsBySearchQuery: jest.fn() }));

const posts = [{ slug: 'dobre-praktyki-css', title: 'Dobre praktyki CSS' }];

const callSearch = async (query: NextApiRequest['query']) => {
  const json = jest.fn();
  const res = { status: jest.fn(() => ({ json })) } as unknown as NextApiResponse;

  await search({ query } as NextApiRequest, res);

  return { res, json };
};

beforeEach(() => {
  (getPostsBySearchQuery as jest.Mock).mockResolvedValue(posts);
});

it('responds with the matching posts as a JSON array', async () => {
  const { res, json } = await callSearch({ q: 'css' });

  expect(getPostsBySearchQuery).toHaveBeenCalledWith('css');
  expect(res.status).toHaveBeenCalledWith(200);
  expect(json).toHaveBeenCalledWith(posts);
});

it('treats a missing query as an empty one', async () => {
  await callSearch({});

  expect(getPostsBySearchQuery).toHaveBeenCalledWith('');
});
