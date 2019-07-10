import { CoolQ, CQMessage } from '../../src/entity'
import 'should'
describe('CoolQ', () => {
    let CQ: CoolQ
    before(() => {
        CQ = new CoolQ('com.example.demo', 'E:\\我的学习\\JS项目开发\\node-cq-robot\\test\\app\\com.example.demo')
    })
    describe('api调用', () => {
        it('APP_ID校验', () => {
            CQ.APP_ID.should.equal('com.example.demo')
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
        it('发送私聊消息', () => {
            let msg: CQMessage = { type: 'text', data: { text: '123' }}
            CQ.send_private_msg(10001, msg).then(result => {
                result.should.equal(0)
            })
        })
        it('发送群聊消息', () => {
            let msg: CQMessage = { type: 'text', data: { text: '123' }}
            CQ.send_group_msg(10001, msg).then(result => {
                result.should.equal(0)
            })
        })
        it('发送讨论组消息', () => {
            let msg: CQMessage = { type: 'text', data: { text: '123' }}
            CQ.send_discuss_msg(10001, msg).then(result => {
                result.should.equal(0)
            })
        })

    })
    describe('酷Q码', () => {
        it('转义特殊字符:不转义逗号', () => {
            // console.log(CQ.CQCode.encode('& [ ] ,'));
            CQ.CQCode.encode('& [ ] ,', false).should.equal('&amp; &#91; &#93; ,')
        })
        it('转义特殊字符:转义逗号', () => {
            // CQ.CQCode.encode('', true).should.equal('')
            CQ.CQCode.encode('& [ ] ,').should.equal('&amp; &#91; &#93; &#44;')
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
            CQ.CQCode.anonymous().should.equal('[CQ:anonymous,ignore=false]')
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
            let res = CQ.CQCode.customMusic('https://www.example.com', 'https://www.example.com', '[],&这是一个标题', '这是一段内容', 'https://www.example.com')
            res.should.equal('[CQ:music,type=custom,url=https://www.example.com,audio=https://www.example.com,title=&#91;&#93;&#44;&amp;这是一个标题,content=这是一段内容,image=https://www.example.com]')
        })
        it('发送名片分享(contact)', () => {
            let res = CQ.CQCode.contact('qq', 10001)
            res.should.equal('[CQ:contact,type=qq,id=10001]')
        })
        it('发送链接分享(share)', () => {
            let res = CQ.CQCode.share('https://www.example.com?qq=123&msg=abc', '[],&这是一个标题', '这是一段内容', 'https://www.example.com')
            res.should.equal('[CQ:share,url=https://www.example.com?qq=123&amp;msg=abc,title=&#91;&#93;&#44;&amp;这是一个标题,content=这是一段内容,image=https://www.example.com]')
        })
        it('发送位置分享(location)', () => {
            let res = CQ.CQCode.location(40, 116, 15, '北京', '北京市[],&')
            res.should.equal('[CQ:location,lat=40,lon=116,zoom=15,title=北京,content=北京市&#91;&#93;&#44;&amp;]')
        })
        it('发送位置分享(location)', () => {
            let res = CQ.CQCode.location(40, 116, -1, '北京', '北京市')
            res.should.equal('[CQ:location,lat=40,lon=116,title=北京,content=北京市]')
        })
        it('发送图片(image)', () => {
            CQ.CQCode.image('1.jpg').should.equal('[CQ:image,file=1.jpg]')
        })
        it('发送语音(record)', () => {
            CQ.CQCode.record('1.amr').should.equal('[CQ:record,file=1.amr]')
        })
        it('获取图片路径', () => {
            CQ.CQCode.getImage('[CQ:image,file=1.jpg]').should.equal('1.jpg')
        })
        it('获取图片路径:含url', () => {
            CQ.CQCode.getImage('[CQ:image,file=1.jpg,url=https://www.example.com]').should.equal('1.jpg')
        })
        it('获取语音路径', () => {
            CQ.CQCode.getRecord('[CQ:record,file=1.amr]').should.equal('1.amr')
        })
        it('获取语音路径:含url', () => {
            CQ.CQCode.getRecord('[CQ:record,file=1.amr,url=https://www.example.com]').should.equal('1.amr')
        })
    })
})