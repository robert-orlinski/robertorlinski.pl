import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';

import { polishPlurals } from 'polish-plurals';

import { prepareMDX } from './mdx';

const { readFile, readdir } = fs.promises;

export const getResourcePaths = async (resourcesDirectory: string) => {
  const resources = await readdir(resourcesDirectory);

  const resourcePaths = resources.map((slug) => ({ params: { slug } }));

  return resourcePaths;
};

export const getAllResources = async (resourcesDirectory: string) => {
  const resourceSlugs = await readdir(resourcesDirectory);

  const allResourcesToResolve = resourceSlugs.map(async (resourceSlug: string) => {
    const { metaData } = await getResourceBySlug(resourcesDirectory, resourceSlug);

    return metaData;
  });

  const allResources = await Promise.all(allResourcesToResolve);

  return allResources;
};

export const getResourceBySlug = async (resourcesDirectory: string, resourceSlug: string) => {
  const resourcePath = path.join(resourcesDirectory, resourceSlug);
  const resourceMainFile = path.join(resourcePath, 'index.mdx');

  const source = await getResourceSourceBySlug(resourceMainFile);

  const imagesDirectory = `/images/posts/${resourceSlug}/`;

  const { content, metaData } = await prepareMDX(source, {
    resourcePath,
    imagesDirectory,
  });

  const readingTime = getResourceReadingTime(content);

  return {
    content,
    metaData: {
      slug: resourceSlug,
      readingTime,
      ...metaData,
    },
  };
};

const getResourceSourceBySlug = async (resourcePath: string) => {
  const resourceSourceBuffer = await readFile(resourcePath);
  const resourceSource = resourceSourceBuffer.toString();

  return resourceSource;
};

const getResourceReadingTime = (content: string) => {
  const contentReadingTime = readingTime(content).minutes;
  const roundedReadingTime = Math.round(contentReadingTime);
  const readingTimePlural = polishPlurals(
    'minuta czytania',
    'minuty czytania',
    'minut czytania',
    roundedReadingTime,
  );

  const formattedReadingTime = `${roundedReadingTime} ${readingTimePlural}`;

  return formattedReadingTime;
};
