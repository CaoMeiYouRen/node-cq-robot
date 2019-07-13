/**
 * 接口权限
 * @author CaoMeiYouRen
 * @date 2019-07-07
 * @export
 * @interface IAuth
 */
export interface IAuth {
    /**
     * [敏感]取Cookies,对应CoolQ的方法 getCookies / getCsrfToken
     */
    readonly AUTH_GetCookies: 20;
    /**
     * 接收语音,对应CoolQ的方法 getRecord
     */
    readonly AUTH_GetRecord: 30;
    /**
     * 发送群消息,对应CoolQ的方法 sendGroupMsg
     */
    readonly AUTH_SendGroupMsg: 101;
    /**
     * 发送讨论组消息,对应CoolQ的方法 sendDiscussMsg
     */
    readonly AUTH_SendDiscussMsg: 103;
    /**
     * 发送私聊消息,对应CoolQ方法 sendPrivateMsg
     */
    readonly AUTH_SendPrivateMsg: 106;
    /**
     * 发送赞,对应CoolQ方法 sendLike
     */
    readonly AUTH_SendLike: 110;
    /**
     * 置群员移除,对应CoolQ方法 setGroupKick
     */
    readonly AUTH_SetGroupKick: 120;
    /**
     * 置群员禁言,对应CoolQ方法 setGroupBan
     */
    readonly AUTH_SetGroupBan: 121;
    /**
     * 置群管理员,对应CoolQ方法 setGroupAdmin
     */
    readonly AUTH_SetGroupAdmin: 122;
    /**
     * 置全群禁言,对应CoolQ方法 setGroupWholeBan
     */
    readonly AUTH_SetGroupWholeBan: 123;
    /**
     * 置匿名群员禁言,对应CoolQ方法 setGroupAnonymousBan
     */
    readonly AUTH_SetGroupAnonymousBan: 124;
    /**
     * 置群匿名设置,对应CoolQ方法 setGroupAnonymous
     */
    readonly AUTH_SetGroupAnonymous: 125;
    /**
     * 置群成员名片,对应CoolQ方法 setGroupCard
     */
    readonly AUTH_SetGroupCard: 126;
    /**
     * [敏感]置群退出,对应CoolQ方法 setGroupLeave
     */
    readonly AUTH_SetGroupLeave: 127;
    /**
     * 置群成员专属头衔,对应CoolQ方法 setGroupSpecialTitle
     */
    readonly AUTH_SetGroupSpecialTitle: 128;
    /**
     * 取群成员信息,对应CoolQ方法 getGroupMemberInfoV2 / getGroupMemberInfo
     */
    readonly AUTH_GetGroupMemberInfo: 130;
    /**
     * 取陌生人信息,对应CoolQ方法 getStrangerInfo
     */
    readonly AUTH_GetStrangerInfo: 131;
    /**
     * 置讨论组退出,对应CoolQ方法 setDiscussLeave
     */
    readonly AUTH_SetDiscussLeave: 140;
    /**
     * 置好友添加请求,对应CoolQ方法 setFriendAddRequest
     */
    readonly AUTH_SetFriendAddRequest: 150;
    /**
     * 置群添加请求,对应CoolQ方法 setGroupAddRequest
     */
    readonly AUTH_SetGroupAddRequest: 151;
    /**
     * 取群成员列表,对应CoolQ方法 getGroupMemberList
     */
    readonly AUTH_GetGroupMemberList: 160;
    /**
     * 取群列表,对应CoolQ方法 getGroupList
     */
    readonly AUTH_GetGroupList: 161;
    /**
     * 撤回消息,对应CoolQ方法 deleteMsg
     */
    readonly AUTH_DeleteMsg: 180;
}
