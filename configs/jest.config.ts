import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*'],
  coverageDirectory: '<rootDir>/__coverage__',
  displayName: 'Influencer Compare',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  prettierPath: '<rootDir>/node_modules/prettier',
  rootDir: '../',
  roots: ['<rootDir>/src/__tests__'],
  testRegex: '^.*test\\.(ts|tsx)$',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};
export default config;
