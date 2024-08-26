import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import dotenv from 'rollup-plugin-dotenv'
import run from '@rollup/plugin-run'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.mjs',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
    json(),
    commonjs(),
    nodeResolve({
      extensions: ['.js', '.json'],
    }),
    dotenv({ cwd: './env_files' }),
    isProduction && terser(),
    !isProduction && run(),
  ],
}
