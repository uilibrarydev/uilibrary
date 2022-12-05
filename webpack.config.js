const path = require('path')

const baseConfig = {
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        include: /node_modules/,
        test: /\.mjs$/,
        type: 'javascript/auto'
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: ['[name]'],
    libraryTarget: 'umd'
  },
  externals: ['react', 'react-dom']
}

function createConfig(entry, name) {
  return {
    ...baseConfig,
    entry: {
      [name]: entry
    },
    output: {
      ...baseConfig.output,
      path: path.resolve(baseConfig.output.path, name)
    }
  }
}

// Entry list
const core = createConfig('./src/components/index.tsx', '')

module.exports = (env, args) => {
  return [core]
}
