"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.CQCode = CQCode;
