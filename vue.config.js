module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  runtimeCompiler: false,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', //数据库接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/py': {
        target: 'http://localhost:5000',//flask后端接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/py': ''
        }

      },
      '/chain_l': {
        target: 'http://localhost:4000',//fabric后端接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/chain_l': ''
        }
      },
      '/chain_r': {
        target: 'http://172.20.10.4:4000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/chain_r': ''
        }
      },
    }
  }
}
