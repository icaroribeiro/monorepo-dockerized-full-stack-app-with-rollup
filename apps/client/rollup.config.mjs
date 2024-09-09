import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const isProduction = process.env.NODE_ENV === 'production'

dotenv.config({
  path: isProduction ? './.env.production' : './.env.development',
})

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.iife.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    babel({
      compact: false,
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx'],
    }),
    typescript(),
    commonjs(),
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.TEST_DISPLAY': JSON.stringify(process.env.TEST_DISPLAY),
    }),
    isProduction && terser(),
    !isProduction &&
      serve({
        open: true,
        verbose: true,
        contentBase: ['dist'],
        host: 'localhost',
        port: process.env.PORT,
      }) &&
      livereload({ watch: 'dist' }),
  ],
}
