const path = require('path');
const webpack = require('webpack');

const plugins = [
  // extract common chunks between vendor files
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'runtime'],
    minChunks: Infinity,
  }),
];

const rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  },
  { test: /iview.src.*?js$/, loader: 'babel-loader' },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  { test: /\.(png|jpg|gif|svg|ttf|eot|woff)$/, loader: 'file-loader?name=[name].[hash].[ext]' },
  { test: /\.css$/, loader: 'style-loader!css-loader' },
  { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
];

module.exports = {
  entry: {
    app: path.join(__dirname, '../index.js'),
    vendor: ['vue', 'vue-router', 'axios'],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash:4].piece.js',
    publicPath: '/dist/',
  },
  plugins,
  module: {
    rules,
  },
};
