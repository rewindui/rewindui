import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { exec } from 'child_process';

import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import preserveDirectives from 'rollup-plugin-preserve-directives';

const outputOptions = {
  sourcemap: false,
  preserveModules: true,
  preserveModulesRoot: 'src',
};

const tscAlias = () => {
  return {
    name: 'tsAlias',
    writeBundle: () => {
      return new Promise((resolve, reject) => {
        exec('tsc-alias', function callback(error, stdout, stderr) {
          if (stderr || error) {
            reject(stderr || error);
          } else {
            resolve(stdout);
          }
        });
      });
    },
  };
};

// Custom plugin to conditionally apply the terser plugin
const conditionalTerser = (excludedPatterns, options) => ({
  name: 'conditional-terser',
  renderChunk(code, chunk) {
    if (excludedPatterns.some((pattern) => pattern.test(chunk.fileName))) {
      return { code, map: null }; // Skip minification
    }
    return terser().renderChunk.call(this, code, chunk, options);
  },
});

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].cjs',
        exports: 'auto',
        ...outputOptions,
      },
      {
        dir: 'dist',
        format: 'esm',
        ...outputOptions,
      },
    ],
    external: [
      'react',
      'react-dom',
      '@babel/runtime',
      '@floating-ui/react',
      '@floating-ui/react-dom',
      'tailwind-merge',
      'tslib',
      'react-focus-lock',
      'class-variance-authority',
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/stories/**', '**/tests/**', './styles.css'],
      }),
      typescriptPaths(),
      preserveDirectives(),
      conditionalTerser([/theme\/styles\/.*.styles.js/], { compress: { directives: false } }),
      copy({
        targets: [{ src: './../../README.md', dest: 'dist' }],
      }),
      tscAlias(),
    ],
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning);
      }
    },
  },
];

export default config;
