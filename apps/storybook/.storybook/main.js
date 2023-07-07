const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
      },
      resolve: {
        alias: [
          {
            find: '@rewind-ui/core',
            replacement: path.resolve(__dirname, '../../../packages/core/'),
          },
        ],
      },
    };
  },
};
