const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:4]"'
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("index.css"),
    new CopyWebpackPlugin([
      { from: 'src/server.js', to: 'server.js' },
      { from: 'src/manifest.json', to: 'manifest.json' },
      { from: 'src/assets/svg/**/*', to: 'assets/svg', flatten: true },
    ])
  ],
};

// Copy static files
// https://www.npmjs.com/package/copy-webpack-plugin
