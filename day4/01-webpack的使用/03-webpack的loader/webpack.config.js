const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
  }
}