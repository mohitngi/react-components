import type { StorybookConfig } from "@storybook/react-vite"
import { resolve } from 'path'

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: true,
    },
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        // Filter out node_modules except our own components
        const parent = prop.parent;
        if (!parent || !parent.fileName) return true;
        
        const isNodeModule = /[\\/]node_modules[\\/]/.test(parent.fileName);
        return !isNodeModule || parent.fileName.includes('node_modules/@your-scope/');
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = [
        {
          find: '@',
          replacement: resolve(__dirname, '../src'),
        },
      ]
    }
    return config
  },
}

export default config
