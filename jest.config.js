module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/files.js',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  setupFilesAfterEnv: ['<rootDir>/helpers/tests/setup.ts'],
  moduleNameMapper: {
    Devices: '<rootDir>/helpers/devices.ts',
    SiteName: '<rootDir>/helpers/metaData/siteName.ts',
    SiteUrl: '<rootDir>/helpers/metaData/siteUrl.ts',
    AddressSeparator: '<rootDir>/helpers/metaData/addressSeparator.ts',
    Slogan: '<rootDir>/helpers/metaData/slogan.ts',
    '^Components/(.*)$': '<rootDir>/components/$1',
    '^Types/(.*)$': '<rootDir>/types/$1',
    '^Data/(.*)$': '<rootDir>/data/$1',
    '^Images/(.*)$': '<rootDir>/public/images/$1',
    '^Helpers/(.*)$': '<rootDir>/helpers/$1',
    '^Hooks/(.*)$': '<rootDir>/hooks/$1',
    '^Cache/(.*)$': '<rootDir>/cache/$1',
  },
};
