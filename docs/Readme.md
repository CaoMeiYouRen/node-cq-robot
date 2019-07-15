## CoolQ类

酷Q操作的核心类

| 方法                 | 说明                                                         |
| -------------------- | ------------------------------------------------------------ |
| addLog               | 不推荐使用本方法,请使用log开头的方法                         |
| canSendImage         | 是否可以发送图片                                             |
| canSendRecord        | 是否可以发送语音                                             |
| cleanDataDir         | 清理HTTP API数据目录                                         |
| cleanPluginLog       | 清理HTTP API插件日志                                         |
| deleteMsg            | 撤回消息,需Pro版                                             |
| getAnonymous         | 获取匿名信息                                                 |
| getAppDirectory      | 获取应用目录,如果目录不存在则自动创建,目录末尾带 "\"         |
| getCookies           | 获取Cookie,慎用,此接口需要严格授权                           |
| getCsrfToken         | 获取CsrfToken,即QQ网页用到的bkn/g_tk等 慎用,此接口需要严格授权 |
| getGroupList         | 获取群列表                                                   |
| getGroupMemberInfo   | 获取群成员信息                                               |
| getGroupMemberList   | 获取群成员列表                                               |
| getLoginNick         | 获取登录昵称                                                 |
| getLoginQQ           | 获取登录QQ                                                   |
| getRecord            | 接收消息中的语音(record)                                     |
| getStatus            | 取HTTP API插件运行状态                                       |
| getStrangerInfo      | 获取陌生人信息                                               |
| getVersionInfo       | 取 酷Q 及 HTTP API 插件的版本信息                            |
| logDebug             | 添加日志，级别：调试，颜色：灰色                             |
| logError             | 添加日志，级别：错误，颜色：红色                             |
| logFatal             | 添加日志，级别：致命错误，颜色：品红                         |
| logInfo              | 添加日志，级别：信息，颜色：白色                             |
| logInfoRecv          | 添加日志，级别：信息(接收)，颜色：蓝色                       |
| logInfoSend          | 添加日志，级别：信息(发送)，颜色：绿色                       |
| logInfoSuccess       | 添加日志，级别：信息(成功)，颜色：青色                       |
| logWarning           | 添加日志，级别：警告，颜色：黄色                             |
| sendDiscussMsg       | 发送讨论组消息                                               |
| sendGroupMsg         | 发送群消息                                                   |
| sendLike             | 发送手机赞                                                   |
| sendPrivateMsg       | 发送私聊消息                                                 |
| setDiscussLeave      | 退出讨论组                                                   |
| setFriendAddRequest  | 处理好友添加请求                                             |
| setGroupAddRequest   | 处理群添加请求                                               |
| setGroupAdmin        | 设置群管理员                                                 |
| setGroupAnonymous    | 群匿名设置                                                   |
| setGroupAnonymousBan | 禁言匿名群员                                                 |
| setGroupBan          | 禁言群员                                                     |
| setGroupCard         | 设置群成员名片                                               |
| setGroupKick         | 移除群员                                                     |
| setGroupLeave        | 退出QQ群,慎用,此接口需要严格授权                             |
| setGroupSpecialTitle | 设置群成员专属头衔,需群主权限                                |
| setGroupWholeBan     | 全群禁言                                                     |
| setRestartPlugin     | 重启 HTTP API 插件                                           |

## CQCode类
[CQ码](https://d.cqp.me/Pro/CQ码) ，用于辅助开发加快开发效率，以下方法均返回 [CQ码](https://d.cqp.me/Pro/CQ码) 文本

| 方法      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| decode    | 特殊字符，反转义                                             |
| encode    | 特殊字符，转义，避免冲突                                     |
| anonymous | 匿名发消息(anonymous) - 仅支持群                             |
| analysis  | 解析CQ码                                                     |
| at        | 提醒某人，@某人(at)                                          |
| contact   | 发送名片分享(contact)                                        |
| emoji     | emoji表情(emoji)                                             |
| face      | 表情QQ表情(face)                                             |
| image     | 发送图片(image),需Pro版                                      |
| getImage  | 从CQ码中获取图片的路径，如 [CQ:image,file=1.jpg] 则返回 1.jpg |
| location  | 发送位置分享(location)                                       |
| music     | 发送音乐(music)                                              |
| record    | 发送语音(record)                                             |
| getRecord | 从CQ码中获取语音的路径，如 [CQ:record,file=1.amr] 则返回 1.amr |
| shake     | 窗口抖动(shake) - 仅支持好友                                 |
| share     | 发送链接分享(share)                                          |