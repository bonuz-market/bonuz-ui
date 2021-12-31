import typescript from 'rollup-plugin-typescript2';
import multiInput from 'rollup-plugin-multi-input';
import json from '@rollup/plugin-json';
import scss from 'rollup-plugin-scss';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import fs from 'fs-extra';
import path from 'path';
import postcssUrl from 'postcss-url';

const ASSETS_RX = /\.(png|jpe?g|gif|webp|svg|woff|woff2)$/;
const OUT_DIR = 'dist';
export default {
  input: ['src/components/**/*.ts', 'src/components/**/*.tsx'],
  output: {
    dir: 'dist',
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
    scss({
      processor: () =>
        postcss({
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
          extract: true,
        }),
      output: (styles) => {
        fs.writeFileSync(`./${OUT_DIR}/styles.css`, styles);
      },
      prefix: `@import "src/assets/styles/style.scss";`,
      outputStyle: 'compressed',
    }),
  ],
  external: ['react', 'react-dom'],
};
