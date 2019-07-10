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
        // console.log('debug()方法只会在debug模式下执行')
        this.privateMsg('test', 1, 996881204, '这是一条私聊消息', 1)
        this.groupMsg('test', 1, 947983200, 996881204, '', '这是一条群消息', 1)
        this.discussMsg('test', 1, 580771123, 996881204, '这是一条讨论组消息', 1)
        // E:\我的学习\JS项目开发\node.js机器人封装\dist\app\ltd.cmyr.demo\data\
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
    privateMsg(subType: string, msgId: number, fromQQ: number, msg: string, font: number): 0 | 1 {
        if (fromQQ === 996881204) {
            this.CQ.send_private_msg(fromQQ, `你好，这是${this.APP_ID}的回复`)
        }
        return 0
    }
    groupMsg(subType: string, msgId: number, fromGroup: number, fromQQ: number, fromAnonymous: string, msg: string, font: number): 0 | 1 {
        if (fromQQ === 996881204) {
            this.CQ.send_group_msg(fromGroup, `${new CQAt(fromQQ)}你好，这是${this.APP_ID}的回复`)
        }
        return 0
    }
    discussMsg(subType: string, msgId: number, fromDiscuss: number, fromQQ: number, msg: string, font: number): 0 | 1 {
        if (fromQQ === 996881204) {
            this.CQ.send_discuss_msg(fromDiscuss, `${new CQAt(fromQQ)}你发送了：${msg}`)
        }
        return 0
    }
    groupUpload(subType: string, sendTime: number, fromGroup: number, fromQQ: number, file: CQFile): 0 | 1 {
        return 0
    }
    groupAdmin(subType: string, sendTime: number, fromGroup: number, beingOperateQQ: number): 0 | 1 {
        return 0
    }
    groupDecrease(subType: string, sendTime: number, fromGroup: number, fromQQ: number, beingOperateQQ: number): 0 | 1 {
        return 0
    }
    groupIncrease(subType: string, sendTime: number, fromGroup: number, fromQQ: number, beingOperateQQ: number): 0 | 1 {
        return 0
    }
    friendAdd(subType: string, sendTime: number, fromQQ: number): 0 | 1 {
        return 0
    }
    requestAddFriend(subType: string, sendTime: number, fromQQ: number, msg: string, responseFlag: string): 0 | 1 {
        return 0
    }
    requestAddGroup(subType: string, sendTime: number, fromGroup: number, fromQQ: number, msg: string, responseFlag: string): 0 | 1 {
        return 0
    }


}
const ltdCmyrDemo = new LtdCmyrDemo()
export { ltdCmyrDemo }
/**
 *单文件启动时调试，如果不是单独调试请注释掉
 *
 */

