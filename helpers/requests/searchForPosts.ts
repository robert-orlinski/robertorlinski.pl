import { Posts } from 'Types/content';

export const searchForPosts = async (query: string): Promise<Posts> => {
  const response = await fetch(`/api/search?q=${query}`, { method: 'GET' });
  const queriedPosts = await response.json();

  return queriedPosts;
};
