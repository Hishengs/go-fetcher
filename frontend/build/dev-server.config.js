const webpack = require('webpack');
const baseConfig = require('./base.config.js');

baseConfig.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
}));
baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

const commonProxySetting = {
  target: {
    port: 94,
    protocol: 'http',
  },
  changeOrigin: true,
  secure: false
};

baseConfig.devServer = {
  port: 93,
  inline: true,
  hot: true,
  contentBase: './frontend',
  proxy: {
    '/api/*': commonProxySetting,
    '/static/*': commonProxySetting,
  }
};

module.exports = baseConfig;