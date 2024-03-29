const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development'

  const entry = { index: './src/index.ts' };
  const plugins = [];

  if(isDev) {
    entry.devRunner = './src/test-utils/devRunner.ts'

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
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
            {
              loader: 'ts-loader',
            }
          ],
          test: /\.ts$/,
          exclude: '/node_modules/'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins
  }
};