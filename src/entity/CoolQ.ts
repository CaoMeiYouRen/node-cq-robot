import { CQWebSocket, CQWebSocketOption } from 'cq-websocket'
let bot: CQWebSocket // 建立连接的核心模块


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
     * @param {string} appDirectory 应用目录
     * @param {boolean} [debug=false] 调试模式
     * @memberof CoolQ
     */
    constructor(appDirectory: string, debug: boolean = false) {
        this.debug = debug
        this.appDirectory = appDirectory
    }
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
     * 取应用目录
     * 返回的路径末尾带 \\ 或 /
     * @returns {string}
     * @memberof CoolQ
     */
    getAppDirectory(): string {
        if (this.debug) {
            // printTime(`[取应用目录] 返回:${this.appDirectory}`)
        }
        return this.appDirectory
    }
}