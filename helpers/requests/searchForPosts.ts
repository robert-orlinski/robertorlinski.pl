import { Post } from 'Types/content';

const searchForPosts = async (query: string): Promise<Post[]> => {
  const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, { method: 'GET' });

  if (!response.ok) {
    throw new Error(`Search request failed with status ${response.status}`);
  }

  return response.json();
};

export default searchForPosts;
