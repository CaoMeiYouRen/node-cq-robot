const path = require('path')
module.exports = {
    entry: path.join(__dirname, 'src', 'index.ts'),
    output: {
        filename: 'index.js',
        library: {
            root: 'CQRobotSDK',
            amd: 'cq-robot',
            commonjs: 'cq-robot'
        },
        libraryTarget: 'umd',
        libraryExport: '',
        path: path.join(__dirname, 'dist')
    },
    plugins: [],
    module: {
        // 配置所有第三方loader 模块
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader', // 配置加载typescript
                exclude: /node_modules/
            }
        ]
    },
    optimization: {},
    resolve: {
        // 路径别名
        // alias: {
        //     '@': path.resolve(__dirname, './src'),
        // },
        // 路径别名自动解析确定的扩展
        extensions: ['.js', '.vue', '.json', '.tsx', '.ts']
    },
}

