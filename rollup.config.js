import typescript from 'rollup-plugin-typescript2';
import multiInput from 'rollup-plugin-multi-input';
import json from '@rollup/plugin-json';
import scss from 'rollup-plugin-scss';
import { writeFileSync } from 'fs';

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
    scss({
      output: (styles) => {
        writeFileSync('./public/styles/bundle.css', styles);
      },
      outputStyle: 'compressed',
    }),
  ],
  external: ['react', 'react-dom'],
};
