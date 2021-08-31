import fs from 'fs';
import path from 'path';

import { DATE_PATTERN } from 'Constants';
import { prepareMDX } from './mdx';

const { readFile, readdir } = fs.promises;

export const getResourcePaths = async (searchedPath: string) => {
  const resources = await readdir(searchedPath);

  const resourcePaths = resources
    .map((path) => path.replace(DATE_PATTERN, ''))
    .map((slug) => ({ params: { slug } }));

  return resourcePaths;
};

const getResourceSourceBySlug = async (resourcePath: string) => {
  const resourceSourceBuffer = await readFile(resourcePath);
  const resourceSource = resourceSourceBuffer.toString();

  return resourceSource;
};

export const getResourceBySlug = async (resourcesPath: string, resourceSlug: string) => {
  const resourceDirectory = path.join(resourcesPath, resourceSlug);
  const resourceFile = path.join(resourceDirectory, 'index.mdx');

  const source = await getResourceSourceBySlug(resourceFile);

  const { content, metaData } = await prepareMDX(source, {
    resourceDirectory,
  });

  return {
    content,
    metaData,
  };
};
