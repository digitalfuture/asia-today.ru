const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, './docs'),
  publicPath: '/',
  configureWebpack: {
    devtool: 'source-map'
    // mode: 'production',
  },
  chainWebpack: config => {
    // config
    //   .entry('shared')
    //   .add('src/admin/index.js')
    //   .end()
  }
}
