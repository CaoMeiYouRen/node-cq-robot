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
export declare function getMidStr(str: string, start: string, end: string): string;
