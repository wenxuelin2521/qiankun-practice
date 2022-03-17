const { name } = require('./package.json')
const port = 8001 // 定义端口号

module.exports = {
  devServer: {
    port,
    // 允许被主应用跨域fetch请求到
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      // 把子应用打包成umd库格式
      // 当我们把 libraryTarget 设置为 umd 后，我们的 library 就暴露为所有的模块定义下都可运行的方式了，主应用就可以获取到微应用的生命周期钩子函数了
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_${name}`（webpack5使用下班这个属性）
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
}