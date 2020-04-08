const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js',// 入口文件
  output: {
    path: path.resolve(__dirname, '../dist'),// 所有输出文件的路劲
    filename: 'bundle.js', // 打包的文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader", // compiles Less to CSS
                // name: 'img/[name].[hash:8].[ext]'//改变图片打包路劲和名字
            }]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],// 引入时省略后缀
    alias: {// 模块别名列表
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [ // 附加插件
    new webpack.BannerPlugin('最终版权归xiao所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}