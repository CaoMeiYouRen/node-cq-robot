// 读取同一目录下的 base config
const config = require('./webpack.config.base')
config.mode = 'development' // 设置为开发环境 ；修改为 production 启用生产环境
module.exports = config