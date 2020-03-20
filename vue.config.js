module.exports = {
  // outputDir: 'C:\\Users\\User\\Desktop\\code\\asia-today.ru\\docs',
  outputDir: './docs',
  publicPath: '/',
  configureWebpack: {
    devtool: 'source-map',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
  },
  transpileDependencies: ['vuetify']
}
