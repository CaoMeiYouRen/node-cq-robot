"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CQMsg {
}
/**
  * 将此消息继续传递给其他应用
  */
CQMsg.MSG_IGNORE = 0;
/**
 * 拦截此条消息，不再传递给其他应用 //注意：应用优先级设置为"最高"(10000)时，不得使用本返回值
 */
CQMsg.MSG_INTERCEPT = 1;
exports.CQMsg = CQMsg;
