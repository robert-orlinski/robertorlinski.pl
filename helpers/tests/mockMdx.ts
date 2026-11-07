import fs from 'fs';

const mockMdx = (): void => {
  jest
    .spyOn(require('../content/mdx'), 'default')
    .mockImplementation((source, { resourcePath }: any) => {
      const dirForFeaturedImage = resourcePath.replace('__mocks__', 'public/images');

      fs.mkdirSync(dirForFeaturedImage, { recursive: true });

      const mockedResourceContent = fs.readFileSync(`${resourcePath}/index.json`, 'utf8');

      return JSON.parse(mockedResourceContent);
    });
};

export default mockMdx;
