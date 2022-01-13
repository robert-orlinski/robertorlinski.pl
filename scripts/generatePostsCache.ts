import { resolve } from 'path';
import { existsSync, mkdirSync, writeFile } from 'fs';
import { getPosts } from 'Helpers/content/posts';

const generatePostsCache = async (): Promise<void> => {
  const cacheDir = resolve(__dirname, '../cache');

  const postsToCache = await getPosts();
  const cacheFileContents = JSON.stringify(postsToCache);

  if (!existsSync(cacheDir)) mkdirSync(cacheDir);

  writeFile(`${cacheDir}/posts.json`, cacheFileContents, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Posts cached.');
    }
  });
};

export default generatePostsCache;
