module.exports = require('./webpack.config.js')({
  isProduction: false,
  devtool: 'source-map',
  jsFileName: 'app.js',
  cssFileName: 'application.css',
  port: 3000,
});
