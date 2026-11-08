import path from 'path';

import { bundleMDX } from 'mdx-bundler';
import rehypeMdxImportMedia from 'rehype-mdx-import-media';

import rehypePrism from '@mapbox/rehype-prism';
import { ResourceWithContent } from 'Types/content';

const prepareMDX = async (
  source: string,
  options: {
    resourcePath: string;
    imagesDirectory: string;
  },
): Promise<
  ResourceWithContent<{
    [key: string]: any;
  }>
> => {
  const { resourcePath, imagesDirectory } = options;

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: resourcePath,
    mdxOptions: (options) => ({
      ...options,
      rehypePlugins: [...(options.rehypePlugins ?? []), rehypeMdxImportMedia, rehypePrism],
    }),
    esbuildOptions: (options) => ({
      ...options,
      outdir: path.join(process.cwd(), 'public', imagesDirectory),
      platform: 'node',
      target: 'esnext',
      loader: {
        ...options.loader,
        '.png': 'file',
        '.jpg': 'file',
        '.gif': 'file',
      },
      publicPath: imagesDirectory,
      write: true,
    }),
    globals: {
      VideoInterlude: 'videoInterlude',
      CodePenIframe: 'codePenIframe',
      DistantButton: 'distantButton',
    },
  });

  return {
    content: code,
    metaData: frontmatter,
  };
};

export default prepareMDX;
