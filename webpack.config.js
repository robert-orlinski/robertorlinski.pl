import projectSettings from 'package.json';

module.exports = {
  resolve: {
    alias: projectSettings._moduleAliases,
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
    },
  },
};
