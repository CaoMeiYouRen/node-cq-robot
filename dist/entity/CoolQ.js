"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cq_websocket_1 = require("cq-websocket");
const utils_1 = require("../utils");
const CQLog_1 = require("./CQLog");
const CQAuth_1 = require("./CQAuth");
const CQCode_1 = require("./CQCode");
const fs = require("fs");
const path = require("path");
const JSON5 = require("json5");
let bot; // 建立连接的核心模块
/**
 *
 * 获取CQ的配置
 * @export
 * @param {string} cqPath 路径
 * @returns {CQOption}
 */
function getCQOption(cqPath) {
    let config = fs.readFileSync(cqPath).toString();
    return JSON5.parse(config);
}
exports.getCQOption = getCQOption;
/**
 *
 * 初始化CQWebSocket
 * @export
 * @param {CQWebSocketOption} option
 */
function CQWebSocketInit(option) {
    bot = new cq_websocket_1.CQWebSocket(option);
    bot.on('socket.connecting', (socketType, attempts) => {
        utils_1.printTime(`[WebSocket] 尝试第${attempts}次连线`, CQLog_1.CQLog.LOG_INFO);
    }).on('socket.connect', (socketType, sock, attempts) => {
        utils_1.printTime(`[WebSocket] 第${attempts}次连线尝试成功`, CQLog_1.CQLog.LOG_INFO_SUCCESS);
    }).on('socket.failed', (socketType, attempts) => {
        utils_1.printTime(`[WebSocket] 第${attempts}次连线尝试失败 `, CQLog_1.CQLog.LOG_WARNING);
    }).on('socket.error', (socketType, error) => {
        utils_1.printTime('[WebSocket] 连线出现了socket.error错误！！', CQLog_1.CQLog.LOG_ERROR);
        console.error(error);
    }).on('error', (error) => {
        utils_1.printTime('[WebSocket] 连线出现了error！！', CQLog_1.CQLog.LOG_FATAL);
        console.error(error);
    });
    bot.connect();
    return bot;
}
exports.CQWebSocketInit = CQWebSocketInit;
/**
 * CoolQ 操作的核心类
 * @author CaoMeiYouRen
 * @date 2019-07-07
 * @export
 * @class CoolQ
 */
