import type { StorybookConfig } from "@storybook/react-webpack5";
import { Paths } from "../build/types/config";
import path from "path";
import { buildSaasLoader } from "../build/loaders/buildScssLoader";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    const paths: Paths = {
      html: '',
      entry: '',
      build: '',
      src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.tsx', '.ts')

    config.module?.rules?.push(buildSaasLoader('development'))

    return config
  }
};
export default config;
