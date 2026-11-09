import { getPostsBySearchQuery } from '../posts';

jest.mock('Cache/posts.json', () => [
  { slug: 'dobre-praktyki-css', title: 'Dobre praktyki CSS' },
  { slug: 'wtyczki-do-vs-code', title: 'Wtyczki do VS Code' },
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
});
