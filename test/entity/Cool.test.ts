import { CoolQ } from '../../src/entity'
import 'should'
import 'chai'
import chai = require('chai')
const assert = chai.assert
describe('CoolQ', () => {
    describe('CoolQ', () => {
        let CQ: CoolQ
        before(() => {
            CQ = new CoolQ('com.example.demo', 'E:\\我的学习\\JS项目开发\\node-cq-robot\\test\\app\\com.example.demo')
        })
        it('APP_ID校验', () => {
            assert.equal(CQ.APP_ID, 'com.example.demo')
        })
        it('开启debug模式', () => {
            CQ.setDebug(true)
            CQ.getDebug().should.equal(true)
        })
        it('获取应用路径', () => {
            CQ.getAppDirectory().includes('app\\ltd.cmyr.js.demo\\data\\').should.be.not.equal(-1)
        })
        it('发送私聊消息', () => {
            CQ.send_private_msg(10001, '测试私聊消息').then(result => {
                result.should.equal(0)
            })
        })
        it('发送群聊消息', () => {
            CQ.send_group_msg(10001, '测试群聊消息').then(result => {
                result.should.equal(0)
            })
        })
        it('发送讨论组消息', () => {
            CQ.send_discuss_msg(10001, '测试讨论组消息').then(result => {
                result.should.equal(0)
            })
        })
    })
})