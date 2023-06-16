import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import packageJson from './package.json'
import external from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    json(),
    peerDepsExternal(),
    resolve({ browser: true, preferBuiltins: true, mainFields: ['browser'] }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    copy({
      targets: [
        // Need to copy the files over for usage
        { src: 'src/assets/fonts/icomoon', dest: 'dist/assets' },
        { src: 'src/assets/styles/tokens', dest: 'dist/tokens' }
      ]
    }),
    postcss({
      extensions: ['.css', 'scss']
    }),
    external()
  ],
  external: ['react', 'react-dom']
}
