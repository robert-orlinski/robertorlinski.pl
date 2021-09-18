const path = require('path');

module.exports = {
  resolve: {
    alias: {
      Devices$: path.resolve(__dirname, 'helpers/devices.ts'),
      Patterns$: path.resolve(__dirname, 'helpers/patterns.ts'),
      SiteName$: path.resolve(__dirname, 'helpers/metaData/siteName.ts'),
      AddressSeparator$: path.resolve(__dirname, 'helpers/metaData/addressSeparator.ts'),
      Components: path.resolve(__dirname, 'components/'),
      Types: path.resolve(__dirname, 'types/'),
      Data: path.resolve(__dirname, 'data/'),
      Images: path.resolve(__dirname, 'public/images/'),
      DataHelpers: path.resolve(__dirname, 'helpers/data/'),
      Helpers: path.resolve(__dirname, 'helpers/'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
    },
  },
};
