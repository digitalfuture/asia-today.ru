const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, './docs'),
  publicPath: '/',
  configureWebpack: {
    devtool: 'source-map',
    mode: 'production'
  },
  pwa: {
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon512: 'icons/icon-512x512',
      favicon384: 'icons/icon-384x384',
      favicon192: 'icons/icon-192x192',
      favicon152: 'icons/icon-152x152',
      favicon144: 'icons/icon-144x144',
      favicon128: 'icons/icon-128x128'
    },

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js'
      // ...other Workbox options...
    }
  }
}
