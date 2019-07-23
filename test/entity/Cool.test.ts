import { CoolQ, CQMessage } from '../../src/entity'
import path = require('path')
import 'should'
describe('CoolQ', () => {
    let CQ: CoolQ
    before(() => {
        CQ = new CoolQ('com.example.demo', path.join(__dirname, '../app/com.example.demo/'))
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
            CQ.getAppDirectory().includes('app\\com.example.demo\\data\\').should.be.not.equal(-1)
        })
        it('发送私聊消息', () => {
            CQ.sendPrivateMsg(10001, '测试私聊消息').then(result => {
                result.should.equal(0)
            })
        })
        it('发送群聊消息', () => {
            CQ.sendGroupMsg(10001, '测试群聊消息').then(result => {
                result.should.equal(0)
            })
        })
        it('发送讨论组消息', () => {
            CQ.sendDiscussMsg(10001, '测试讨论组消息').then(result => {
                result.should.equal(0)
            })
        })
        it('发送私聊消息', () => {
            let msg: CQMessage = { type: 'text', data: { text: '123' } }
            CQ.sendPrivateMsg(10001, msg).then(result => {
                result.should.equal(0)
            })
        })
        it('发送群聊消息', () => {
            let msg: CQMessage = { type: 'text', data: { text: '123' } }
            CQ.sendGroupMsg(10001, msg).then(result => {
                result.should.equal(0)
            })
        })
        it('发送讨论组消息', () => {
            let msg: CQMessage = { type: 'text', data: { text: '123' } }
            CQ.sendDiscussMsg(10001, msg).then(result => {
                result.should.equal(0)
            })
        })
        it('置调试日志，应该返回0', () => {
            CQ.logDebug('测试', '这是一条测试日志').should.equal(0)
        })
        it('撤回消息，应该返回0', () => {
            CQ.deleteMsg(1).then(result => {
                result.should.equal(0)
            })
        })
        it('发送好友赞，应该返回0', () => {
            CQ.sendLike(10001, 1).then(result => {
                result.should.equal(0)
            })
        })
        it('获取登录号信息', () => {
            CQ.getLoginInfo().then(result => {
                result.nickname.should.equal('酷Q')
                result.user_id.should.equal(10001)
            })
        })
        it('获取陌生人信息', () => {
            CQ.getStrangerInfo(10001, false).then(result => {
                result.user_id.should.equal(10001)
                result.nickname.should.equal('测试昵称')
                result.sex.should.equal('male')
                result.age.should.equal(0)
            })
        })
        it('获取群列表', () => {
            CQ.getGroupList().then(result => {
                result[0].group_id.should.equal(10001)
            })
        })
        it('取群成员信息', () => {
            CQ.getGroupMemberInfo(10001, 10001, false).then(result => {
                result.group_id.should.equal(10001)
                result.level.should.equal('萌新')
            })
        })
        it('取Cookies', () => {
            CQ.getCookies().then(result => {
                result.should.equal('')
            })
        })
        it('取CsrfToken', () => {
            CQ.getCsrfToken().then(result => {
                result.should.equal(0)
            })
        })
        it('是否可以发送图片', () => {
            CQ.canSendImage().then(result => {
                result.should.equal(true)
            })
        })
        it('是否可以发送语音', () => {
            CQ.canSendRecord().then(result => {
                result.should.equal(true)
            })
        })
        it('取插件运行状态', () => {
            CQ.getStatus().then(result => {
                result.online.should.equal(true)
                result.good.should.equal(true)
            })
        })
        it('取酷Q及HTTP_API插件的版本信息', () => {
            CQ.getVersionInfo().then(result => {
                result.coolq_edition.should.equal('air')
                result.plugin_version.should.equal('4.10')
                result.plugin_build_configuration.should.equal('debug')
            })
        })
        it('重启HTTP_API插件', () => {
            CQ.setRestartPlugin().then(result => {
                result.should.equal(1)
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
        it('发送签到(sign)', () => {
            let res = CQ.CQCode.sign('北京[],&', '[],&这是一个标题', 'https://www.example.com?qq=123&msg=abc')
            res.should.equal('[CQ:sign,location=北京&#91;&#93;&#44;&amp;,title=&#91;&#93;&#44;&amp;这是一个标题,image=https://www.example.com?qq=123&amp;msg=abc]')
            // let res = CQ.CQCode.share('https://www.example.com?qq=123&msg=abc', '[],&这是一个标题', '这是一段内容', 'https://www.example.com')
            // res.should.equal('[CQ:share,url=,title=&#91;&#93;&#44;&amp;这是一个标题,content=这是一段内容,image=https://www.example.com]')
        })
    })
})