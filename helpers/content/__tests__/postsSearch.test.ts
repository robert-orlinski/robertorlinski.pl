import { getPostsBySearchQuery } from '../posts';

jest.mock('Cache/posts.json', () => [
  { slug: 'dobre-praktyki-css', title: 'Dobre praktyki CSS' },
  { slug: 'wtyczki-do-vs-code', title: 'Wtyczki do VS Code' },
  { slug: 'wystapilem', title: 'Wystąpiłem na meet-upie' },
]);

jest.mock('Helpers/content/resources', () => ({
  getResourcesByDateDescending: jest.fn(() => {
    throw new Error('the content pipeline must not run in production');
  }),
  getResourceBySlug: jest.fn(),
}));

describe('in production', () => {
  beforeEach(() => {
    jest.replaceProperty(process.env, 'NODE_ENV', 'production');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('searches the posts cache without running the content pipeline', async () => {
    const results = await getPostsBySearchQuery('css');

    expect(results.map(({ slug }) => slug)).toEqual(['dobre-praktyki-css']);
  });

  it('matches case-insensitively', async () => {
    const results = await getPostsBySearchQuery('VS CODE');

    expect(results.map(({ slug }) => slug)).toEqual(['wtyczki-do-vs-code']);
  });

  it('ignores Polish diacritics in both the title and the query', async () => {
    expect((await getPostsBySearchQuery('wystapilem')).map(({ slug }) => slug)).toEqual([
      'wystapilem',
    ]);
    expect((await getPostsBySearchQuery('WYSTĄPIŁEM')).map(({ slug }) => slug)).toEqual([
      'wystapilem',
    ]);
  });

  it('requires every word of the query to be in the title, in any order', async () => {
    expect((await getPostsBySearchQuery('code vs')).map(({ slug }) => slug)).toEqual([
      'wtyczki-do-vs-code',
    ]);
    expect(await getPostsBySearchQuery('vs meetup')).toEqual([]);
  });
});
