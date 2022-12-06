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
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
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

module.exports = () => [core]
