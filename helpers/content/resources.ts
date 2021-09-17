import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import { polishPlurals } from 'polish-plurals';
import { prepareMDX } from './mdx';

import { Resource, ResourceWithContent } from 'Types/content';
import dayjs from 'dayjs';

const { readFile, readdir } = fs.promises;

export const getResourcePaths = async (resourcesDirectory: string) => {
  const resources = await readdir(resourcesDirectory);

  const resourcePaths = resources.map((slug) => ({ params: { slug } }));

  return resourcePaths;
};

export const getResources = async <T>(resourcesDirectory: string) => {
  const resourceSlugs = await readdir(resourcesDirectory);

  const resourcesToResolve = resourceSlugs.map(async (resourceSlug: string) => {
    const { metaData } = await getResourceBySlug<T & Resource>(resourcesDirectory, resourceSlug);

    return metaData;
  });

  const resources = await Promise.all(resourcesToResolve);

  return resources;
};

export const getResourcesByDateDescending = async <T>(resourcesDirectory: string) => {
  const resources = await getResources<T>(resourcesDirectory);

  const sortedResources = resources.sort((a, b) => {
    const firstDate = dayjs(a.date);
    const secondDate = dayjs(b.date);

    return firstDate.isBefore(secondDate) ? 1 : -1;
  });

  return sortedResources;
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

export const getResourceBySlug = async <T>(resourcesDirectory: string, resourceSlug: string) => {
  const resourcePath = path.join(resourcesDirectory, resourceSlug);
  const resourceMainFile = path.join(resourcePath, 'index.mdx');

  const source = await getResourceSourceBySlug(resourceMainFile);

  const imagesDirectory = `/images/posts/${resourceSlug}/`;

  const { content, metaData } = await prepareMDX(source, {
    resourcePath,
    imagesDirectory,
  });

  const readingTime = getResourceReadingTime(content);

  const resource: unknown = {
    content,
    metaData: {
      slug: resourceSlug,
      readingTime,
      ...metaData,
    },
  };

  return resource as ResourceWithContent<T>;
};
