import typescript from 'rollup-plugin-typescript2';
import multiInput from 'rollup-plugin-multi-input';
import json from '@rollup/plugin-json';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import fs from 'fs-extra';
import path from 'path';
import postcssUrl from 'postcss-url';

const ASSETS_RX = /\.(png|jpe?g|gif|webp|svg|woff|woff2)$/;
const OUT_DIR = 'dist';
export default {
  input: [
    'src/components/**/*.ts',
    'src/components/**/*.tsx',
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
    typescript(),
    json(),
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
      ],
    }),
    postcss({
      extract: 'foundation.css',
      exclude: ['src/components/**/*.scss'],
      minimize: true,
      plugins: [autoprefixer()],
    }),
  ],
  external: ['react', 'react-dom'],
};
