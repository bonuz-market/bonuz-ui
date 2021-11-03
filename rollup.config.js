import typescript from 'rollup-plugin-typescript2';
import multiInput from 'rollup-plugin-multi-input';
import json from '@rollup/plugin-json';
import css from 'rollup-plugin-import-css';

export default {
  input: ['src/components/**/*.ts', 'src/components/**/*.tsx'],
  output: {
    dir: 'dist',
    format: 'cjs',
    exports: 'named',
    sourcemap: false,
    strict: false,
  },
  plugins: [multiInput(), typescript(), json(), css()],
  external: ['react', 'react-dom'],
};
