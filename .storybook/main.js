const path = require('path')
module.exports = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // '@storybook/addon-links',
    // '@storybook/addon-essentials',
    // '@storybook/preset-create-react-app'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen'
  },
  // framework: "@storybook/react”,
  // "stories”: [
  //   "../src/**/*.stories.mdx”,
  //   "../src/**/*.stories.@(js|jsx|ts|tsx)”
  // ],
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
