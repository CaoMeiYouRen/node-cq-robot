/**
 * CQ码专用类
 *
 * @author CaoMeiYouRen
 * @date 2019-07-09
 * @export
 * @class CQCode
 */
export declare class CQCode {
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
    encode(code: string, isComma?: boolean): string;
    /**
     *特殊字符，反转义
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {string} code stringReplace
     * @returns {string} 反转义后的字符串
     * @memberof CQCode
     */
    decode(code: string): string;
    /**
     *  QQ表情(face)
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {number} id 表情ID
     * @returns {string}
     * @memberof CQCode
     */
    face(id: number): string;
    /**
     * emoji表情(emoji)
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @param {number} id 表情ID
     * @returns {string}
     * @memberof CQCode
     */
    emoji(id: number): string;
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
    at(qqId: number, isNoSpace?: boolean): string;
    /**
     * 窗口抖动(shake) - 仅支持好友
     *
     * @author CaoMeiYouRen
     * @date 2019-07-09
     * @returns {string}
     * @memberof CQCode
     */
    shake(): string;
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
    anonymous(ignore?: boolean): string;
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
    music(musicId: number, type?: '' | 'qq' | '163' | 'xiami', style?: boolean): string;
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
    customMusic(url: string, audio: string, title?: string, content?: string, image?: string): string;
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
    contact(type: 'qq' | 'group', id: number): string;
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
    share(url: string, title?: string, content?: string, image?: string): string;
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
    location(lat: number, lon: number, zoom: number, title: string, content: string): string;
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
    image(file: string, cache?: boolean): string;
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
    record(file: string, magic?: boolean): string;
    /**
     * 从CQ码中获取图片的路径，如 [CQ:image,file=1.jpg] 则返回 1.jpg;
     * 失败返回空字符串
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {string} code CQ码
     * @returns {string}
     * @memberof CQCode
     */
    getImage(code: string): string;
    /**
     * 从CQ码中获取语音的路径，如 [CQ:record,file=1.amr] 则返回 1.amr;
     * 失败返回空字符串
     * @author CaoMeiYouRen
     * @date 2019-07-10
     * @param {string} code CQ码
     * @returns {string}
     * @memberof CQCode
     */
    getRecord(code: string): string;
}
