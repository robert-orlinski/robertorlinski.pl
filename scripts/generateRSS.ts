import { resolve } from 'path';
import { writeFile } from 'fs';

import RSS from 'rss';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { getPosts } from 'Helpers/content/posts';

import siteTitle from 'SiteTitle';
import siteUrl from 'SiteUrl';
import blogAuthor from 'BlogAuthor';

dayjs.extend(customParseFormat);

const generateRSS = async (): Promise<void> => {
  const targetDir = resolve(__dirname, '../public');

  const posts = await getPosts();

  const feed = new RSS({
    title: siteTitle,
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    language: 'pl',
    copyright: `${new Date().getFullYear()} ${blogAuthor}`,
    webMaster: blogAuthor,
    managingEditor: blogAuthor,
  });

  posts.map(({ slug, title, abstract, date, topics }) => {
    feed.item({
      title: title,
      description: abstract,
      url: `${siteUrl}/${slug}`,
      guid: slug,
      categories: [...topics],
      author: blogAuthor,
      date: new Date(dayjs(date, 'DD.MM.YYYY').format()),
    });
  });

  const rssCode = feed.xml({
    indent: true,
  });

  writeFile(`${targetDir}/rss.xml`, rssCode, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('RSS generated.');
    }
  });
};

export default generateRSS;
