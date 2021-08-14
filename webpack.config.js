const path = require('path');

module.exports = {
  resolve: {
    alias: {
      Types: path.resolve(__dirname, 'types/'),
      Data: path.resolve(__dirname, 'data/'),
      Images: path.resolve(__dirname, 'public/images/'),
      Devices$: path.resolve(__dirname, 'helpers/styles/devices.ts'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
    },
  },
};
