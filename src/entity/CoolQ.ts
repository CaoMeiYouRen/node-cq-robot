import { CQWebSocket, CQWebSocketOption } from 'cq-websocket'
import { printTime, getLogger } from '../utils'
import { CQOption } from './CQOption'
import { CQLog } from './CQLog'
import { getAuth } from './CQAuth'
import fs = require('fs')
import path = require('path')
import JSON5 = require('json5')
let bot: CQWebSocket // 建立连接的核心模块
type LogLevel = 0 | 10 | 11 | 12 | 13 | 20 | 30 | 40

/**
 *
 * 获取CQ的配置
 * @export
 * @param {string} cqPath 路径
 * @returns {CQOption}
 */
export function getCQOption(cqPath: string): CQOption {
    let config = fs.readFileSync(cqPath).toString()
    return JSON5.parse(config)
}

/**
 *
 * 初始化CQWebSocket
 * @export
 * @param {CQWebSocketOption} option
 */
export function CQWebSocketInit(option: CQWebSocketOption): CQWebSocket {
    bot = new CQWebSocket(option)
    bot.on('socket.connecting', (socketType, attempts) => {
        printTime(`[WebSocket] 尝试第${attempts}次连线`, CQLog.LOG_INFO)
    }).on('socket.connect', (socketType, sock, attempts) => {
        printTime(`[WebSocket] 第${attempts}次连线尝试成功`, CQLog.LOG_INFO_SUCCESS)
    }).on('socket.failed', (socketType, attempts) => {
        printTime(`[WebSocket] 第${attempts}次连线尝试失败 `, CQLog.LOG_WARNING)
    }).on('socket.error', (socketType, error) => {
        printTime('[WebSocket] 连线出现了socket.error错误！！', CQLog.LOG_ERROR)
        console.error(error)
    }).on('error', (error) => {
        printTime('[WebSocket] 连线出现了error！！', CQLog.LOG_FATAL)
        console.error(error)
    })
    bot.connect()
    return bot
}

/**
 * CoolQ 操作的核心类
 * @author CaoMeiYouRen
 * @date 2019-07-07
 * @export
 * @class CoolQ
 */
