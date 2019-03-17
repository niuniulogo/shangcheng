const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// 导入每次删除文件夹的插件
const cleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
// 导入抽取CSS的插件
const ExtractTextPlugin = require("extract-text-webpack-plugin")
// 导入压缩CSS的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: { // 配置入口节点
    app: path.join(__dirname, './src/main.js'),
    vendors1: ['jquery'] // 把要抽离的第三方包的名称，放到这个数组中
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/bundle.js'
  },
  plugins: [ // 插件
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true, // 合并多余的空格
        removeComments: true, // 移除注释
        removeAttributeQuotes: true // 移除 属性上的双引号
      }
    }),
    new cleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors1', // 指定要抽离的入口名称
      filename: 'js/vendors.js' // 将来再发布的时候，除了会有一个 bundle.js ，还会多一个 vendors.js 的文件，里面存放了所有的第三方包
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { // 配置压缩选项
        warnings: false // 移除警告
      }
    }),
    new webpack.optimize.DedupePlugin({ // 设置为产品上线环境，进一步压缩JS代码
      'process.env.NODE_ENV': '"production"'
    }),
    new ExtractTextPlugin("css/styles.css"), // 抽取CSS文件
    new OptimizeCssAssetsPlugin()// 压缩CSS的插件
  ],
  module: {
    rules: [
      {
        test: /\.css$/, use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: '../' // 指定抽取的时候，自动为我们的路径加上 ../ 前缀
        })
      },
      {
        test: /\.scss$/, use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '../' // 指定抽取的时候，自动为我们的路径加上 ../ 前缀
        })
      },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=5000&name=images/[hash:8]-[name].[ext]' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  }
}