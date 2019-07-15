import { configure, getLogger } from 'log4js'
import path = require('path')
configure({
    appenders: {
        out: {
            type: 'stdout',
            layout: {
                type: 'pattern',
                // 用于配置输出的内容信息
                pattern: '%d{hh:mm:ss.SSS} -> %[[%c] %m%]',
            }
        },
        app: {
            // 设置类型为 dateFile
            type: 'dateFile',
            // 配置文件名
            filename: './log/app/app.log',
            // 指定编码格式为 utf-8
            encoding: 'utf-8',
            // 配置 layout，此处使用自定义模式 pattern
            layout: {
                type: 'pattern',
                // 配置模式  '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}'
                pattern: '%d{yyyy-MM-dd hh:mm:ss.SSS} %c pid:%z [%p] -> \'%m\''
            },
            // 日志文件按日期（天）切割
            pattern: 'yyyy-MM-dd',
            // 回滚旧的日志文件时，保证以 .log 结尾 （只有在 alwaysIncludePattern 为 false 生效）
            keepFileExt: true,
            // 输出的日志文件名是都始终包含 pattern 日期结尾
            alwaysIncludePattern: true,
        },
        'app-debug': {
            // 设置类型为 dateFile
            type: 'dateFile',
            // 配置文件名为 myLog.log
            filename: './log/debug/debug.log',
            // 指定编码格式为 utf-8
            encoding: 'utf-8',
            // 配置 layout，此处使用自定义模式 pattern
            layout: {
                type: 'pattern',
                // 配置模式  '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}'
                pattern: '%d{yyyy-MM-dd hh:mm:ss.SSS} %c pid:%z [%p] -> \'%m\''
            },
            // 日志文件按日期（天）切割
            pattern: 'yyyy-MM-dd',
            // 回滚旧的日志文件时，保证以 .log 结尾 （只有在 alwaysIncludePattern 为 false 生效）
            keepFileExt: true,
            // 输出的日志文件名是都始终包含 pattern 日期结尾
            alwaysIncludePattern: true,
        },
    },
    categories: {
        // getLogger 参数为空时，默认使用该分类
        default: { appenders: ['out'], level: 'info' },
        'app-debug': { appenders: ['app-debug'], level: 'debug' },
        app: { appenders: ['app'], level: 'info' },
        'cq-robot': { appenders: ['app'], level: 'info' },
    }
})
// const logger = getLogger('app-debug')
// logger.level = 'debug'
// logger.debug(`现在是北京时间：${timeFormat()}`)

// export function logger(name: string = 'node-cq-robot') {
//     let log = getLogger(name)
//     return log
// }
export { getLogger }