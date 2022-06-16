import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import fs from 'fs-extra';
import path from 'path';
import postcssUrl from 'postcss-url';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import cleanup from 'rollup-plugin-cleanup';
import { terser } from 'rollup-plugin-terser';
import flexFixes from 'postcss-flexbugs-fixes';
import sorting from 'postcss-sorting';
import PeerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import cssConfig from './css.config.json';

const ASSETS_RX = /\.(png|jpe?g|gif|webp|svg|woff|woff2)$/;
const OUT_DIR = 'dist';
const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      PeerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      svgr(),
      url(),
      postcss({ extract: false }),
      terser(),
      eslint({
        filterExclude: [
          'node_modules/**',
          'src/components/**/*.scss',
          'src/assets/styles/style.scss',
        ],
        fix: true,
      }),
      cleanup(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: `${OUT_DIR}/bonuz.css`,
        format: 'esm',
        entryFileNames: '[name].scss',
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationDir: null,
      }),
      svgr(),
      postcss({
        extract: true,
        minimize: true,
        plugins: [
          autoprefixer(),
          postcssUrl({
            url: (asset) => {
              if (!ASSETS_RX.test(asset.url)) return asset.url;
              const filename = asset.absolutePath
                .split('\\')
                .pop()
                .split('/')
                .pop();
              const file = fs.readFileSync(asset.absolutePath);

              fs.ensureDirSync(path.join(`${OUT_DIR}`, 'assets'));
              const filePath = `assets/${filename}`;

              fs.writeFileSync(path.join(`${OUT_DIR}`, filePath), file);

              return filePath;
            },
          }),
          flexFixes(),
          sorting(cssConfig),
        ],
      }),
    ],
  },
  {
    input: 'src/assets/styles/style.scss',
    output: [
      {
        file: `${OUT_DIR}/foundation.css`,
        format: 'esm',
      },
    ],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        plugins: [autoprefixer(), flexFixes(), sorting(cssConfig)],
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.scss$/],
  },
];
