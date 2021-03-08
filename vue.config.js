module.exports = {
  devServer: {
    proxy: {  //可以是一个指向开发环境 API 服务器的字符串
      '/api': { //默认路径
        target: 'https://shopapi.smartisan.com', //代理的地址
        changeOrigin: true, //是否跨域，
           pathRewrite: {
            '^/api': '', // 将匹配的地址重写
          }
          
          //可选
          // pathRewrite: {
          //   '^/api/old-path': '/api/new-path', // 将匹配的地址重写
          // }
      },
    }
  }
}