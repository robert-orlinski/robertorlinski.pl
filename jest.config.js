const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

module.exports = createJestConfig({
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/helpers/tests/setup.ts'],
  moduleNameMapper: {
    Devices: '<rootDir>/helpers/devices.ts',
    BlogAuthor: '<rootDir>/helpers/metaData/blogAuthor.ts',
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
});
