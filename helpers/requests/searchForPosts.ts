import { Post } from 'Types/content';

const searchForPosts = async (query: string): Promise<Post[]> => {
  const response = await fetch(`/api/search?q=${query}`, { method: 'GET' });

  const queriedPosts = await response.json();

  return queriedPosts;
};

export default searchForPosts;
