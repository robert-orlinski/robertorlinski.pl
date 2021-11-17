import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import prepareMDX from './mdx';

import { polishPlurals } from 'polish-plurals';
import { FEATURED_IMAGE_NAME } from '../constants';

import { Resource, ResourceWithContent } from 'Types/content';

dayjs.extend(customParseFormat);

const { readFile, readdir, copyFile } = fs.promises;

export const getResourcePaths = async (resourcesDirectory: string) => {
  const resources = await readdir(resourcesDirectory);

  const resourcePaths = resources.map((slug) => ({ params: { slug } }));

  return resourcePaths;
};

export const getResources = async <T>(resourcesDirectory: string, imagesFolderName: string) => {
  const resourceSlugs = await readdir(resourcesDirectory);

  const resourcesToResolve = resourceSlugs.map(async (resourceSlug: string) => {
    const { metaData } = await getResourceBySlug<T & Resource>(
      resourcesDirectory,
      resourceSlug,
      imagesFolderName,
    );

    return metaData;
  });

  const resources = await Promise.all(resourcesToResolve);

  return resources;
};

export const getResourcesByDateDescending = async <T>(
  resourcesDirectory: string,
  imagesFolderName: string,
) => {
  const resources = await getResources<T>(resourcesDirectory, imagesFolderName);

  const sortedResources = resources.sort((a, b) => {
    const firstDate = dayjs(a.date, 'DD.MM.YYYY');
    const secondDate = dayjs(b.date, 'DD.MM.YYYY');

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

export const getResourceBySlug = async <T>(
  resourcesDirectory: string,
  resourceSlug: string,
  imagesFolderName: string,
) => {
  const resourcePath = path.join(resourcesDirectory, resourceSlug);
  const resourceMainFile = path.join(resourcePath, 'index.mdx');

  const source = await getResourceSourceBySlug(resourceMainFile);

  const imagesDirectory = `/images/${imagesFolderName}/${resourceSlug}/`;

  const { content, metaData } = await prepareMDX(source, {
    resourcePath,
    imagesDirectory,
  });

  const readingTime = getResourceReadingTime(content);

  const featuredImageToCopy = path.join(resourcePath, FEATURED_IMAGE_NAME);
  const copiedFeaturedImage = path.join(
    process.cwd(),
    'public',
    imagesDirectory,
    FEATURED_IMAGE_NAME,
  );

  await copyFile(featuredImageToCopy, copiedFeaturedImage);

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
