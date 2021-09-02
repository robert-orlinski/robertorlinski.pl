import fs from 'fs';
import path from 'path';

import { prepareMDX } from './mdx';

const { readFile, readdir } = fs.promises;

export const getResourcePaths = async (searchedDirectory: string) => {
  const resources = await readdir(searchedDirectory);

  const resourcePaths = resources.map((slug) => ({ params: { slug } }));

  return resourcePaths;
};

const getResourceSourceBySlug = async (resourcePath: string) => {
  const resourceSourceBuffer = await readFile(resourcePath);
  const resourceSource = resourceSourceBuffer.toString();

  return resourceSource;
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

  return {
    content,
    metaData,
  };
};
