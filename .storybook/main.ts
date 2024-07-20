import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "node:path"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        sass: {
          implementation: require('sass')
        }
      }
    },
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": path.resolve(__dirname, '../src/')
      }
    },
  }),
  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
