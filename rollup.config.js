import typescript from 'rollup-plugin-typescript2';
import multiInput from 'rollup-plugin-multi-input';
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
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';
import flexFixes from 'postcss-flexbugs-fixes';
import sorting from 'postcss-sorting';
import cssConfig from './css.config.ts';

const ASSETS_RX = /\.(png|jpe?g|gif|webp|svg|woff|woff2)$/;
const OUT_DIR = 'dist';

export default {
  input: [
    'src/components/**/*.ts',
    'src/components/**/*.[^stories.]tsx',
    'src/assets/styles/style.scss',
  ],
  output: {
    dir: OUT_DIR,
    format: 'cjs',
    exports: 'named',
    sourcemap: false,
    strict: false,
  },
  plugins: [
    multiInput(),
    commonjs(),
    typescript(),
    svgr(),
    url(),
    postcss({
      extract: 'bonuz.css',
      exclude: 'src/assets/styles/style.scss',
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

            fs.ensureDirSync(path.join(OUT_DIR, 'assets'));
            const filePath = `assets/${filename}`;

            fs.writeFileSync(path.join(OUT_DIR, filePath), file);

            return filePath;
          },
        }),
        flexFixes(),
        sorting(cssConfig),
      ],
    }),
    postcss({
      extract: 'foundation.css',
      exclude: ['src/components/**/*.scss'],
      minimize: true,
      plugins: [autoprefixer(), flexFixes(), sorting(cssConfig)],
    }),
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
    analyze(),
  ],
  external: ['react', 'react-dom'],
};
