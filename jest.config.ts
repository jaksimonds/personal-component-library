import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.tsx',
    '!./src/**/*.stories.tsx'
  ],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  testEnvironment: "jsdom",
};

export default config;
