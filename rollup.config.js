import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import packageJson from './package.json'
import copy from 'rollup-plugin-copy'
import image from '@rollup/plugin-image'
import fs from "fs";
import path from "path";
import {exec} from "child_process";
import ignoreImport from 'rollup-plugin-ignore-import';
import babel from 'rollup-plugin-babel';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import pkg from './package.json';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];

console.log(external)

// create input config for rollup for each folder
const getInputOptions = (localPath = 'src', currentInputOptions = {}) => {
  return fs
      .readdirSync(path.join(__dirname, localPath))
      .reduce((initial, current) => {
        if (
            fs
                .statSync(path.join(__dirname, `${localPath}/${current}`))
                .isDirectory()
        ) {
          getInputOptions(`${localPath}/${current}`, initial);
        } else {
          const regexExecResult = /(.+?)(\.[^.]*$|$)/g.exec(current);
          const chunkName = `${localPath}/${regexExecResult[1]}`.replace(
              /^src\/?/g,
              ''
          );
          if (
              extensions.includes(regexExecResult[2])
              // !ignoreExtensions.some(
              //     (e) => regexExecResult[0].indexOf(e) >= 0
              // )
          ) {
            initial[chunkName] = `${localPath}/${current}`;
          }
        }
        return initial;
      }, currentInputOptions);
};


// custom plugin to generate declaration files
const dtsGenerator = function (options) {
  options = {
    declarationDir: 'dist',
    outDir: 'dts-temp',
    ...(options || {}),
  };
  return {
    buildEnd() {
      exec(
          `tsc -d --declarationDir ${options.declarationDir} --outDir ${options.outDir} --project ./tsconfig.json`,
          (err) => {
            if (err) {
              console.log(err);
              throw "Couldn't generate .d.ts files...";
            }
            exec(`rimraf ${options.outDir}`);
            console.log('Declaration files generated successfully');
          }
      );
    },
  };
};


const plugins = [
  json(),
  ignoreImport({
    extensions: ['.scss', '.css'],
  }),
  // resolve({ extensions }),
  babel({
    babelrc: true,
    extensions,
    runtimeHelpers: true,
  }),
  typescript({ useTsconfigDeclarationDir: true }),
  commonjs({ include: 'node_modules/**' }),
  copy({
    targets: [{ src: 'src/**/*.scss', dest: 'dist' }],
    flatten: false,
  }),

  peerDepsExternal(),
  resolve({ browser: true, preferBuiltins: true, mainFields: ['browser'] }),
  copy({
    targets: [
      // Need to copy the files over for usage
      { src: 'src/assets/fonts/icomoon', dest: 'dist/assets' },
      { src: 'src/assets/styles/tokens', dest: 'dist/styles' },
      { src: 'src/assets/styles/helpers', dest: 'dist/styles' }
    ]
  }),
  postcss({
    extensions: ['.css', 'scss']
  }),
  image()
];

export default [
  {
    input: getInputOptions(),
    output: {
      dir: 'dist',
      assetFileNames: '[name][extname]',
    },
    external,
    // plugins: [
    //   ...plugins,
    //   dtsGenerator(),
    //   generatePackageJson({
    //     inputFolder: '.',
    //     baseContents: (pkg) => ({
    //       name: pkg.name,
    //       version: pkg.version,
    //       description: pkg.description,
    //       main: './cjs/index.js',
    //       module: './index.js',
    //       author: pkg.author,
    //       license: pkg.license,
    //       repository: pkg.repository,
    //       peerDependencies: pkg.peerDependencies,
    //       sideEffects: false,
    //     }),
    //   }),
    // ],
  },
  {
    input: 'src/index.tsx',
    output: [
      { dir: 'dist/esm', format: 'esm' },
      { dir: 'dist/cjs', format: 'cjs' },
    ],
    external,
    plugins: [...plugins],
  },
]

//
// export default {
//   input: 'src/index.tsx',
//   output: [
//     {
//       file: packageJson.main,
//       format: 'cjs',
//       sourcemap: false
//     },
//     {
//       file: packageJson.module,
//       format: 'esm',
//       sourcemap: false
//     }
//   ],
//   plugins: [
//     json(),
//     peerDepsExternal(),
//     resolve({ browser: true, preferBuiltins: true, mainFields: ['browser'] }),
//     commonjs(),
//     typescript({ useTsconfigDeclarationDir: true }),
//     copy({
//       targets: [
//         // Need to copy the files over for usage
//         { src: 'src/assets/fonts/icomoon', dest: 'dist/assets' },
//         { src: 'src/assets/styles/tokens', dest: 'dist/styles' },
//         { src: 'src/assets/styles/helpers', dest: 'dist/styles' }
//       ]
//     }),
//     postcss({
//       extensions: ['.css', 'scss']
//     }),
//     external(),
//     image()
//   ],
//   external: ['react', 'react-dom']
// }
