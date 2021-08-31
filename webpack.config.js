const path = require('path');

module.exports = {
  resolve: {
    alias: {
      Types: path.resolve(__dirname, 'types/'),
      Data: path.resolve(__dirname, 'data/'),
      Images: path.resolve(__dirname, 'public/images/'),
      DataHelpers: path.resolve(__dirname, 'helpers/data/'),
      ContentHelpers: path.resolve(__dirname, 'helpers/content/'),
      Devices$: path.resolve(__dirname, 'helpers/devices.ts'),
      Constants$: path.resolve(__dirname, 'helpers/constants.ts'),
      SiteName$: path.resolve(__dirname, 'helpers/metaData/siteName.ts'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
    },
  },
};