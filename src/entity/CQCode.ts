/* eslint no-param-reassign: 0 */
import { CQAnonymous, CQAt, CQBFace, CQCustomMusic, CQDice, CQEmoji, CQFace, CQImage, CQMusic, CQRPS, CQRecord, CQSFace, CQShake, CQShare, CQText } from 'cq-websocket'
/**
 * CQ码专用类
 *
 * @author CaoMeiYouRen
 * @date 2019-07-09
 * @export
 * @class CQCode
 */
export class CQCode {
    /**
     * 特殊字符，转义，避免冲突
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {string} code 要转义的字符串
     * @param {boolean} [isComma=false] 是否转义逗号
     * @returns {string} 转义后的字符串
     * @memberof CQCode
     */
    encode(code: string, isComma: boolean = false): string {
        code = code.replace('&', '&amp;')
        code = code.replace('[', '&#91;')
        code = code.replace(']', '&#93;')
        if (isComma) {
            code = code.replace(',', '&#44;')
        }
        return code
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
    decode(code: string): string {
        code = code.replace('&#91;', '[')
        code = code.replace('&#93;', ']')
        code = code.replace('&#44;', ',')
        code = code.replace('&amp;', '&')
        return code
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
    face(id: number): string {
        return new CQFace(id).toString()
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
    emoji(id: number): string {
        return new CQEmoji(id).toString()
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
    at(qqId: number, isNoSpace: boolean = false): string {
        return `[CQ:at,qq=${qqId === -1 ? 'all' : qqId}]${isNoSpace ? '' : ' '}`
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
    shake(): string {
        return new CQShake().toString()
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
    anonymous(ignore: boolean = false): string {
        // return new CQAnonymous(ignore).toString()
        return `[CQ:anonymous${ignore ? ',ignore=true' : ''}]`
    }
    /**
     *发送音乐(music)
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {number} musicId 音乐的歌曲数字ID
     * @param {string} [type=''] 目前支持 qq/QQ音乐 163/网易云音乐 xiami/虾米音乐，默认为qq
     * @param {boolean} [style=false] 启用新版样式，目前仅 QQ音乐 支持
     * @returns {string}
     * @memberof CQCode
     */
    music(musicId: number, type: string = '', style: boolean = false): string {
        return `[CQ:music,id=${musicId},type=${type ? type : 'qq'}${style ? ',style=1' : ''}]`
    }
    /**
     * 发送音乐自定义分享(music)
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
    customMusic(url: string, audio: string, title: string = '', content: string = '', image: string = ''): string {
        // return new CQCustomMusic(this.encode(url, true), audio, title, content, image).toString()
        return ''
    }
    demo(): string {
        return ''
    }
}