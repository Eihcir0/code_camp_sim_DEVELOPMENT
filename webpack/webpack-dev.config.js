module.exports = require('./webpack.config.js')({
  isProduction: false,
  devtool: 'source-map',
  jsFileName: 'app.js',
  cssFileName: 'app.[hash].css',
  port: 3000,
});
