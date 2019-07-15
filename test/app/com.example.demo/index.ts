// import * as CQ from '../../bin/CQ.old'
import { CQAt } from 'cq-websocket'
import { CQApp, CQListener } from '../../../src/event'
import { CoolQ, CQFile } from '../../../src/entity'
import fs = require('fs')
import path = require('path')
class LtdCmyrDemo extends CQApp {
    APP_ID: string;
    CQ_API_VER: 9;
    HTTP_API_VER: 4;
    CQ: CoolQ;
    appInfo(): { CQ_API_VER: number; APP_ID: string; HTTP_API_VER: number; } {
        return {
            CQ_API_VER: this.CQ_API_VER,
            APP_ID: this.APP_ID,
            HTTP_API_VER: this.HTTP_API_VER
        }
    }
    isEnable: boolean;
    appDirectory: string;
    constructor() {
        super('com.example.demo', __dirname)
        this.CQ.setDebug(true)// 开启调试模式
    }
    debug(): void {
    }
    startup(): 0 {
        // console.log('与服务器的连接即将建立')
        return 0
    }
    exit(): 0 {
        // console.log('与服务器的连接已经断开')

        return 0
    }
    enable(): 0 {
        // console.log(`应用${this.APP_ID}已启动`)
        this.isEnable = true
        return 0
    }
    disable(): 0 {
        // console.log(`应用${this.APP_ID}已关闭`)
        this.isEnable = false
        return 0
    }
    async privateMsg(subType: string, msgId: number, fromQQ: number, msg: string, font: number): Promise<0 | 1> {
        return 0
    }
    async groupMsg(subType: string, msgId: number, fromGroup: number, fromQQ: number, fromAnonymous: string, msg: string, font: number): Promise<0 | 1> {
        return 0
    }
    async discussMsg(subType: string, msgId: number, fromDiscuss: number, fromQQ: number, msg: string, font: number): Promise<0 | 1> {

        return 0
    }
    async groupUpload(subType: string, sendTime: number, fromGroup: number, fromQQ: number, file: CQFile): Promise<0 | 1> {
        return 0
    }
    async groupAdmin(subType: string, sendTime: number, fromGroup: number, beingOperateQQ: number): Promise<0 | 1> {
        return 0
    }
    async groupDecrease(subType: string, sendTime: number, fromGroup: number, fromQQ: number, beingOperateQQ: number): Promise<0 | 1> {
        return 0
    }
    async groupIncrease(subType: string, sendTime: number, fromGroup: number, fromQQ: number, beingOperateQQ: number): Promise<0 | 1> {
        return 0
    }
    async friendAdd(subType: string, sendTime: number, fromQQ: number): Promise<0 | 1> {
        return 0
    }
    async requestAddFriend(subType: string, sendTime: number, fromQQ: number, msg: string, responseFlag: string): Promise<0 | 1> {
        return 0
    }
    async requestAddGroup(subType: string, sendTime: number, fromGroup: number, fromQQ: number, msg: string, responseFlag: string): Promise<0 | 1> {
        return 0
    }


}
const ltdCmyrDemo = new LtdCmyrDemo()
export { ltdCmyrDemo }
/**
 *单文件启动时调试，如果不是单独调试请注释掉
 *
 */

