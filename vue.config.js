const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, './docs'),
  baseUrl: '/',
  configureWebpack: {
    devtool: 'source-map'
    // mode: 'production'
  }
}
