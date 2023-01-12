const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    { name: 'storybook-design-token', options: { preserveCSSVars: true } },
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    '@storybook/addon-outline'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen'
  },
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    })
    // Return the altered config
    return config
  }
}
