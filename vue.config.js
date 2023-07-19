const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: ' https://mock.mengxuegu.com/mock/62d014bf12622141e6caa20c/rfid-admin-mock',
    //     changeOrigin: true
    //   }
    // }
    proxy: 'http://101.34.8.23:8888'
  },
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
