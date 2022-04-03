import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import prepareMDX from './mdx';

import { polishPlurals } from 'polish-plurals';

import { Resource, ResourceWithContent } from 'Types/content';

dayjs.extend(customParseFormat);

const { readFile, readdir } = fs.promises;

export const filterPublishedResources = <T>(resources: Resource[] & T): Resource[] =>
  resources.filter(({ isPublished }) => isPublished);

export const getResources = async (
  resourcesDirectory: string,
  pluralResourceType: string,
): Promise<Resource[]> => {
  const resourceSlugs = await readdir(resourcesDirectory);

  const resourcesToResolve = resourceSlugs.map(async (resourceSlug: string) => {
    const { metaData } = await getResourceBySlug(
      resourcesDirectory,
      resourceSlug,
      pluralResourceType,
    );

    return metaData;
  });

  const resources = await Promise.all(resourcesToResolve);

  return resources;
};

export const getResourcesByDateDescending = async (
  resourcesDirectory: string,
  pluralResourceType: string,
): Promise<Resource[]> => {
  const resources = await getResources(resourcesDirectory, pluralResourceType);

  const publishedResources = filterPublishedResources(resources);

  const sortedResources = publishedResources.sort((a, b) => {
    const firstDate = dayjs(a.date, 'DD.MM.YYYY');
    const secondDate = dayjs(b.date, 'DD.MM.YYYY');

    return firstDate.isBefore(secondDate) ? 1 : -1;
  });

  return sortedResources;
};

const getResourceSourceBySlug = async (resourcePath: string): Promise<string> => {
  const resourceSourceBuffer = await readFile(resourcePath);
  const resourceSource = resourceSourceBuffer.toString();

  return resourceSource;
};

const getResourceReadingTime = (content: string): string => {
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

export const getResourceBySlug = async (
  resourcesDirectory: string,
  resourceSlug: string,
  pluralResourceType: string,
): Promise<ResourceWithContent<Resource>> => {
  const resourcePath = path.join(resourcesDirectory, resourceSlug);
  const resourceMainFile = path.join(resourcePath, 'index.mdx');

  const source = await getResourceSourceBySlug(resourceMainFile);

  const imagesDirectory = `/images/${pluralResourceType}/${resourceSlug}/`;

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

  return resource as ResourceWithContent<Resource>;
};
