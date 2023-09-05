const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development'

  const entry = { index: './src/index.js' };
  const plugins = [];

  if(isDev) {
    entry.devRunner = './src/utils/test-utils/devRunner.js'

    plugins.push(new HtmlWebpackPlugin())
  }

  return {
    entry,
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, './dist'),
      clean: true
    },
    module: {
      rules: [
        {
          loader: 'ts-loader',
          test: /\.ts$/,
          exclude: '/node_modules'
        }
      ]
    },
    resolve: ['.ts', '.js'],
    plugins
  }
};