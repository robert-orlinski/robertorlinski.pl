import searchForPosts from '../searchForPosts';

const posts = [{ slug: 'dobre-praktyki-css', title: 'Dobre praktyki CSS' }];

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => posts });
});

it('returns the posts from the search API', async () => {
  await expect(searchForPosts('css')).resolves.toEqual(posts);
});

it('encodes the query', async () => {
  await searchForPosts('c# & ć');

  expect(global.fetch).toHaveBeenCalledWith('/api/search?q=c%23%20%26%20%C4%87', { method: 'GET' });
});

it('throws when the API responds with an error status', async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 500 });

  await expect(searchForPosts('css')).rejects.toThrow('status 500');
});
