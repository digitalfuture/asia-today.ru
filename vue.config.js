const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, './docs'),
  baseUrl: process.env.NODE_ENV === 'production' ? '/asia-vietnam.ru/' : '/'
}
