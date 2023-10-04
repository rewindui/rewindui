import { dirname, join } from 'path';
const path = require('path');
module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      esbuild: {
        logOverride: {
          'this-is-undefined-in-esm': 'silent',
        },
      },
      define: {
        'process.env': {},
      },
      resolve: {
        alias: [
          {
            find: '@idb-dab/ui-core',
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
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
