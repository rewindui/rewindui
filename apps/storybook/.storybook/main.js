const path = require('path');
module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: {
        'process.env': {},
      },
      esbuild: {
        logOverride: {
          'this-is-undefined-in-esm': 'silent',
        },
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
  docs: {
    autodocs: true,
  },
};
