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
    constructor(debug: boolean = false) {
        this.debug = debug
    }
    /**
     * 是否为调试模式。默认false
     *
     * @type {boolean}
     * @memberof CoolQ
     */
    debug: boolean
}