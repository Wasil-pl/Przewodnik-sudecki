// gatsby-node.js
exports.onCreateWebpackConfig = ({ stage, actions, plugins, loaders, getConfig }) => {
  // Maintain the null loader configuration for specific modules in SSR
  if (stage === 'build-html' || stage === 'develop-html' || stage === 'develop') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /xterm|xterm-addon-fit/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  // Get the existing Webpack configuration
  const config = getConfig();

  // Find and modify MiniCssExtractPlugin to suppress CSS order conflicts
  const miniCssExtractPlugin = config.plugins.find((plugin) => plugin.constructor.name === 'MiniCssExtractPlugin');

  if (miniCssExtractPlugin) {
    miniCssExtractPlugin.options.ignoreOrder = true; // Suppress conflicting order warning
  }

  // Replace the modified config
  actions.replaceWebpackConfig(config);
};
