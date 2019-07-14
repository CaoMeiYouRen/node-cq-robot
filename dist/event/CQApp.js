"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CQAppAbstract_1 = require("./CQAppAbstract");
const CoolQ_1 = require("../entity/CoolQ");
/**
 *  CQ应用
 *
 * @author CaoMeiYouRen
 * @date 2019-07-09
 * @export
 * @class CQApp
 * @implements {CQAppAbstract}
 */
class CQApp extends CQAppAbstract_1.CQAppAbstract {
    /**
     * CQApp构造函数
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {string} APP_ID 应用ID
     * @param {string} dirname 应用的index.ts/index.js文件的__dirname
     * @param {boolean} [debug=false] 是否开启调试模式
     * @param {number} [HTTP_API_VER=4] HTTP_API版本 一旦版本不匹配将停止加载该应用
     * @param {number} [CQ_API_VER=9] 酷Q API 的版本 一旦版本不匹配将停止加载该应用
     * @memberof CQApp
     */
    constructor(APP_ID, dirname, debug = false, HTTP_API_VER = 4, CQ_API_VER = 9) {
        super();
        this.APP_ID = APP_ID;
        this.CQ_API_VER = CQ_API_VER;
        this.HTTP_API_VER = HTTP_API_VER;
        this.CQ = new CoolQ_1.CoolQ(APP_ID, dirname, debug);
        this.isEnable = false;
        this.appDirectory = this.CQ.getAppDirectory();
    }
    /**
     * 本函数请勿继承覆盖
     * 返回应用的API_VER、APP_ID、HTTP_API_VER
     * @author CaoMeiYouRen
     * @date 2019-07-08
     * @abstract
     * @returns {{ CQ_API_VER: number, APP_ID: string, HTTP_API_VER: number }}
     * @memberof CQApp
     */
    appInfo() {
        return {
            CQ_API_VER: this.CQ_API_VER,
            APP_ID: this.APP_ID,
            HTTP_API_VER: this.HTTP_API_VER
        };
    }
    debug() {
    }
    startup() {
        return 0;
    }
    exit() {
        return 0;
    }
    enable() {
        return 0;
    }
    disable() {
        return 0;
    }
    privateMsg(subType, msgId, fromQQ, msg, font) {
        return 0;
    }
    groupMsg(subType, msgId, fromGroup, fromQQ, fromAnonymous, msg, font) {
        return 0;
    }
    discussMsg(subType, msgId, fromDiscuss, fromQQ, msg, font) {
        return 0;
    }
    groupUpload(subType, sendTime, fromGroup, fromQQ, file) {
        return 0;
    }
    groupAdmin(subType, sendTime, fromGroup, beingOperateQQ) {
        return 0;
    }
    groupDecrease(subType, sendTime, fromGroup, fromQQ, beingOperateQQ) {
        return 0;
    }
    groupIncrease(subType, sendTime, fromGroup, fromQQ, beingOperateQQ) {
        return 0;
    }
    friendAdd(subType, sendTime, fromQQ) {
        return 0;
    }
    requestAddFriend(subType, sendTime, fromQQ, msg, responseFlag) {
        return 0;
    }
    requestAddGroup(subType, sendTime, fromGroup, fromQQ, msg, responseFlag) {
        return 0;
    }
}
exports.CQApp = CQApp;
