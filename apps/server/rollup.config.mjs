import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import run from '@rollup/plugin-run'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import dotenv from 'dotenv'
import copy from 'rollup-plugin-copy'

const isProduction = process.env.NODE_ENV === 'production'

dotenv.config({
  path: isProduction ? './.env.production' : './.env.development',
})

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    // {
    //   file: 'dist/bundle.esm.mjs',
    //   format: 'esm',
    //   sourcemap: true,
    // },
  ],
  plugins: [
    typescript(),
    json(),
    commonjs(),
    nodeResolve({
      extensions: ['.js', '.json'],
    }),
    // copy({
    //   targets: [
    //     {
    //       // src: './node_modules/swagger-ui-dist/swagger-ui-bundle.js',
    //       // dest: 'dist/swagger-ui-bundle.js',
    //       // src: './node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js',
    //       // dest: 'dist/swagger-ui-standalone-preset.js',
    //       // src: './node_modules/swagger-ui-dist/swagger-ui.css',
    //       // dest: 'dist/swagger-ui.css',
    //     },
    //   ],
    // }),
    isProduction && terser(),
    !isProduction && run(),
  ],
}
