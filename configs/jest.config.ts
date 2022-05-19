import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*'],
  coverageDirectory: '<rootDir>/__coverage__',
  displayName: 'Influencer Compare',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'css'],
  prettierPath: '<rootDir>/node_modules/prettier',
  rootDir: '../',
  roots: ['<rootDir>/src/__tests__', '<rootDir>/src/__mocks__'],
  testRegex: '^.*test\\.(ts|tsx)$',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMocks.ts',
  },
  verbose: true,
};
export default config;