class CoolQ {
    /**
     * CoolQ构造函数
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {string} APP_ID
     * @param {string} dirname 应用根目录，即index.ts中的__dirname
     * @param {boolean} [debug=false] 调试模式
     * @memberof CoolQ
     */
    constructor(APP_ID, dirname, debug = false) {
        this.CQCode = new CQCode_1.CQCode();
        this.APP_ID = APP_ID;
        this.debug = debug;
        this.appDirectory = path.join(dirname, 'data/');
        if (!fs.existsSync(this.appDirectory)) {
            fs.mkdirSync(this.appDirectory);
        }
        if (fs.existsSync(path.join(dirname, 'index.jsonc'))) {
            this.appOption = getCQOption(path.join(dirname, 'index.jsonc'));
        }
        else if (fs.existsSync(path.join(dirname, 'index.json'))) {
            this.appOption = getCQOption(path.join(dirname, 'index.json'));
        }
        else {
            utils_1.printTime(`找不到 ${APP_ID} 配置文件在：${dirname} 目录下`, CQLog_1.CQLog.LOG_ERROR);
        }
    }
    /**
    * 设置环境模式，用于区分生产环境和开发环境。
    *
    * @export
    * @param {boolean} debug
    */
    setDebug(debug) {
        this.debug = debug;
        if (this.debug) {
            utils_1.printTime(`[setDebug] 应用 ${this.APP_ID} 已开启debug模式，所有api调用都不会真正执行`, CQLog_1.CQLog.LOG_INFO_SUCCESS);
        }
        else {
            utils_1.printTime(`[setDebug] 应用 ${this.APP_ID} 已关闭debug模式，api调用将真正执行`, CQLog_1.CQLog.LOG_INFO_SUCCESS);
        }
    }
    /**
     * 获取当前环境模式
     *
     * @export
     * @returns {boolean}
     */
    getDebug() {
        return this.debug;
    }
    /**
     * 取应用目录
     * 返回的路径末尾带 \\ 或 /
     * @returns {string}
     * @memberof CoolQ
     */
    getAppDirectory() {
        if (this.debug) {
            utils_1.printTime(`[取应用目录] 返回:${this.appDirectory}`);
        }
        return this.appDirectory;
    }
    /**
     *
     * 在控制台调试输出日志。不推荐使用本方法,请使用log开头的方法
     * @param {LogLevel} level
     * @param {string} type
     * @param {string} content
     * @memberof CoolQ
     */
    addLog(level, type, content) {
        utils_1.printTime(`[日志] 类型:${type} 内容:${content}`, level);
        return 0;
    }
    /**
     * 调试日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logDebug(type, content) {
        return this.addLog(CQLog_1.CQLog.LOG_DEBUG, type, content);
    }
    /**
     * 信息日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfo(type, content) {
        return this.addLog(CQLog_1.CQLog.LOG_INFO, type, content);
    }
    /**
     * 接受信息日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfoRecv(type, content) {
        return this.addLog(CQLog_1.CQLog.LOG_INFO_RECV, type, content);
    }
    /**
     *
     * 发送信息日志
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfoSend(type, content) {
        return this.addLog(CQLog_1.CQLog.LOG_INFO_SEND, type, content);
    }
    /**
     * 发送成功日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfoSuccess(type, content) {
        return this.addLog(CQLog_1.CQLog.LOG_INFO_SUCCESS, type, content);
    }
    /**
     * 警告日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logWarning(type, content) {
        return this.addLog(CQLog_1.CQLog.LOG_WARNING, type, content);
    }
    /**
     * 错误日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logError(type, content) {
        return this.addLog(CQLog_1.CQLog.LOG_ERROR, type, content);
    }
    /**
     * 致命错误日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logFatal(type, content) {
        return this.addLog(CQLog_1.CQLog.LOG_FATAL, type, content);
    }
    /**
   *
   * 酷Q基本操作（通过api方式调用）
   * @param {string} opName 操作名称
   * @param {Record<string, any>} param 参数
   * @param {number} [auth] 权限
   * @returns
   */
    cqBasicOperate(opName, param) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.debug) {
                    utils_1.printTime(`[酷Q基本操作] 操作 ${opName} 已完成`, CQLog_1.CQLog.LOG_INFO_SUCCESS);
                    return 0;
                }
                let auth = CQAuth_1.getAuth(opName);
                if (this.appOption.auth.includes(auth)) { // 判断是否有权限执行该操作
                    if (bot.isReady()) {
                        let result = yield bot(opName, param);
                        utils_1.printTime(JSON.stringify(result));
                        return result.retcode;
                    }
                    else {
                        utils_1.printTime('[cq-robot]WebSocket连接还未建立，无法调用http-api');
                        return -999;
                    }
                }
                else {
                    utils_1.printTime(`[cq-robot]该插件没有权限执行 操作名称为：${opName}，权限值为 ${auth} 的操作`);
                    return -1000;
                }
            }
            catch (error) {
                utils_1.printTime(`[cq-robot]请求 ${opName} 超时'`);
                console.error(error);
                return -1;
            }
        });
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
    send_private_msg(user_id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[发送私聊消息] QQID:${user_id} msg:${message}`, CQLog_1.CQLog.LOG_INFO_SEND);
                return 0;
            }
            return this.cqBasicOperate('send_private_msg', {
                user_id,
                message
            });
        });
    }
    /**
     * 发送群消息
     * @export
     * @param {number} group_id 群号
     * @param {string} message 要发送的内容
     */
    send_group_msg(group_id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[发送群消息] 群号:${group_id} msg:${message}`, CQLog_1.CQLog.LOG_INFO_SEND);
                return 0;
            }
            return this.cqBasicOperate('send_group_msg', {
                group_id,
                message
            });
        });
    }
    /**
     * 发送讨论组消息
     * @export
     * @param {number} discuss_id 讨论组 ID（正常情况下看不到，需要从讨论组消息上报的数据中获得）
     * @param {string} message 要发送的内容
     */
    send_discuss_msg(discuss_id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[发送讨论组消息] 讨论组号:${discuss_id} msg:${message}`, CQLog_1.CQLog.LOG_INFO_SEND);
                return 0;
            }
            return this.cqBasicOperate('send_discuss_msg', {
                discuss_id,
                message
            });
        });
    }
}
exports.CoolQ = CoolQ;
