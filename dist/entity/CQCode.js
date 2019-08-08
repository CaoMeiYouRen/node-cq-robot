"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint no-param-reassign: 0 */
const utils_1 = require("../utils");
const cq_websocket_1 = require("cq-websocket");
/**
 * CQ码专用类
 *
 * @author CaoMeiYouRen
 * @date 2019-07-09
 * @export
 * @class CQCode
 */
class CQCode {
    /**
     * 特殊字符，转义，避免冲突
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {string} code 要转义的字符串
     * @param {boolean} [isComma=true] 是否转义逗号，默认为true
     * @returns {string} 转义后的字符串
     * @memberof CQCode
     */
    encode(code, isComma = true) {
        code = code.replace('&', '&amp;');
        code = code.replace('[', '&#91;');
        code = code.replace(']', '&#93;');
        if (isComma) {
            code = code.replace(',', '&#44;');
        }
        return code;
    }
    /**
     *特殊字符，反转义
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {string} code stringReplace
     * @returns {string} 反转义后的字符串
     * @memberof CQCode
     */
    decode(code) {
        code = code.replace('&amp;', '&');
        code = code.replace('&#91;', '[');
        code = code.replace('&#93;', ']');
        code = code.replace('&#44;', ',');
        return code;
    }
    /**
     *  QQ表情(face)
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {number} id 表情ID
     * @returns {string}
     * @memberof CQCode
     */
    face(id) {
        return new cq_websocket_1.CQFace(id).toString();
    }
    /**
     * emoji表情(emoji)
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {number} id 表情ID
     * @returns {string}
     * @memberof CQCode
     */
    emoji(id) {
        return new cq_websocket_1.CQEmoji(id).toString();
    }
    /**
     * @某人(at)
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {number} qqId -1 为全体
     * @param {boolean} [isNoSpace=false] 默认为假 At后添加空格，可使At更规范美观。如果不需要添加空格，请置本参数为true
     * @returns {string}
     * @memberof CQCode
     */
    at(qqId, isNoSpace = false) {
        return `[CQ:at,qq=${qqId === -1 ? 'all' : qqId}]${isNoSpace ? '' : ' '}`;
        // return new CQAt(qqId).toString() + (isNoSpace ? '' : ' ')
    }
    /**
     * 窗口抖动(shake) - 仅支持好友
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @returns {string}
     * @memberof CQCode
     */
    shake() {
        return new cq_websocket_1.CQShake().toString();
    }
    /**
     * 匿名发消息(anonymous) - 仅支持群。
     * 是否不强制，如果希望匿名失败时，将消息转为普通消息发送(而不是取消发送)，请置本参数为true。
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {boolean} ignore 是否不强制
     * @returns {string}
     * @memberof CQCode
     */
    anonymous(ignore = false) {
        return new cq_websocket_1.CQAnonymous(ignore).toString();
        // return `[CQ:anonymous${ignore ? ',ignore=true' : ''}]`
    }
    /**
     *发送音乐(music)
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {number} musicId 音乐的歌曲数字ID
     * @param {('' | 'qq' | '163' | 'xiami')}  [type=''] 目前支持 qq/QQ音乐 163/网易云音乐 xiami/虾米音乐，默认为qq
     * @param {boolean} [style=false] 启用新版样式，目前仅 QQ音乐 支持
     * @returns {string}
     * @memberof CQCode
     */
    music(musicId, type = '', style = false) {
        return `[CQ:music,id=${musicId},type=${type ? type : 'qq'}${style ? ',style=1' : ''}]`;
    }
    /**
     * 发送音乐自定义分享
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {string} url 分享链接,点击分享后进入的音乐页面（如歌曲介绍页）
     * @param {string} audio 音频链接,音乐的音频链接（如mp3链接）
     * @param {string} title 标题,音乐的标题，建议12字以内
     * @param {string} content 内容,音乐的简介，建议30字以内
     * @param {string} image 封面图片链接,音乐的封面图片链接，留空则为默认图片
     * @returns {string}
     * @memberof CQCode
     */
    customMusic(url, audio, title = '', content = '', image = '') {
        return new cq_websocket_1.CQCustomMusic(this.encode(url), this.encode(audio), this.encode(title), this.encode(content), this.encode(image)).toString();
    }
    /**
     * 发送名片分享(contact)
     *
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {('qq' | 'group')} type 类型 目前支持 qq/好友分享 group/群分享
     * @param {number} id 类型为qq，则为QQID；类型为group，则为群号
     * @returns {string}
     * @memberof CQCode
     */
    contact(type, id) {
        return `[CQ:contact,type=${type},id=${id}]`;
    }
    /**
     * 发送链接分享(share)
     *
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {string} url 分享的链接
     * @param {string} [title=''] 分享的标题，建议12字以内
     * @param {string} [content=''] 分享的简介，建议30字以内
     * @param {string} [image=''] 分享的图片链接，留空则为默认图片
     * @returns {string}
     * @memberof CQCode
     */
    share(url, title = '', content = '', image = '') {
        return new cq_websocket_1.CQShare(this.encode(url), this.encode(title), this.encode(content), this.encode(image)).toString();
    }
    /**
     * 发送位置分享(location)
     *
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {number} lat 纬度
     * @param {number} lon 经度
     * @param {number} [zoom=15] 放大倍数
     * @param {string} title 地点名称，建议12字以内
     * @param {string} content 地址，建议20字以内
     * @returns {string}
     * @memberof CQCode
     */
    location(lat, lon, zoom = 15, title, content) {
        let para = `[CQ:location,lat=${lat},lon=${lon}`;
        if (zoom > 0) {
            para += `,zoom=${zoom}`;
        }
        // para += `,title=${this.encode(title)},content=${content}]`
        para += `,title=${this.encode(title)},content=${this.encode(content)}]`;
        return para;
    }
    /**
     * 发送图片(image)
     * 1.原生：将图片放在 酷Q的 data\image 下，并填写相对路径。如 data\image\1.jpg 则填写 1.jpg；
     * 2.增强：增强 CQ 码支持设置 file 为http/https/file协议，可以发送网络和本地文件系统中其它地方的图片、语音；
     * 增强 CQ 码详见https://cqhttp.cc/docs/4.10/#/CQCode
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {string} file 文件路径
     * @param {boolean} [cache=true] 是否使用缓存，默认为true
     * @returns {string}
     * @memberof CQCode
     */
    image(file, cache = true) {
        return new cq_websocket_1.CQImage(this.encode(file), cache).toString();
    }
    /**
     * 发送语音(record)
     * 1.原生：将语音放在 data\record 下，并填写相对路径。如 data\record\1.amr 则填写 1.amr；
     * 2.增强：增强 CQ 码支持设置 file 为http/https/file协议，可以发送网络和本地文件系统中其它地方的图片、语音；
     * 增强 CQ 码详见https://cqhttp.cc/docs/4.10/#/CQCode
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {string} file 文件路径
     * @param {boolean} [magic=false] 是否是魔法语音
     * @returns {string}
     * @memberof CQCode
     */
    record(file, magic = false) {
        return new cq_websocket_1.CQRecord(this.encode(file), magic).toString();
    }
    /**
     * 从CQ码中获取图片的路径，如 [CQ:image,file=1.jpg] 则返回 1.jpg;
     * 失败返回空字符串
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {string} code CQ码
     * @returns {string}
     * @memberof CQCode
     */
    getImage(code) {
        if (code.includes('url=')) { // 考虑到增强 CQ 码多了一个url字段，因此不能直接分割字符串
            return utils_1.getMidStr(code, '[CQ:image,file=', ',url='); // url不为空的情况下
        }
        return utils_1.getMidStr(code, '[CQ:image,file=', ']');
    }
    /**
     * 从CQ码中获取语音的路径，如 [CQ:record,file=1.amr] 则返回 1.amr;
     * 失败返回空字符串
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {string} code CQ码
     * @returns {string}
     * @memberof CQCode
     */
    getRecord(code) {
        if (code.includes('url=')) { // 考虑到增强 CQ 码多了一个url字段，因此不能直接分割字符串
            return utils_1.getMidStr(code, '[CQ:record,file=', ',url='); // url不为空的情况下
        }
        return utils_1.getMidStr(code, '[CQ:record,file=', ']');
    }
}
exports.CQCode = CQCode;
