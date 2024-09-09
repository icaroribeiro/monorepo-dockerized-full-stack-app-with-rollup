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
  ],
  plugins: [
    typescript(),
    json(),
    commonjs(),
    nodeResolve({
      extensions: ['.js', '.json'],
    }),
    copy({
      targets: [
        {
          src: [
            './node_modules/swagger-ui-dist/swagger-ui.css',
            './node_modules/swagger-ui-dist/favicon-16x16.png',
            './node_modules/swagger-ui-dist/favicon-32x32.png',
            './node_modules/swagger-ui-dist/swagger-ui-bundle.js',
            './node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js',
          ],
          dest: 'dist',
        },
      ],
    }),
    isProduction && terser(),
    !isProduction && run(),
  ],
}
