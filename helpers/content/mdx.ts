import path from 'path';

import { bundleMDX } from 'mdx-bundler';
import { remarkMdxImages } from 'remark-mdx-images';

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
      remarkPlugins: [...(options.remarkPlugins ?? []), remarkMdxImages],
      rehypePlugins: [...(options.rehypePlugins ?? []), rehypePrism],
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
      NewsletterInterlude: 'newsletterInterlude',
      VideoInterlude: 'videoInterlude',
      CodePenIframe: 'codePenIframe',
    },
  });

  return {
    content: code,
    metaData: frontmatter,
  };
};

export default prepareMDX;
