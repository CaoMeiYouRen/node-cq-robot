import { CQAppAbstract } from './CQAppAbstract';
import { CQListener } from './CQListener';
import { CoolQ } from '../entity/CoolQ';
import { CQFile } from '../entity/CQFile';
/**
 *  CQ应用
 *
 * @author CaoMeiYouRen
 * @date 2019-07-09
 * @export
 * @class CQApp
 * @implements {CQAppAbstract}
 */
export declare class CQApp extends CQAppAbstract implements CQListener {
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
    constructor(APP_ID: string, dirname: string, debug?: boolean, HTTP_API_VER?: number, CQ_API_VER?: number);
    CQ: CoolQ;
    APP_ID: string;
    CQ_API_VER: number;
    HTTP_API_VER: number;
    isEnable: boolean;
    appDirectory: string;
    /**
     * 本函数请勿继承覆盖
     * 返回应用的API_VER、APP_ID、HTTP_API_VER
     * @author CaoMeiYouRen
     * @date 2019-07-08
     * @abstract
     * @returns {{ CQ_API_VER: number, APP_ID: string, HTTP_API_VER: number }}
     * @memberof CQApp
     */
    protected appInfo(): {
        CQ_API_VER: number;
        APP_ID: string;
        HTTP_API_VER: number;
    };
    debug(): void;
    startup(): 0;
    exit(): 0;
    enable(): 0;
    disable(): 0;
    privateMsg(subType: string, msgId: number, fromQQ: number, msg: string, font: number): Promise<0 | 1>;
    groupMsg(subType: string, msgId: number, fromGroup: number, fromQQ: number, fromAnonymous: string, msg: string, font: number): Promise<0 | 1>;
    discussMsg(subType: string, msgId: number, fromDiscuss: number, fromQQ: number, msg: string, font: number): Promise<0 | 1>;
    groupUpload(subType: string, sendTime: number, fromGroup: number, fromQQ: number, file: CQFile): Promise<0 | 1>;
    groupAdmin(subType: string, sendTime: number, fromGroup: number, beingOperateQQ: number): Promise<0 | 1>;
    groupDecrease(subType: string, sendTime: number, fromGroup: number, fromQQ: number, beingOperateQQ: number): Promise<0 | 1>;
    groupIncrease(subType: string, sendTime: number, fromGroup: number, fromQQ: number, beingOperateQQ: number): Promise<0 | 1>;
    friendAdd(subType: string, sendTime: number, fromQQ: number): Promise<0 | 1>;
    requestAddFriend(subType: string, sendTime: number, fromQQ: number, msg: string, responseFlag: string): Promise<0 | 1>;
    requestAddGroup(subType: string, sendTime: number, fromGroup: number, fromQQ: number, msg: string, responseFlag: string): Promise<0 | 1>;
}
