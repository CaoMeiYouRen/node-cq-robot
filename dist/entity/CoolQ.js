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
const index_1 = require("./index");
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
        utils_1.printTime(`[WebSocket] 尝试第${attempts}次连线`, index_1.CQLog.LOG_INFO);
    }).on('socket.connect', (socketType, sock, attempts) => {
        utils_1.printTime(`[WebSocket] 第${attempts}次连线尝试成功`, index_1.CQLog.LOG_INFO_SUCCESS);
    }).on('socket.failed', (socketType, attempts) => {
        utils_1.printTime(`[WebSocket] 第${attempts}次连线尝试失败 `, index_1.CQLog.LOG_WARNING);
    }).on('socket.error', (socketType, error) => {
        utils_1.printTime('[WebSocket] 连线出现了socket.error错误！！', index_1.CQLog.LOG_ERROR);
        console.error(error);
    }).on('error', (error) => {
        utils_1.printTime('[WebSocket] 连线出现了error！！', index_1.CQLog.LOG_FATAL);
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
        this.CQCode = new index_1.CQCode();
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
            utils_1.printTime(`找不到 ${APP_ID} 配置文件在：${dirname} 目录下`, index_1.CQLog.LOG_ERROR);
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
            utils_1.printTime(`[setDebug] 应用 ${this.APP_ID} 已开启debug模式，所有api调用都不会真正执行`, index_1.CQLog.LOG_INFO_SUCCESS);
        }
        else {
            utils_1.printTime(`[setDebug] 应用 ${this.APP_ID} 已关闭debug模式，api调用将真正执行`, index_1.CQLog.LOG_INFO_SUCCESS);
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
        return this.addLog(index_1.CQLog.LOG_DEBUG, type, content);
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
        return this.addLog(index_1.CQLog.LOG_INFO, type, content);
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
        return this.addLog(index_1.CQLog.LOG_INFO_RECV, type, content);
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
        return this.addLog(index_1.CQLog.LOG_INFO_SEND, type, content);
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
        return this.addLog(index_1.CQLog.LOG_INFO_SUCCESS, type, content);
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
        return this.addLog(index_1.CQLog.LOG_WARNING, type, content);
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
        return this.addLog(index_1.CQLog.LOG_ERROR, type, content);
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
        return this.addLog(index_1.CQLog.LOG_FATAL, type, content);
    }
    /**
   *
   * 酷Q基本操作（通过api方式调用）
   * @param {string} opName 操作名称
   * @param {Record<string, any>} param 参数
   * @param {number} [auth] 权限
   * @returns 对于无返回数据的仅返回状态码(retcode)，有返回数据的返回整个响应内容
   */
    cqBasicOperate(opName, param) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.debug) {
                    utils_1.printTime(`[酷Q基本操作] 操作 ${opName} 已完成`, index_1.CQLog.LOG_INFO_SUCCESS);
                    return 0;
                }
                let auth = index_1.getAuth(opName);
                if (this.appOption.auth.includes(auth)) { // 判断是否有权限执行该操作
                    if (bot.isReady()) {
                        let result = yield bot(opName, param);
                        utils_1.printTime(`执行函数${opName},参数:${JSON.stringify(param)},执行结果:${JSON.stringify(result)}`, index_1.CQLog.LOG_INFO_SUCCESS);
                        // return result
                        // 返回内容格式 {"data":{"message_id":273},"retcode":0,"status":"ok"}
                        if (opName.startsWith('send_') || opName.startsWith('get_')) {
                            return result;
                        }
                        else {
                            return result.retcode;
                        }
                    }
                    else {
                        utils_1.printTime('[cq-robot]WebSocket连接还未建立，无法调用http-api', index_1.CQLog.LOG_ERROR);
                        return -999;
                    }
                }
                else {
                    utils_1.printTime(`[cq-robot]该插件没有权限执行 操作名称为：${opName}，权限值为 ${auth} 的操作`, index_1.CQLog.LOG_ERROR);
                    return -998;
                }
            }
            catch (error) {
                utils_1.printTime(`[cq-robot]请求 ${opName} 发生错误`, index_1.CQLog.LOG_ERROR);
                console.error(error);
                return -1000;
            }
        });
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
    /** ************   snake_case 下划线风格 *********** */
    /**
     * 发送私聊消息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {number} user_id 对方 QQ 号
     * @param {(string | CQMessage | Array<CQMessage>)} message 要发送的内容，支持纯文本和数组格式
     * @returns {Promise<number>} 成功返回message_id，失败返回retcode
     * @memberof CoolQ
     */
    send_private_msg(user_id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[发送私聊消息] QQID:${user_id} msg:${JSON.stringify(message)}`, index_1.CQLog.LOG_DEBUG);
                return 0;
            }
            // 返回内容格式 {"data":{"message_id":273},"retcode":0,"status":"ok"}
            let result = yield this.cqBasicOperate('send_private_msg', {
                user_id,
                message
            });
            if (result['status'] === 'ok') {
                return result['data']['message_id'];
            }
            else {
                if (result['retcode'] > 0) {
                    return -result['retcode'] - 1000; // 为了和message_id作区分，对于来自 HTTP API 插件的错误码取相反数 -1000 处理，即，原本为1的错误码，现在为-1001
                }
                return result['retcode'];
            }
        });
    }
    /**
     * 发送群消息
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {number} group_id 群号
     * @param {(string | CQMessage | Array<CQMessage>)} message 要发送的内容，支持纯文本和数组格式
     * @returns 成功返回message_id，失败返回retcode
     * @memberof CoolQ
     */
    send_group_msg(group_id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[发送群消息] 群号:${group_id} msg:${JSON.stringify(message)}`, index_1.CQLog.LOG_DEBUG);
                return 0;
            }
            let result = yield this.cqBasicOperate('send_group_msg', {
                group_id,
                message
            });
            if (result['status'] === 'ok') {
                return result['data']['message_id'];
            }
            else {
                if (result['retcode'] > 0) {
                    return -result['retcode'] - 1000; // 为了和message_id作区分，对于来自 HTTP API 插件的错误码取相反数 -1000 处理，即，原本为1的错误码，现在为-1001
                }
                return result['retcode'];
            }
        });
    }
    /**
     * 发送讨论组消息
     * 成功返回message_id，失败返回retcode
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {number} discuss_id 讨论组 ID（正常情况下看不到，需要从讨论组消息上报的数据中获得）
     * @param {(string | CQMessage | Array<CQMessage>)} message 要发送的内容
     * @returns
     * @memberof CoolQ
     */
    send_discuss_msg(discuss_id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[发送讨论组消息] 讨论组号:${discuss_id} msg:${JSON.stringify(message)}`, index_1.CQLog.LOG_DEBUG);
                return 0;
            }
            let result = yield this.cqBasicOperate('send_discuss_msg', {
                discuss_id,
                message
            });
            if (result['status'] === 'ok') {
                return result['data']['message_id'];
            }
            else {
                if (result['retcode'] > 0) {
                    return -result['retcode'] - 1000; // 为了和message_id作区分，对于来自 HTTP API 插件的错误码取相反数 -1000 处理，即，原本为1的错误码，现在为-1001
                }
                return result['retcode'];
            }
        });
    }
    /**
     * 撤回消息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @param {number} message_id 消息 ID
     * @returns
     * @memberof CoolQ
     */
    delete_msg(message_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[撤回消息] 消息ID:${message_id}`, index_1.CQLog.LOG_DEBUG);
                return 0;
            }
            return this.cqBasicOperate('delete_msg', {
                message_id
            });
        });
    }
    /**
     * 发送好友赞
     *
     * @param {number} user_id  对方 QQ 号
     * @param {number} times 赞的次数，每个好友每天最多 10 次，默认为1
     * @returns
     */
    send_like(user_id, times = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[发送赞] QQID:${user_id} 次数:${times}`, index_1.CQLog.LOG_DEBUG);
                return 0;
            }
            let result = this.cqBasicOperate('send_like', {
                user_id,
                times
            });
            if (result['status'] === 'ok') {
                return result['retcode'];
            }
            else {
                return -1;
            }
        });
    }
    /**
     * 群组踢人
     *
     * @param {number} group_id 群号
     * @param {number} user_id  要踢的 QQ 号
     * @param {boolean} [reject_add_request=false] 拒绝此人的加群请求
     * @returns
     */
    set_group_kick(group_id, user_id, reject_add_request = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[置群员移除] 群号:${group_id} QQID:${user_id} 拒绝再加群:${reject_add_request}`);
                return 0;
            }
            return this.cqBasicOperate('set_group_kick', {
                group_id,
                user_id,
                reject_add_request
            });
        });
    }
    /**
     * 群组单人禁言
     *
     * @param {number} group_id 群号
     * @param {number} user_id  要禁言的 QQ 号
     * @param {number} [duration=30 * 60] 禁言时长，单位秒，0 表示取消禁言
     * @returns
     */
    set_group_ban(group_id, user_id, duration = 30 * 60) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[置群员禁言] 群号:${group_id} QQID:${user_id} 禁言时间:${duration}`);
                return 0;
            }
            return this.cqBasicOperate('set_group_ban', {
                group_id,
                user_id,
                duration
            });
        });
    }
    /**
     * 群组匿名用户禁言
     *
     * @param {number} group_id 群号
     * @param {string} anonymous_flag  要禁言的匿名用户的 flag（需从群消息上报的数据中获得）
     * @param {number}[duration=30 * 60] 禁言时长，单位秒，0 表示取消禁言
     * @returns
     */
    set_group_anonymous_ban(group_id, anonymous_flag, duration = 30 * 60) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[置匿名群员禁言] 群号:${group_id} 匿名:${anonymous_flag} 禁言时间:${duration}`);
                return 0;
            }
            return this.cqBasicOperate('set_group_anonymous_ban', {
                group_id,
                anonymous_flag,
                duration
            });
        });
    }
    /**
     *
     * 群组全员禁言
     * @param {number} group_id 群号
     * @param {boolean} [enable=true] 是否禁言
     * @returns
     */
    set_group_whole_ban(group_id, enable = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[置全群禁言] 群号:${group_id} 开启禁言:${enable}`);
                return 0;
            }
            return this.cqBasicOperate('set_group_whole_ban', {
                group_id,
                enable
            });
        });
    }
    /**
     * 群组设置管理员
     * @param {number} group_id 群号
     * @param {number} user_id
     * @param {boolean} [enable=true] 是否禁言
     * @returns
     */
    set_group_admin(group_id, user_id, enable = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[置群管理员] 群号:${group_id} QQID:${user_id} 成为管理员:${enable}`);
                return 0;
            }
            return this.cqBasicOperate('set_group_admin', {
                group_id,
                user_id,
                enable
            });
        });
    }
    /**
     * 群组匿名
     * @param {number} group_id 群号
     * @param {boolean} [enable=true] 是否允许匿名聊天
     * @returns
     */
    set_group_anonymous(group_id, enable = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[置群匿名设置] 群号:${group_id} 开启匿名:${enable}`);
                return 0;
            }
            return this.cqBasicOperate('set_group_anonymous', {
                group_id,
                enable
            });
        });
    }
    /**
     * 设置群名片（群备注）
     * @param {number} group_id 群号
     * @param {number} user_id 要设置的 QQ 号
     * @param {string} card 群名片内容，不填或空字符串表示删除群名片
     * @returns
     */
    set_group_card(group_id, user_id, card = '') {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[置群成员名片] 群号:${group_id} QQID:${user_id} 新名片_昵称:${card} `);
                return 0;
            }
            return this.cqBasicOperate('set_group_card', {
                group_id,
                user_id,
                card
            });
        });
    }
    /**
     * 退出群组
     * @param {number} group_id 群号
     * @param {boolean} is_dismiss 是否解散，如果登录号是群主，则仅在此项为 true 时能够解散
     * @returns
     */
    set_group_leave(group_id, is_dismiss = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[置群退出] 群号:${group_id} 是否解散:${is_dismiss} `);
                return 0;
            }
            return this.cqBasicOperate('set_group_leave', {
                group_id,
                is_dismiss
            });
        });
    }
    /**
     * 置群成员专属头衔；
     * Auth=128 需群主权限
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @param {number} group_id 目标群
     * @param {number} user_id 目标QQ
     * @param {string} special_title 如果要删除，这里填空
     * @param {number} duration 专属头衔有效期，单位为秒。如果永久有效，这里填写-1
     * @returns
     * @memberof CoolQ
     */
    set_group_special_title(group_id, user_id, special_title, duration) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[置群成员专属头衔] 群号:${group_id} QQID:${user_id} 头衔:${special_title} 过期时间:${duration}`);
                return 0;
            }
            return this.cqBasicOperate('set_group_special_title', {
                group_id, user_id,
                special_title, duration
            });
        });
    }
    /**
     * 置讨论组退出
     * Auth=140
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @param {number} discuss_id 讨论组 ID（正常情况下看不到，需要从讨论组消息上报的数据中获得
     * @returns
     * @memberof CoolQ
     */
    set_discuss_leave(discuss_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[置讨论组退出] 讨论组号:${discuss_id}`);
                return 0;
            }
            return this.cqBasicOperate('set_discuss_leave', {
                discuss_id
            });
        });
    }
    /**
     *  置好友添加请求
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @param {string} flag 加好友请求的 flag（需从上报的数据中获得）
     * @param {boolean} [approve=true] 是否同意请求
     * @param {string} remark 添加后的好友备注（仅在同意时有效）
     * @returns
     * @memberof CoolQ
     */
    set_friend_add_request(flag, approve = true, remark) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[置好友添加请求] 请求反馈标识:${flag} 反馈类型:${approve} 备注:${remark}`);
                return 0;
            }
            return this.cqBasicOperate('set_friend_add_request', {
                flag, approve, remark
            });
        });
    }
    /**
     * 获取登录号信息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @returns {Promise<{ user_id: number; nickname: string; }>}
     * @memberof CoolQ
     */
    get_login_info() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                let info = {
                    user_id: 10001,
                    nickname: '酷Q'
                };
                utils_1.printTime(`[取登录号信息] qq:${info.user_id} 昵称:${info.nickname}`);
                return info;
            }
            let result = yield this.cqBasicOperate('get_login_info', {});
            if (result['status'] === 'ok') {
                return result['data'];
            }
            else {
                return {
                    user_id: -1,
                    nickname: ''
                };
            }
        });
    }
    /**
     * 取登录QQ
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @returns {Promise<number>}
     * @memberof CoolQ
     */
    get_login_qq() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime('[取登录QQ] 返回:10001');
                return 10001;
            }
            let result = yield this.get_login_info();
            return result.user_id;
        });
    }
    /**
     *取登录昵称
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @returns {Promise<string>}
     * @memberof CoolQ
     */
    get_login_nick() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime('[取登录昵称] 返回:酷Q');
                return '酷Q';
            }
            let result = yield this.get_login_info();
            return result.nickname;
        });
    }
    /**
     *获取陌生人信息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @param {number} user_id QQ 号
     * @param {boolean} [no_cache=false] 是否不使用缓存（使用缓存可能更新不及时，但响应更快）
     * @returns {Promise<QQInfo>}
     * @memberof CoolQ
     */
    get_stranger_info(user_id, no_cache = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                let testStranger = {
                    user_id,
                    nickname: '测试昵称',
                    sex: 'male',
                    age: 0
                };
                utils_1.printTime(`[取陌生人信息] 本函数请在酷Q中测试 QQID:${user_id} 不使用缓存:${no_cache} 返回:${JSON.stringify(testStranger)}`);
                return testStranger;
            }
            let result = yield this.cqBasicOperate('get_stranger_info', {
                user_id, no_cache
            });
            if (result['status'] === 'ok') {
                return result['data'];
            }
            else {
                return new index_1.QQInfo(-1, '', 'male', 0);
            }
        });
    }
    /**
     * 获取群列表
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<Array<GroupInfo>>}
     * @memberof CoolQ
     */
    get_group_list() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                let testGroupList = [
                    {
                        group_id: 10001,
                        group_name: '测试群1'
                    }
                ];
                utils_1.printTime(`[取群列表] 本函数请在酷Q中测试 返回:${JSON.stringify(testGroupList)}`);
                return testGroupList;
            }
            let result = yield this.cqBasicOperate('get_group_list', {});
            if (result['status'] === 'ok') {
                return result['data'];
            }
            else {
                return [];
            }
        });
    }
    /**
     *取群成员信息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {number} group_id 群号
     * @param {number} user_id QQ 号
     * @param {boolean} no_cache 是否不使用缓存（使用缓存可能更新不及时，但响应更快）
     * @returns {Promise<MemberInfo>}
     * @memberof CoolQ
     */
    get_group_member_info(group_id, user_id, no_cache = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                let testMemberInfo = {
                    group_id,
                    user_id,
                    nickname: '测试昵称',
                    card: '测试名片',
                    sex: 'male',
                    age: 0,
                    area: '中国',
                    join_time: Date.now() - 24 * 60 * 60 * 1000,
                    last_sent_time: Date.now() - 60 * 1000,
                    level: '萌新',
                    role: 'member',
                    unfriendly: false,
                    title: '测试专属头衔',
                    title_expire_time: -1,
                    card_changeable: true,
                };
                utils_1.printTime(`[取群成员信息] 本函数请在酷Q中测试 群号:${group_id} QQID:${user_id} 不使用缓存:${no_cache} 返回:${JSON.stringify(testMemberInfo)}`);
                return testMemberInfo;
            }
            let result = yield this.cqBasicOperate('get_group_member_info', {
                group_id, user_id, no_cache
            });
            if (result['status'] === 'ok') {
                return result['data'];
            }
            else {
                return new index_1.MemberInfo();
            }
        });
    }
    /**
     *取群成员列表
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {number} group_id
     * @returns {Promise<Array<MemberInfo>>} 响应内容为 JSON 数组，每个元素的内容和上面的 /get_group_member_info 接口相同，但对于同一个群组的同一个成员，获取列表时和获取单独的成员信息时，某些字段可能有所不同，例如 area、title 等字段在获取列表时无法获得，具体应以单独的成员信息为准。
     * @memberof CoolQ
     */
    get_group_member_list(group_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                let testMemberInfo = [{
                        group_id,
                        user_id: 10001,
                        nickname: '测试昵称',
                        card: '测试名片',
                        sex: 'male',
                        age: 0,
                        area: '中国',
                        join_time: Date.now() - 24 * 60 * 60 * 1000,
                        last_sent_time: Date.now() - 60 * 1000,
                        level: '萌新',
                        role: 'member',
                        unfriendly: false,
                        title: '测试专属头衔',
                        title_expire_time: -1,
                        card_changeable: true,
                    }];
                utils_1.printTime(`[取群成员信息] 本函数请在酷Q中测试 群号:${group_id}返回:${JSON.stringify(testMemberInfo)}`);
                return testMemberInfo;
            }
            let result = yield this.cqBasicOperate('get_group_member_list', {
                group_id
            });
            if (result['status'] === 'ok') {
                return result['data'];
            }
            else {
                return [];
            }
        });
    }
    /**
     *取Cookies;Auth=20 慎用,此接口需要严格授权
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<string>}
     * @memberof CoolQ
     */
    get_cookies() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime('[取Cookies] 本函数请在酷Q中测试 返回:""');
                return '';
            }
            let result = yield this.cqBasicOperate('get_cookies', {});
            if (result['status'] === 'ok') {
                return result['data']['cookies'];
            }
            else {
                return '';
            }
        });
    }
    /**
     *取CsrfToken Auth=20 即QQ网页用到的bkn/g_tk等 慎用,此接口需要严格授权 //getCsrfToken
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<string>}
     * @memberof CoolQ
     */
    get_csrf_token() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime('[取CsrfToken] 本函数请在酷Q中测试 返回:0');
                return 0;
            }
            let result = yield this.cqBasicOperate('get_csrf_token', {});
            if (result['status'] === 'ok') {
                return result['data']['token'];
            }
            else {
                return 0;
            }
        });
    }
    /**
     * 接收语音。
     * 其实并不是真的获取语音，而是转换语音到指定的格式，然后返回语音文件名（data\record 目录下）。注意，要使用此接口，需要安装 酷Q 的 语音组件。
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {string} file 收到的语音文件名（CQ 码的 file 参数），如 0B38145AA44505000B38145AA4450500.silk
     * @param {string} out_format 要转换到的格式，目前支持 mp3、amr、wma、m4a、spx、ogg、wav、flac
     * @param {boolean} full_path 是否返回文件的绝对路径（Windows 环境下建议使用，Docker 中不建议）
     * @returns {Promise<string>} 转换后的语音文件名或路径，如 0B38145AA44505000B38145AA4450500.mp3，如果开启了 full_path，则如 C:\Apps\CoolQ\data\record\0B38145AA44505000B38145AA4450500.mp3
     * @memberof CoolQ
     */
    get_record(file, out_format, full_path = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[接收语音] 本函数请在酷Q中测试 文件名:${file} 指定格式:${out_format} 是否返回文件的绝对路径:${full_path}`);
                return '';
            }
            let result = yield this.cqBasicOperate('get_record', {
                file, out_format, full_path
            });
            if (result['status'] === 'ok') {
                return result['data']['file'];
            }
            else {
                return '';
            }
        });
    }
    /**
     *接收图片；
     *Auth=30 收到的图片文件名（CQ 码的 file 参数），如 6B4DE3DFD1BD271E3297859D41C530F5.jpg
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {string} file
     * @returns {Promise<string>} 下载后的图片文件路径，如 C:\Apps\CoolQ\data\image\6B4DE3DFD1BD271E3297859D41C530F5.jpg
     * @memberof CoolQ
     */
    get_image(file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[接收图片] 本函数请在酷Q中测试 文件名:${file}`);
                return '';
            }
            let result = yield this.cqBasicOperate('get_image', {
                file
            });
            if (result['status'] === 'ok') {
                return result['data']['file'];
            }
            else {
                return '';
            }
        });
    }
    /**
     *是否可以发送图片
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<boolean>}
     * @memberof CoolQ
     */
    can_send_image() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[是否支持发送图片] 本函数请在酷Q中测试 返回:${true}`);
                return true;
            }
            let result = yield this.cqBasicOperate('can_send_image', {});
            if (result['status'] === 'ok') {
                return result['data']['yes'];
            }
            else {
                return false;
            }
        });
    }
    /**
    *是否可以发送语音
    *
    * @author CaoMeiYouRen
    * @date 2019-07-13
    * @returns {Promise<boolean>}
    * @memberof CoolQ
    */
    can_send_record() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[是否支持发送语音] 本函数请在酷Q中测试 返回:${true}`);
                return true;
            }
            let result = yield this.cqBasicOperate('can_send_record', {});
            if (result['status'] === 'ok') {
                return result['data']['yes'];
            }
            else {
                return false;
            }
        });
    }
    /**
     *取插件运行状态
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<HttpApiStatus>} 通常情况下建议只使用 online 和 good 这两个字段来判断运行状态，因为随着插件的更新，其它字段有可能频繁变化。
     * @memberof CoolQ
     */
    get_status() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                let testStatus = {
                    app_initialized: true,
                    app_enabled: true,
                    plugins_good: {},
                    app_good: true,
                    online: true,
                    good: true,
                };
                utils_1.printTime(`[取插件运行状态] 本函数请在酷Q中测试 返回:${JSON.stringify(testStatus)}`);
                return testStatus;
            }
            let result = yield this.cqBasicOperate('get_status', {});
            if (result['status'] === 'ok') {
                return result['data'];
            }
            else {
                let status = {
                    app_initialized: false,
                    app_enabled: false,
                    plugins_good: {},
                    app_good: false,
                    online: false,
                    good: false,
                };
                return status;
            }
        });
    }
    /**
     *取 酷Q 及 HTTP API 插件的版本信息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<HttpApiInfo>}
     * @memberof CoolQ
     */
    get_version_info() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                let testInfo = {
                    coolq_directory: '',
                    coolq_edition: 'air',
                    plugin_version: '4.10',
                    plugin_build_number: 100,
                    plugin_build_configuration: 'debug',
                };
                utils_1.printTime(`[取酷Q及HTTP_API插件的版本信息] 本函数请在酷Q中测试 返回:${JSON.stringify(testInfo)}`);
                return testInfo;
            }
            let result = yield this.cqBasicOperate('get_version_info', {});
            if (result['status'] === 'ok') {
                return result['data'];
            }
            else {
                return new index_1.HttpApiInfo();
            }
        });
    }
    /**
     *重启 HTTP API 插件；
     *由于重启插件同时需要重启 API 服务，这意味着当前的 API 请求会被中断，因此需在异步地重启插件，接口返回的 status 是 async。
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {number} [delay=0]
     * @returns
     * @memberof CoolQ
     */
    set_restart_plugin(delay = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[重启HTTP_API插件] 本函数请在酷Q中测试 延时:${delay} 返回:重启成功！`);
                return 1;
            }
            return this.cqBasicOperate('set_restart_plugin', {
                delay
            });
        });
    }
    /**
     *清理数据目录
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {string} data_dir 要清理的目录名，支持 image、record、show、bface
     * @returns
     * @memberof CoolQ
     */
    clean_data_dir(data_dir) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime(`[清理数据目录] 本函数请在酷Q中测试 清理的目录名:${data_dir}`);
                return 0;
            }
            return this.cqBasicOperate('clean_data_dir', {});
        });
    }
    /**
     *清理插件日志
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns
     * @memberof CoolQ
     */
    clean_plugin_log() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug) {
                utils_1.printTime('[清理插件日志] 本函数请在酷Q中测试');
                return 0;
            }
            return this.cqBasicOperate('clean_plugin_log', {});
        });
    }
    /** *********  camelCase 小驼峰风格  ***************/
    /**
    * 发送私聊消息
    *
    * @author CaoMeiYouRen
    * @date 2019-07-10
    * @param {number} user_id 对方 QQ 号
    * @param {(string | CQMessage | Array<CQMessage>)} message 要发送的内容，支持纯文本和数组格式
    * @returns {Promise<number>} 成功返回message_id，失败返回retcode
    * @memberof CoolQ
    */
    sendPrivateMsg(user_id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.send_private_msg(user_id, message);
        });
    }
    /**
    * 发送群消息
    * @author CaoMeiYouRen
    * @date 2019-07-10
    * @param {number} group_id 群号
    * @param {(string | CQMessage | Array<CQMessage>)} message 要发送的内容，支持纯文本和数组格式
    * @returns 成功返回message_id，失败返回retcode
    * @memberof CoolQ
    */
    sendGroupMsg(group_id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.send_group_msg(group_id, message);
        });
    }
    /**
     * 发送讨论组消息
     * 成功返回message_id，失败返回retcode
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {number} discuss_id 讨论组 ID（正常情况下看不到，需要从讨论组消息上报的数据中获得）
     * @param {(string | CQMessage | Array<CQMessage>)} message 要发送的内容
     * @returns
     * @memberof CoolQ
     */
    sendDiscussMsg(discuss_id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.send_discuss_msg(discuss_id, message);
        });
    }
    /**
    * 撤回消息
    *
    * @author CaoMeiYouRen
    * @date 2019-07-12
    * @param {number} message_id 消息 ID
    * @returns
    * @memberof CoolQ
    */
    deleteMsg(message_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delete_msg(message_id);
        });
    }
    /**
    * 发送好友赞
    *
    * @param {number} user_id  对方 QQ 号
    * @param {number} times 赞的次数，每个好友每天最多 10 次，默认为1
    * @returns
    */
    sendLike(user_id, times = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.send_like(user_id, times);
        });
    }
    /**
    * 群组踢人
    *
    * @param {number} group_id 群号
    * @param {number} user_id  要踢的 QQ 号
    * @param {boolean} [reject_add_request=false] 拒绝此人的加群请求
    * @returns
    */
    setGroupKick(group_id, user_id, reject_add_request = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_group_kick(group_id, user_id, reject_add_request);
        });
    }
    /**
     * 群组单人禁言
     *
     * @param {number} group_id 群号
     * @param {number} user_id  要禁言的 QQ 号
     * @param {number} [duration=30 * 60] 禁言时长，单位秒，0 表示取消禁言
     * @returns
     */
    setGroupBan(group_id, user_id, duration = 30 * 60) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_group_ban(group_id, user_id, duration);
        });
    }
    /**
   * 群组匿名用户禁言
   *
   * @param {number} group_id 群号
   * @param {string} anonymous_flag  要禁言的匿名用户的 flag（需从群消息上报的数据中获得）
   * @param {number}[duration=30 * 60] 禁言时长，单位秒，0 表示取消禁言
   * @returns
   */
    setGroupAnonymousBan(group_id, anonymous_flag, duration = 30 * 60) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_group_anonymous_ban(group_id, anonymous_flag, duration);
        });
    }
    /**
     *
     * 群组全员禁言
     * @param {number} group_id 群号
     * @param {boolean} [enable=true] 是否禁言
     * @returns
     */
    setGroupWholeBan(group_id, enable = true) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_group_whole_ban(group_id, enable);
        });
    }
    /**
     * 群组设置管理员
     * @param {number} group_id 群号
     * @param {number} user_id
     * @param {boolean} [enable=true] 是否禁言
     * @returns
     */
    setGroupAdmin(group_id, user_id, enable = true) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_group_admin(group_id, user_id, enable);
        });
    }
    /**
      * 群组匿名
      * @param {number} group_id 群号
      * @param {boolean} [enable=true] 是否允许匿名聊天
      * @returns
      */
    setGroupAnonymous(group_id, enable = true) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_group_anonymous(group_id, enable);
        });
    }
    /**
    * 设置群名片（群备注）
    * @param {number} group_id 群号
    * @param {number} user_id 要设置的 QQ 号
    * @param {string} card 群名片内容，不填或空字符串表示删除群名片
    * @returns
    */
    setGroupCard(group_id, user_id, card = '') {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_group_card(group_id, user_id, card);
        });
    }
    /**
    * 退出群组
    * @param {number} group_id 群号
    * @param {boolean} is_dismiss 是否解散，如果登录号是群主，则仅在此项为 true 时能够解散
    * @returns
    */
    setGroupLeave(group_id, is_dismiss = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_group_leave(group_id, is_dismiss);
        });
    }
    /**
   * 置群成员专属头衔；
   * Auth=128 需群主权限
   *
   * @author CaoMeiYouRen
   * @date 2019-07-12
   * @param {number} group_id 目标群
   * @param {number} user_id 目标QQ
   * @param {string} special_title 如果要删除，这里填空
   * @param {number} duration 专属头衔有效期，单位为秒。如果永久有效，这里填写-1
   * @returns
   * @memberof CoolQ
   */
    setGroupSpecialTitle(group_id, user_id, special_title, duration) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_group_special_title(group_id, user_id, special_title, duration);
        });
    }
    /**
    * 置讨论组退出
    * Auth=140
    * @author CaoMeiYouRen
    * @date 2019-07-12
    * @param {number} discuss_id 讨论组 ID（正常情况下看不到，需要从讨论组消息上报的数据中获得
    * @returns
    * @memberof CoolQ
    */
    setDiscussLeave(discuss_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_discuss_leave(discuss_id);
        });
    }
    /**
    *  置好友添加请求
    *
    * @author CaoMeiYouRen
    * @date 2019-07-12
    * @param {string} flag 加好友请求的 flag（需从上报的数据中获得）
    * @param {boolean} [approve=true] 是否同意请求
    * @param {string} remark 添加后的好友备注（仅在同意时有效）
    * @returns
    * @memberof CoolQ
    */
    setFriendAddRequest(flag, approve = true, remark) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_friend_add_request(flag, approve, remark);
        });
    }
    /**
    * 获取登录号信息
    *
    * @author CaoMeiYouRen
    * @date 2019-07-12
    * @returns {Promise<{ user_id: number; nickname: string; }>}
    * @memberof CoolQ
    */
    getLoginInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_login_info();
        });
    }
    /**
    * 取登录QQ
    *
    * @author CaoMeiYouRen
    * @date 2019-07-12
    * @returns {Promise<number>}
    * @memberof CoolQ
    */
    getLoginQq() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_login_qq();
        });
    }
    /**
   *取登录昵称
   *
   * @author CaoMeiYouRen
   * @date 2019-07-12
   * @returns {Promise<string>}
   * @memberof CoolQ
   */
    getLoginNick() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_login_nick();
        });
    }
    /**
     *获取陌生人信息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @param {number} user_id QQ 号
     * @param {boolean} [no_cache=false] 是否不使用缓存（使用缓存可能更新不及时，但响应更快）
     * @returns {Promise<QQInfo>}
     * @memberof CoolQ
     */
    getStrangerInfo(user_id, no_cache = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_stranger_info(user_id, no_cache);
        });
    }
    /**
    * 获取群列表
    *
    * @author CaoMeiYouRen
    * @date 2019-07-13
    * @returns {Promise<Array<GroupInfo>>}
    * @memberof CoolQ
    */
    getGroupList() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_group_list();
        });
    }
    /**
   *获取群成员信息
   *
   * @author CaoMeiYouRen
   * @date 2019-07-13
   * @param {number} group_id 群号
   * @param {number} user_id QQ 号
   * @param {boolean} no_cache 是否不使用缓存（使用缓存可能更新不及时，但响应更快）
   * @returns {Promise<MemberInfo>}
   * @memberof CoolQ
   */
    getGroupMemberInfo(group_id, user_id, no_cache) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_group_member_info(group_id, user_id, no_cache);
        });
    }
    /**
     *取群成员列表
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {number} group_id
     * @returns {Promise<Array<MemberInfo>>} 响应内容为 JSON 数组，每个元素的内容和上面的 /get_group_member_info 接口相同，但对于同一个群组的同一个成员，获取列表时和获取单独的成员信息时，某些字段可能有所不同，例如 area、title 等字段在获取列表时无法获得，具体应以单独的成员信息为准。
     * @memberof CoolQ
     */
    getGroupMemberList(group_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_group_member_list(group_id);
        });
    }
    /**
     *取Cookies;Auth=20 慎用,此接口需要严格授权
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<string>}
     * @memberof CoolQ
     */
    getCookies() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_cookies();
        });
    }
    /**
     *取CsrfToken Auth=20 即QQ网页用到的bkn/g_tk等 慎用,此接口需要严格授权 //getCsrfToken
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<string>}
     * @memberof CoolQ
     */
    getCsrfToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_csrf_token();
        });
    }
    /**
   * 接收语音。
   * 其实并不是真的获取语音，而是转换语音到指定的格式，然后返回语音文件名（data\record 目录下）。注意，要使用此接口，需要安装 酷Q 的 语音组件。
   * @author CaoMeiYouRen
   * @date 2019-07-13
   * @param {string} file 收到的语音文件名（CQ 码的 file 参数），如 0B38145AA44505000B38145AA4450500.silk
   * @param {string} out_format 要转换到的格式，目前支持 mp3、amr、wma、m4a、spx、ogg、wav、flac
   * @param {boolean} full_path 是否返回文件的绝对路径（Windows 环境下建议使用，Docker 中不建议）
   * @returns {Promise<string>} 转换后的语音文件名或路径，如 0B38145AA44505000B38145AA4450500.mp3，如果开启了 full_path，则如 C:\Apps\CoolQ\data\record\0B38145AA44505000B38145AA4450500.mp3
   * @memberof CoolQ
   */
    getRecord(file, out_format, full_path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_record(file, out_format, full_path);
        });
    }
    /**
     *接收图片；
     *Auth=30 收到的图片文件名（CQ 码的 file 参数），如 6B4DE3DFD1BD271E3297859D41C530F5.jpg
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {string} file
     * @returns {Promise<string>} 下载后的图片文件路径，如 C:\Apps\CoolQ\data\image\6B4DE3DFD1BD271E3297859D41C530F5.jpg
     * @memberof CoolQ
     */
    getImage(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_image(file);
        });
    }
    /**
     *是否可以发送图片
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<boolean>}
     * @memberof CoolQ
     */
    canSendImage() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.can_send_image();
        });
    }
    /**
   *是否可以发送语音
   *
   * @author CaoMeiYouRen
   * @date 2019-07-13
   * @returns {Promise<boolean>}
   * @memberof CoolQ
   */
    canSendRecord() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.can_send_record();
        });
    }
    /**
     *取插件运行状态
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<HttpApiStatus>} 通常情况下建议只使用 online 和 good 这两个字段来判断运行状态，因为随着插件的更新，其它字段有可能频繁变化。
     * @memberof CoolQ
     */
    getStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_status();
        });
    }
    /**
     *取 酷Q 及 HTTP API 插件的版本信息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<HttpApiInfo>}
     * @memberof CoolQ
     */
    getVersionInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get_version_info();
        });
    }
    /**
     *重启 HTTP API 插件；
     *由于重启插件同时需要重启 API 服务，这意味着当前的 API 请求会被中断，因此需在异步地重启插件，接口返回的 status 是 async。
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {number} [delay=0]
     * @returns
     * @memberof CoolQ
     */
    setRestartPlugin(delay = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.set_restart_plugin(delay);
        });
    }
    /**
     *清理数据目录
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {string} data_dir 要清理的目录名，支持 image、record、show、bface
     * @returns
     * @memberof CoolQ
     */
    cleanDataDir(data_dir) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clean_data_dir(data_dir);
        });
    }
    /**
     *清理插件日志
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns
     * @memberof CoolQ
     */
    cleanPluginLog() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clean_plugin_log();
        });
    }
}
exports.CoolQ = CoolQ;
