"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 导入时间格式化插件cnpm i moment -g
// import moment from 'moment'
const moment = require("moment");
const colors = require("colors");
/**
 * 格式化时间
 * @export
 * @param {(Date | number | string)} [date=Date.now()]
 * @param {string} [pattern='YYYY-MM-DD HH:mm:ss']
 * @returns {string}
 */
function timeFormat(date = Date.now(), pattern = 'YYYY-MM-DD HH:mm:ss') {
    let dateTime = date;
    if (typeof date === 'number') {
        if (date < 1e10) {
            dateTime = date * 1000;
        }
    }
    dateTime = new Date(dateTime);
    return moment(dateTime).format(pattern);
}
exports.timeFormat = timeFormat;
/**
 *
 * 在控制台输出 YYYY-MM-DD HH:mm:ss:SSS->msg 格式的消息
 * @export
 * @param {string} msg
 * @param {number} [level=0]
 */
function printTime(msg, level = 0) {
    // '[cq-robot] ' +
    let time = timeFormat(Date.now(), 'HH:mm:ss.SSS');
    switch (level) {
        case 0:
            console.log(time, '->', colors.gray(msg));
            break;
        case 10:
            console.log(time, '->', msg);
            break;
        case 11:
            console.log(time, '->', colors.cyan(msg));
            break;
        case 12:
            console.log(time, '->', colors.blue(msg));
            break;
        case 13:
            console.log(time, '->', colors.green(msg));
            break;
        case 20:
            console.log(time, '->', colors.yellow(msg));
            break;
        case 30:
            console.log(time, '->', colors.red(msg));
            break;
        case 40:
            console.log(time, '->', colors.magenta(msg));
            break;
    }
}
exports.printTime = printTime;
