module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: config => {
    return {
      ...config,
      plugins: config.plugins.filter(plugin => {
        return plugin.constructor.name !== 'ESLintWebpackPlugin';
      }),
    }
  },
}
