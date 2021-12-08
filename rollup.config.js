import typescript from 'rollup-plugin-typescript';
import multiInput from 'rollup-plugin-multi-input';
import json from '@rollup/plugin-json';
import scss from 'rollup-plugin-scss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { writeFileSync } from 'fs';

export default {
  input: ['src/components/atoms/index.ts', 'src/components/molecules/index.ts'],
  output: {
    dir: 'dist',
    format: 'cjs',
    exports: 'named',
    sourcemap: false,
    strict: false,
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    multiInput(),
    typescript(),
    json(),
    scss({
      output: (styles) => {
        writeFileSync('./public/styles/bundle.css', styles);
      },
      outputStyle: 'compressed',
    }),
  ],
};
