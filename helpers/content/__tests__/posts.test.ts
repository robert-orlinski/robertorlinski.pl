import dayjs from 'dayjs';

import {
  getPosts,
  getPostsByDateDescending,
  getPostBySlug,
  getRelatedPosts,
  getPostsByTopic,
} from '../posts';

import mockMdx from 'Helpers/tests/mockMdx';

mockMdx();

jest.mock('Helpers/constants', () => {
  const originalModule = jest.requireActual('Helpers/constants') as any;
  const mockedPath = originalModule.POSTS_PATH.replace('content', '__mocks__');

  return {
    ...originalModule,
    POSTS_PATH: mockedPath,
  };
});

describe('sorting posts', () => {
  it('sorts posts by date', async () => {
    const posts = await getPosts();

    const sortedPosts = posts.sort((a, b) => {
      const firstDate = dayjs(a.date, 'DD.MM.YYYY');
      const secondDate = dayjs(b.date, 'DD.MM.YYYY');

      return firstDate.isBefore(secondDate) ? 1 : -1;
    });

    expect(sortedPosts).toEqual(posts);
  });

  it('sorts posts by date and uses sorting function', async () => {
    const posts = await getPosts();
    const sortedPosts = await getPostsByDateDescending();

    expect(sortedPosts).toEqual(posts);
  });
});

describe('retrieving posts list', () => {
  it('returns 4 posts from folder which contains 5 posts but 4 are published', async () => {
    const posts = await getPosts();

    expect(posts).toHaveLength(4);
  });

  it('returns posts in given topic', async () => {
    const posts = await getPostsByTopic('front-end');

    expect(posts).toHaveLength(3);

    posts.forEach((post) => {
      expect(post.topics).toContain('Front-end');
    });
  });

  it('contains "metodologia-bem" post\'s title', async () => {
    const posts = await getPosts();
    const postTitles = posts.map(({ title }) => title);

    expect(postTitles).toContain('Metodologia BEM - wszystko, co trzeba o niej wiedzieć');
  });
});

describe('single post', () => {
  it('returns post by its slug', async () => {
    const post = await getPostBySlug('with-code');

    expect(post).toBeDefined();
  });

  it('returns post that contains proper title', async () => {
    const post = await getPostBySlug('with-code');

    expect(post.metaData.title).toContain(
      '13 dobrych praktyk, które sprawią, że Twój kod CSS stanie się lepszy!',
    );
  });

  it('returns post that contains proper content', async () => {
    const post = await getPostBySlug('with-code');

    expect(post.content).toContain('Korzystanie z dobrych praktyk ma szereg zalet.');
  });
});

describe('related posts', () => {
  it('returns 3 related posts', async () => {
    const relatedPosts = await getRelatedPosts('with-code', 'Front-end', 3);

    expect(relatedPosts).toHaveLength(3);
  });

  it('not return current post', async () => {
    const relatedPosts = await getRelatedPosts('with-code', 'Front-end', 3);

    relatedPosts.forEach(({ slug }) => {
      expect(slug).not.toEqual('with-code');
    });
  });

  it('returns 2 posts from current topic', async () => {
    const relatedPosts = await getRelatedPosts('with-code', 'Front-end', 3);

    const relatedPostsFromCurrentTopic = relatedPosts.filter(({ topics }) =>
      topics.includes('Front-end'),
    );

    expect(relatedPostsFromCurrentTopic.length).toEqual(2);
  });

  it('returns 1 post from different than current topic (assuming that there are 2 posts in current topic and 3 are needed)', async () => {
    const relatedPosts = await getRelatedPosts('with-code', 'Front-end', 3);

    const postsTopics = relatedPosts.map(({ topics }) => topics).flat();

    expect(postsTopics[2]).toContain('Praca');
  });
});
