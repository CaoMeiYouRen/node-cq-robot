"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 取出中间文本;
 * 不含前后参考文本；如果未找到前后文本则返回空文本;
 * 若 end 在 start 前，返回空;
 * end 从 start 后的第一个取起
 * @author CaoMeiYouRen
 * @date 2019-07-10
 * @export
 * @param {string} str 源文本
 * @param {string} start 前参考文本
 * @param {string} end 后参考文本
 * @returns {string} 要取出的中间文本
 */
function getMidStr(str, start, end) {
    let res;
    let temp;
    let startIndex = str.indexOf(start);
    let endIndex = str.indexOf(end);
    if (startIndex === -1 || endIndex === -1) {
        return '';
    }
    else {
        startIndex = startIndex + start.length; // startIndex的位置是sStart最左字符的位置，因此加上长度
    }
    if (start.includes(end)) { // end是start的子串
        temp = str.substring(startIndex, str.length);
        endIndex = temp.indexOf(end) + startIndex;
    }
    if (startIndex > endIndex) {
        return '';
    }
    res = str.substring(startIndex, endIndex);
    return res;
}
exports.getMidStr = getMidStr;
