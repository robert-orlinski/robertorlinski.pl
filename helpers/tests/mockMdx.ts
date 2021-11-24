import fs from 'fs';

const mockMdx = () => {
  jest
    .spyOn(require('../content/mdx'), 'default')
    .mockImplementation((source, { resourcePath }: any) => {
      const dirForFeaturedImage = resourcePath.replace('__mocks__', 'public/images');

      fs.access(dirForFeaturedImage, function (err) {
        if (err && err.code === 'ENOENT') {
          fs.mkdirSync(dirForFeaturedImage);
        }
      });

      const mockedResourceContent = fs.readFileSync(`${resourcePath}/index.json`, 'utf8');

      return JSON.parse(mockedResourceContent);
    });
};

export default mockMdx;
