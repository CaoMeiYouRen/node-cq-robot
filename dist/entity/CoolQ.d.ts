import { CQWebSocket, CQWebSocketOption } from 'cq-websocket';
import { CQCode, CQMessage, CQOption, GroupInfo, QQInfo, MemberInfo, HttpApiInfo, HttpApiStatus } from './index';
/**
 *
 * 获取CQ的配置
 * @export
 * @param {string} cqPath 路径
 * @returns {CQOption}
 */
export declare function getCQOption(cqPath: string): CQOption;
/**
 *
 * 初始化CQWebSocket
 * @export
 * @param {CQWebSocketOption} option
 */
export declare function CQWebSocketInit(option: CQWebSocketOption): CQWebSocket;
/**
 * CoolQ 操作的核心类
 * @author CaoMeiYouRen
 * @date 2019-07-07
 * @export
 * @class CoolQ
 */
export declare class CoolQ {
    /**
     * CoolQ构造函数
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {string} APP_ID
     * @param {string} dirname 应用根目录，即index.ts中的__dirname
     * @param {boolean} [debug=false] 调试模式
     * @memberof CoolQ
     */
    constructor(APP_ID: string, dirname: string, debug?: boolean);
    /**
     * CQ码
     *
     * @type {CQCode}
     * @memberof CoolQ
     */
    CQCode: CQCode;
    /**
     * 插件配置
     *
     * @type {CQOption}
     * @memberof CoolQ
     */
    appOption: CQOption;
    /**
    * 应用ID
    *
    * @type {string}
    * @memberof CoolQ
    */
    APP_ID: string;
    /**
     * 是否为调试模式。默认false
     *
     * @type {boolean}
     * @memberof CoolQ
     */
    debug: boolean;
    /**
     *
     * 应用目录
     * @type {string}
     * @memberof CoolQ
     */
    appDirectory: string;
    /**
    * 设置环境模式，用于区分生产环境和开发环境。
    *
    * @export
    * @param {boolean} debug
    */
    setDebug(debug: boolean): void;
    /**
     * 获取当前环境模式
     *
     * @export
     * @returns {boolean}
     */
    getDebug(): boolean;
    /**
     *
     * 在控制台调试输出日志。不推荐使用本方法,请使用log开头的方法
     * @param {LogLevel} level
     * @param {string} type
     * @param {string} content
     * @memberof CoolQ
     */
    private addLog;
    /**
     * 调试日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logDebug(type: string, content: string): 0;
    /**
     * 信息日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfo(type: string, content: string): 0;
    /**
     * 接受信息日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfoRecv(type: string, content: string): 0;
    /**
     *
     * 发送信息日志
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfoSend(type: string, content: string): 0;
    /**
     * 发送成功日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logInfoSuccess(type: string, content: string): 0;
    /**
     * 警告日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logWarning(type: string, content: string): 0;
    /**
     * 错误日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logError(type: string, content: string): 0;
    /**
     * 致命错误日志
     *
     * @param {string} type
     * @param {string} content
     * @returns {0}
     * @memberof CoolQ
     */
    logFatal(type: string, content: string): 0;
    /**
   *
   * 酷Q基本操作（通过api方式调用）
   * @param {string} opName 操作名称
   * @param {Record<string, any>} param 参数
   * @param {number} [auth] 权限
   * @returns 对于无返回数据的仅返回状态码(retcode)，有返回数据的返回整个响应内容
   */
    private cqBasicOperate;
    /**
     * 取应用目录
     * 返回的路径末尾带 \\ 或 /
     * @returns {string}
     * @memberof CoolQ
     */
    getAppDirectory(): string;
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
    send_private_msg(user_id: number, message: string | CQMessage | Array<CQMessage>): Promise<number>;
    /**
     * 发送群消息
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {number} group_id 群号
     * @param {(string | CQMessage | Array<CQMessage>)} message 要发送的内容，支持纯文本和数组格式
     * @returns 成功返回message_id，失败返回retcode
     * @memberof CoolQ
     */
    send_group_msg(group_id: number, message: string | CQMessage | Array<CQMessage>): Promise<number>;
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
    send_discuss_msg(discuss_id: number, message: string | CQMessage | Array<CQMessage>): Promise<number>;
    /**
     * 撤回消息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @param {number} message_id 消息 ID
     * @returns
     * @memberof CoolQ
     */
    delete_msg(message_id: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     * 发送好友赞
     *
     * @param {number} user_id  对方 QQ 号
     * @param {number} times 赞的次数，每个好友每天最多 10 次，默认为1
     * @returns
     */
    send_like(user_id: number, times?: number): Promise<any>;
    /**
     * 群组踢人
     *
     * @param {number} group_id 群号
     * @param {number} user_id  要踢的 QQ 号
     * @param {boolean} [reject_add_request=false] 拒绝此人的加群请求
     * @returns
     */
    set_group_kick(group_id: number, user_id: number, reject_add_request?: boolean): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     * 群组单人禁言
     *
     * @param {number} group_id 群号
     * @param {number} user_id  要禁言的 QQ 号
     * @param {number} [duration=30 * 60] 禁言时长，单位秒，0 表示取消禁言
     * @returns
     */
    set_group_ban(group_id: number, user_id: number, duration?: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     * 群组匿名用户禁言
     *
     * @param {number} group_id 群号
     * @param {string} anonymous_flag  要禁言的匿名用户的 flag（需从群消息上报的数据中获得）
     * @param {number}[duration=30 * 60] 禁言时长，单位秒，0 表示取消禁言
     * @returns
     */
    set_group_anonymous_ban(group_id: number, anonymous_flag: string, duration?: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     *
     * 群组全员禁言
     * @param {number} group_id 群号
     * @param {boolean} [enable=true] 是否禁言
     * @returns
     */
    set_group_whole_ban(group_id: number, enable?: boolean): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     * 群组设置管理员
     * @param {number} group_id 群号
     * @param {number} user_id
     * @param {boolean} [enable=true] 是否禁言
     * @returns
     */
    set_group_admin(group_id: number, user_id: number, enable?: boolean): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     * 群组匿名
     * @param {number} group_id 群号
     * @param {boolean} [enable=true] 是否允许匿名聊天
     * @returns
     */
    set_group_anonymous(group_id: number, enable?: boolean): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     * 设置群名片（群备注）
     * @param {number} group_id 群号
     * @param {number} user_id 要设置的 QQ 号
     * @param {string} card 群名片内容，不填或空字符串表示删除群名片
     * @returns
     */
    set_group_card(group_id: number, user_id: number, card?: string): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     * 退出群组
     * @param {number} group_id 群号
     * @param {boolean} is_dismiss 是否解散，如果登录号是群主，则仅在此项为 true 时能够解散
     * @returns
     */
    set_group_leave(group_id: number, is_dismiss?: boolean): Promise<number | import("cq-websocket").APIResponse<unknown>>;
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
    set_group_special_title(group_id: number, user_id: number, special_title: string, duration: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     * 置讨论组退出
     * Auth=140
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @param {number} discuss_id 讨论组 ID（正常情况下看不到，需要从讨论组消息上报的数据中获得
     * @returns
     * @memberof CoolQ
     */
    set_discuss_leave(discuss_id: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
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
    set_friend_add_request(flag: string, approve: boolean, remark: string): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     * 获取登录号信息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @returns {Promise<{ user_id: number; nickname: string; }>}
     * @memberof CoolQ
     */
    get_login_info(): Promise<{
        user_id: number;
        nickname: string;
    }>;
    /**
     * 取登录QQ
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @returns {Promise<number>}
     * @memberof CoolQ
     */
    get_login_qq(): Promise<number>;
    /**
     *取登录昵称
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @returns {Promise<string>}
     * @memberof CoolQ
     */
    get_login_nick(): Promise<string>;
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
    get_stranger_info(user_id: number, no_cache?: boolean): Promise<QQInfo>;
    /**
     * 获取群列表
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<Array<GroupInfo>>}
     * @memberof CoolQ
     */
    get_group_list(): Promise<Array<GroupInfo>>;
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
    get_group_member_info(group_id: number, user_id: number, no_cache?: boolean): Promise<MemberInfo>;
    /**
     *取群成员列表
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {number} group_id
     * @returns {Promise<Array<MemberInfo>>} 响应内容为 JSON 数组，每个元素的内容和上面的 /get_group_member_info 接口相同，但对于同一个群组的同一个成员，获取列表时和获取单独的成员信息时，某些字段可能有所不同，例如 area、title 等字段在获取列表时无法获得，具体应以单独的成员信息为准。
     * @memberof CoolQ
     */
    get_group_member_list(group_id: number): Promise<Array<MemberInfo>>;
    /**
     *取Cookies;Auth=20 慎用,此接口需要严格授权
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<string>}
     * @memberof CoolQ
     */
    get_cookies(): Promise<string>;
    /**
     *取CsrfToken Auth=20 即QQ网页用到的bkn/g_tk等 慎用,此接口需要严格授权 //getCsrfToken
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<string>}
     * @memberof CoolQ
     */
    get_csrf_token(): Promise<number>;
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
    get_record(file: string, out_format: string, full_path?: boolean): Promise<string>;
    /**
     *接收图片；
     *Auth=30 收到的图片文件名（CQ 码的 file 参数），如 6B4DE3DFD1BD271E3297859D41C530F5.jpg
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {string} file
     * @returns {Promise<string>} 下载后的图片文件路径，如 C:\Apps\CoolQ\data\image\6B4DE3DFD1BD271E3297859D41C530F5.jpg
     * @memberof CoolQ
     */
    get_image(file: string): Promise<string>;
    /**
     *是否可以发送图片
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<boolean>}
     * @memberof CoolQ
     */
    can_send_image(): Promise<boolean>;
    /**
    *是否可以发送语音
    *
    * @author CaoMeiYouRen
    * @date 2019-07-13
    * @returns {Promise<boolean>}
    * @memberof CoolQ
    */
    can_send_record(): Promise<boolean>;
    /**
     *取插件运行状态
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<HttpApiStatus>} 通常情况下建议只使用 online 和 good 这两个字段来判断运行状态，因为随着插件的更新，其它字段有可能频繁变化。
     * @memberof CoolQ
     */
    get_status(): Promise<HttpApiStatus>;
    /**
     *取 酷Q 及 HTTP API 插件的版本信息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<HttpApiInfo>}
     * @memberof CoolQ
     */
    get_version_info(): Promise<HttpApiInfo>;
    /**
     *重启 HTTP API 插件；
     *由于重启插件同时需要重启 API 服务，这意味着当前的 API 请求会被中断，因此需在异步地重启插件，接口返回的 status 是 async。
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {number} [delay=0]
     * @returns
     * @memberof CoolQ
     */
    set_restart_plugin(delay?: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     *清理数据目录
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {string} data_dir 要清理的目录名，支持 image、record、show、bface
     * @returns
     * @memberof CoolQ
     */
    clean_data_dir(data_dir: 'image' | 'record' | 'show' | 'bface'): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     *清理插件日志
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns
     * @memberof CoolQ
     */
    clean_plugin_log(): Promise<number | import("cq-websocket").APIResponse<unknown>>;
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
    sendPrivateMsg(user_id: number, message: string | CQMessage | Array<CQMessage>): Promise<number>;
    /**
    * 发送群消息
    * @author CaoMeiYouRen
    * @date 2019-07-10
    * @param {number} group_id 群号
    * @param {(string | CQMessage | Array<CQMessage>)} message 要发送的内容，支持纯文本和数组格式
    * @returns 成功返回message_id，失败返回retcode
    * @memberof CoolQ
    */
    sendGroupMsg(group_id: number, message: string | CQMessage | Array<CQMessage>): Promise<number>;
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
    sendDiscussMsg(discuss_id: number, message: string | CQMessage | Array<CQMessage>): Promise<number>;
    /**
    * 撤回消息
    *
    * @author CaoMeiYouRen
    * @date 2019-07-12
    * @param {number} message_id 消息 ID
    * @returns
    * @memberof CoolQ
    */
    deleteMsg(message_id: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
    * 发送好友赞
    *
    * @param {number} user_id  对方 QQ 号
    * @param {number} times 赞的次数，每个好友每天最多 10 次，默认为1
    * @returns
    */
    sendLike(user_id: number, times?: number): Promise<any>;
    /**
    * 群组踢人
    *
    * @param {number} group_id 群号
    * @param {number} user_id  要踢的 QQ 号
    * @param {boolean} [reject_add_request=false] 拒绝此人的加群请求
    * @returns
    */
    setGroupKick(group_id: number, user_id: number, reject_add_request?: boolean): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     * 群组单人禁言
     *
     * @param {number} group_id 群号
     * @param {number} user_id  要禁言的 QQ 号
     * @param {number} [duration=30 * 60] 禁言时长，单位秒，0 表示取消禁言
     * @returns
     */
    setGroupBan(group_id: number, user_id: number, duration?: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
   * 群组匿名用户禁言
   *
   * @param {number} group_id 群号
   * @param {string} anonymous_flag  要禁言的匿名用户的 flag（需从群消息上报的数据中获得）
   * @param {number}[duration=30 * 60] 禁言时长，单位秒，0 表示取消禁言
   * @returns
   */
    setGroupAnonymousBan(group_id: number, anonymous_flag: string, duration?: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     *
     * 群组全员禁言
     * @param {number} group_id 群号
     * @param {boolean} [enable=true] 是否禁言
     * @returns
     */
    setGroupWholeBan(group_id: number, enable?: boolean): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     * 群组设置管理员
     * @param {number} group_id 群号
     * @param {number} user_id
     * @param {boolean} [enable=true] 是否禁言
     * @returns
     */
    setGroupAdmin(group_id: number, user_id: number, enable?: boolean): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
      * 群组匿名
      * @param {number} group_id 群号
      * @param {boolean} [enable=true] 是否允许匿名聊天
      * @returns
      */
    setGroupAnonymous(group_id: number, enable?: boolean): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
    * 设置群名片（群备注）
    * @param {number} group_id 群号
    * @param {number} user_id 要设置的 QQ 号
    * @param {string} card 群名片内容，不填或空字符串表示删除群名片
    * @returns
    */
    setGroupCard(group_id: number, user_id: number, card?: string): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
    * 退出群组
    * @param {number} group_id 群号
    * @param {boolean} is_dismiss 是否解散，如果登录号是群主，则仅在此项为 true 时能够解散
    * @returns
    */
    setGroupLeave(group_id: number, is_dismiss?: boolean): Promise<number | import("cq-websocket").APIResponse<unknown>>;
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
    setGroupSpecialTitle(group_id: number, user_id: number, special_title: string, duration: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
    * 置讨论组退出
    * Auth=140
    * @author CaoMeiYouRen
    * @date 2019-07-12
    * @param {number} discuss_id 讨论组 ID（正常情况下看不到，需要从讨论组消息上报的数据中获得
    * @returns
    * @memberof CoolQ
    */
    setDiscussLeave(discuss_id: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
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
    setFriendAddRequest(flag: string, approve: boolean, remark: string): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
    * 获取登录号信息
    *
    * @author CaoMeiYouRen
    * @date 2019-07-12
    * @returns {Promise<{ user_id: number; nickname: string; }>}
    * @memberof CoolQ
    */
    getLoginInfo(): Promise<{
        user_id: number;
        nickname: string;
    }>;
    /**
    * 取登录QQ
    *
    * @author CaoMeiYouRen
    * @date 2019-07-12
    * @returns {Promise<number>}
    * @memberof CoolQ
    */
    getLoginQq(): Promise<number>;
    /**
   *取登录昵称
   *
   * @author CaoMeiYouRen
   * @date 2019-07-12
   * @returns {Promise<string>}
   * @memberof CoolQ
   */
    getLoginNick(): Promise<string>;
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
    getStrangerInfo(user_id: number, no_cache?: boolean): Promise<QQInfo>;
    /**
    * 获取群列表
    *
    * @author CaoMeiYouRen
    * @date 2019-07-13
    * @returns {Promise<Array<GroupInfo>>}
    * @memberof CoolQ
    */
    getGroupList(): Promise<Array<GroupInfo>>;
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
    getGroupMemberInfo(group_id: number, user_id: number, no_cache: boolean): Promise<MemberInfo>;
    /**
     *取群成员列表
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {number} group_id
     * @returns {Promise<Array<MemberInfo>>} 响应内容为 JSON 数组，每个元素的内容和上面的 /get_group_member_info 接口相同，但对于同一个群组的同一个成员，获取列表时和获取单独的成员信息时，某些字段可能有所不同，例如 area、title 等字段在获取列表时无法获得，具体应以单独的成员信息为准。
     * @memberof CoolQ
     */
    getGroupMemberList(group_id: number): Promise<Array<MemberInfo>>;
    /**
     *取Cookies;Auth=20 慎用,此接口需要严格授权
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<string>}
     * @memberof CoolQ
     */
    getCookies(): Promise<string>;
    /**
     *取CsrfToken Auth=20 即QQ网页用到的bkn/g_tk等 慎用,此接口需要严格授权 //getCsrfToken
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<string>}
     * @memberof CoolQ
     */
    getCsrfToken(): Promise<number>;
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
    getRecord(file: string, out_format: string, full_path: boolean): Promise<string>;
    /**
     *接收图片；
     *Auth=30 收到的图片文件名（CQ 码的 file 参数），如 6B4DE3DFD1BD271E3297859D41C530F5.jpg
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {string} file
     * @returns {Promise<string>} 下载后的图片文件路径，如 C:\Apps\CoolQ\data\image\6B4DE3DFD1BD271E3297859D41C530F5.jpg
     * @memberof CoolQ
     */
    getImage(file: string): Promise<string>;
    /**
     *是否可以发送图片
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<boolean>}
     * @memberof CoolQ
     */
    canSendImage(): Promise<boolean>;
    /**
   *是否可以发送语音
   *
   * @author CaoMeiYouRen
   * @date 2019-07-13
   * @returns {Promise<boolean>}
   * @memberof CoolQ
   */
    canSendRecord(): Promise<boolean>;
    /**
     *取插件运行状态
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<HttpApiStatus>} 通常情况下建议只使用 online 和 good 这两个字段来判断运行状态，因为随着插件的更新，其它字段有可能频繁变化。
     * @memberof CoolQ
     */
    getStatus(): Promise<HttpApiStatus>;
    /**
     *取 酷Q 及 HTTP API 插件的版本信息
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns {Promise<HttpApiInfo>}
     * @memberof CoolQ
     */
    getVersionInfo(): Promise<HttpApiInfo>;
    /**
     *重启 HTTP API 插件；
     *由于重启插件同时需要重启 API 服务，这意味着当前的 API 请求会被中断，因此需在异步地重启插件，接口返回的 status 是 async。
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {number} [delay=0]
     * @returns
     * @memberof CoolQ
     */
    setRestartPlugin(delay?: number): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     *清理数据目录
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @param {string} data_dir 要清理的目录名，支持 image、record、show、bface
     * @returns
     * @memberof CoolQ
     */
    cleanDataDir(data_dir: 'image' | 'record' | 'show' | 'bface'): Promise<number | import("cq-websocket").APIResponse<unknown>>;
    /**
     *清理插件日志
     *
     * @author CaoMeiYouRen
     * @date 2019-07-13
     * @returns
     * @memberof CoolQ
     */
    cleanPluginLog(): Promise<number | import("cq-websocket").APIResponse<unknown>>;
}
