const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const config = require('./webpack.config.base')

config.mode = 'production' // production 启用生产环境
config.externals = {
    fs: 'fs',
    cluster: 'cluster',
    path: 'path'
}
config.plugins = config.plugins.concat([
    // 官方文档推荐使用下面的插件确保 NODE_ENV
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    // 启动 minify
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new CleanWebpackPlugin(['dist']),
    // new BundleAnalyzerPlugin(
    //     {
    //         analyzerMode: 'server',
    //         analyzerHost: '127.0.0.1',
    //         analyzerPort: 8080,
    //         reportFilename: 'index.html',
    //         defaultSizes: 'parsed',
    //         openAnalyzer: true,
    //         generateStatsFile: false,
    //         statsFilename: 'stats.json',
    //         statsOptions: null,
    //         logLevel: 'info'
    //     }
    // )
    // 可以在打包时排除moment中所有的locale下的文件
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
])
module.exports = config