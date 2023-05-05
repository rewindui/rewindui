import { exec } from 'child_process';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

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

export default [
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
      terser(),
      tscAlias(),
    ],
  },
];
