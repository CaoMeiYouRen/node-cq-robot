import { CoolQ } from '../../src/entity'
import 'should'
import 'chai'
import chai = require('chai')
const assert = chai.assert
describe('CoolQ', () => {
    let CQ: CoolQ
    before(() => {
        CQ = new CoolQ('com.example.demo', 'E:\\我的学习\\JS项目开发\\node-cq-robot\\test\\app\\com.example.demo')
    })
    describe.skip('api调用', () => {
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
    describe('酷Q码', () => {
        it('转义特殊字符:不转义逗号', () => {
            //console.log(CQ.CQCode.encode('& [ ] ,'));
            CQ.CQCode.encode('& [ ] ,').should.equal('&amp; &#91; &#93; ,')
        })
        it('转义特殊字符:转义逗号', () => {
            //CQ.CQCode.encode('', true).should.equal('')
            CQ.CQCode.encode('& [ ] ,', true).should.equal('&amp; &#91; &#93; &#44;')
        })
        it('反转义特殊字符', () => {
            CQ.CQCode.decode('&amp; &#91; &#93; &#44;').should.equal('& [ ] ,')
        })
        it('取QQ表情(face)', () => {
            CQ.CQCode.face(123).should.equal('[CQ:face,id=123]')
        })
        it('@全体成员，有空格', () => {
            CQ.CQCode.at(-1).should.equal('[CQ:at,qq=all] ')
        })
        it('@10001，有空格', () => {
            CQ.CQCode.at(10001).should.equal('[CQ:at,qq=10001] ')
        })
        it('@10001，无空格', () => {
            CQ.CQCode.at(10001, true).should.equal('[CQ:at,qq=10001]')
        })
        it('窗口抖动', () => {
            CQ.CQCode.shake().should.equal('[CQ:shake]')
        })
        it('匿名发消息', () => {
            CQ.CQCode.anonymous().should.equal('[CQ:anonymous]')
        })
        it('匿名发消息:不强制', () => {
            CQ.CQCode.anonymous(true).should.equal('[CQ:anonymous,ignore=true]')
        })
        it('发送音乐(music):qq新版', () => {
            CQ.CQCode.music(123, '', true).should.equal('[CQ:music,id=123,type=qq,style=1]')
        })
        it('发送音乐(music):163', () => {
            CQ.CQCode.music(123, '163').should.equal('[CQ:music,id=123,type=163]')
        })
        it('发送音乐自定义分享', () => {
            let res = CQ.CQCode.customMusic('https://i.y.qq.com&source=qqshare', 'https://i.y.qq.com', '这是一个标题', '哎呦，不错哦', '')
            console.log(res);
        })
    })
})