export class CoolQ {
    /**
     * CoolQ构造函数
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {string} APP_ID
     * @param {string} dirname 应用根目录，即index.ts中的__dirname
     * @param {boolean} [debug=false] 调试模式
     * @memberof CoolQ
     */
    constructor(APP_ID: string, dirname: string, debug: boolean = false) {
        this.APP_ID = APP_ID
        this.debug = debug
        this.appDirectory = path.join(dirname, 'data/')
        if (!fs.existsSync(this.appDirectory)) {
            fs.mkdirSync(this.appDirectory)
        }
        if (fs.existsSync(path.join(dirname, 'index.jsonc'))) {
            this.appOption = getCQOption(path.join(dirname, 'index.jsonc'))
        } else if (fs.existsSync(path.join(dirname, 'index.json'))) {
            this.appOption = getCQOption(path.join(dirname, 'index.json'))
        } else {
            printTime(`找不到 ${APP_ID} 配置文件在：${dirname} 目录下`, CQLog.LOG_ERROR)
        }
    }
    /**
     * 插件配置
     *
     * @type {CQOption}
     * @memberof CoolQ
     */
    appOption: CQOption
    /**
    * 应用ID
    *
    * @type {string}
    * @memberof CoolQ
    */
    APP_ID: string
    /**
     * 是否为调试模式。默认false
     *
     * @type {boolean}
     * @memberof CoolQ
     */
    debug: boolean
    /**
     *
     * 应用目录
     * @type {string}
     * @memberof CoolQ
     */
    appDirectory: string
    /**
    * 设置环境模式，用于区分生产环境和开发环境。
    *
    * @export
    * @param {boolean} debug
    */
    setDebug(debug: boolean) {
        this.debug = debug
        if (this.debug) {
            printTime(`[setDebug] 应用 ${this.APP_ID} 已开启debug模式，所有api调用都不会真正执行`, CQLog.LOG_INFO_SUCCESS)
        } else {
            printTime(`[setDebug] 应用 ${this.APP_ID} 已关闭debug模式，api调用将真正执行`, CQLog.LOG_INFO_SUCCESS)
        }
    }
    /**
     * 获取当前环境模式
     *
     * @export
     * @returns {boolean}
     */
    getDebug(): boolean {
        return this.debug
    }
    /**
     * 取应用目录
     * 返回的路径末尾带 \\ 或 /
     * @returns {string}
     * @memberof CoolQ
     */
    getAppDirectory(): string {
        if (this.debug) {
            printTime(`[取应用目录] 返回:${this.appDirectory}`)
        }
        return this.appDirectory
    }
    /**
     *
     * 在控制台调试输出日志。不推荐使用本方法,请使用log开头的方法
     * @param {LogLevel} level
     * @param {string} type
     * @param {string} content
     * @memberof CoolQ
     */
    private addLog(level: LogLevel, type: string, content: string): 0 {
        printTime(`[日志] 类型:${type} 内容:${content}`, level)
        return 0
    }
    /**
     * 调试日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logDebug(type: string, content: string): 0 {
        return this.addLog(CQLog.LOG_DEBUG, type, content)
    }
    /**
     * 信息日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfo(type: string, content: string): 0 {
        return this.addLog(CQLog.LOG_INFO, type, content)
    }
    /**
     * 接受信息日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfoRecv(type: string, content: string): 0 {
        return this.addLog(CQLog.LOG_INFO_RECV, type, content)
    }
    /**
     *
     * 发送信息日志
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfoSend(type: string, content: string): 0 {
        return this.addLog(CQLog.LOG_INFO_SEND, type, content)
    }
    /**
     * 发送成功日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfoSuccess(type: string, content: string): 0 {
        return this.addLog(CQLog.LOG_INFO_SUCCESS, type, content)
    }
    /**
     * 警告日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logWarning(type: string, content: string): 0 {
        return this.addLog(CQLog.LOG_WARNING, type, content)
    }
    /**
     * 错误日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logError(type: string, content: string): 0 {
        return this.addLog(CQLog.LOG_ERROR, type, content)
    }
    /**
     * 致命错误日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logFatal(type: string, content: string): 0 {
        return this.addLog(CQLog.LOG_FATAL, type, content)
    }
    /**
   *
   * 酷Q基本操作（通过api方式调用）
   * @param {string} opName 操作名称
   * @param {Record<string, any>} param 参数
   * @param {number} [auth] 权限
   * @returns
   */
    private async cqBasicOperate(opName: string, param: Record<string, any>) {
        try {
            if (this.debug) {
                printTime(`[酷Q基本操作] 操作 ${opName} 已完成`, CQLog.LOG_INFO_SUCCESS)
                return 0
            }
            let auth = getAuth(opName)
            if (this.appOption.auth.includes(auth)) { // 判断是否有权限执行该操作
                if (bot.isReady()) {
                    let result = await bot(opName, param)
                    printTime(JSON.stringify(result))
                    return result.retcode
                } else {
                    printTime('[cq-robot]WebSocket连接还未建立，无法调用http-api')
                    return -999
                }
            } else {
                printTime(`[cq-robot]该插件没有权限执行 操作名称为：${opName}，权限值为 ${auth} 的操作`)
                return -1000
            }
        } catch (error) {
            printTime(`[cq-robot]请求 ${opName} 超时'`)
            console.error(error)
            return -1
        }
    }
    /** ************   snake_case 下划线风格 *********** */
    /**
     *
     * 发送私聊消息
     * @export
     * @param {number} user_id 对方 QQ 号
     * @param {string} message 要发送的内容
     * @returns
     */
    async send_private_msg(user_id: number, message: string) {
        if (this.debug) {
            printTime(`[发送私聊消息] QQID:${user_id} msg:${message}`, CQLog.LOG_INFO_SEND)
            return 0
        }
        return this.cqBasicOperate('send_private_msg', {
            user_id,
            message
        })
    }
    /**
     * 发送群消息
     * @export
     * @param {number} group_id 群号
     * @param {string} message 要发送的内容
     */
    async send_group_msg(group_id: number, message: string) {
        if (this.debug) {
            printTime(`[发送群消息] 群号:${group_id} msg:${message}`, CQLog.LOG_INFO_SEND)
            return 0
        }
        return this.cqBasicOperate('send_group_msg', {
            group_id,
            message
        })
    }

    /**
     * 发送讨论组消息
     * @export
     * @param {number} discuss_id 讨论组 ID（正常情况下看不到，需要从讨论组消息上报的数据中获得）
     * @param {string} message 要发送的内容
     */
    async send_discuss_msg(discuss_id: number, message: string) {
        if (this.debug) {
            printTime(`[发送讨论组消息] 讨论组号:${discuss_id} msg:${message}`, CQLog.LOG_INFO_SEND)
            return 0
        }
        return this.cqBasicOperate('send_discuss_msg', {
            discuss_id,
            message
        })
    }

    /** *********  camelCase 小驼峰风格 ***************/
}