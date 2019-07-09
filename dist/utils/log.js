"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
exports.getLogger = log4js_1.getLogger;
const path = require("path");
log4js_1.configure({
    appenders: {
        out: {
            type: 'stdout',
            layout: {
                type: 'pattern',
                // 用于配置输出的内容信息
                pattern: '[%c] %d{hh:mm:ss.SSS} %[[%p] -> %m%]',
            }
        },
        app: {
            // 设置类型为 dateFile
            type: 'dateFile',
            // 配置文件名为 myLog.log
            filename: path.join(__dirname, '../../log/app/app.log'),
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
            filename: path.join(__dirname, '../../log/debug/debug.log'),
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
        'app-debug': { appenders: ['out', 'app-debug'], level: 'debug' },
        app: { appenders: ['out', 'app'], level: 'info' },
        'node-cq-robot': { appenders: ['out', 'app'], level: 'info' }
    }
});
