module.exports = require('./webpack.config.js')({
  isProduction: true,
  devtool: 'source-map',
  jsFileName: 'app.js',
  cssFileName: 'application.css'
});
