> **[cq-robot](../README.md)**

[Globals](../globals.md) / ["event/CQListener"](../modules/_event_cqlistener_.md) / [CQListener](_event_cqlistener_.cqlistener.md) /

# Interface: CQListener

酷Q事件监听

**`author`** CaoMeiYouRen

**`date`** 2019-07-07

**`export`** 

**`abstract`** 

**`class`** CQListener

## Hierarchy

* [IVer](_entity_iver_.iver.md)

  * **CQListener**

## Implemented by

* [CQApp](../classes/_event_cqapp_.cqapp.md)

## Index

### Properties

* [CQ_API_VER](_event_cqlistener_.cqlistener.md#cq_api_ver)
* [HTTP_API_VER](_event_cqlistener_.cqlistener.md#http_api_ver)

### Methods

* [debug](_event_cqlistener_.cqlistener.md#debug)
* [disable](_event_cqlistener_.cqlistener.md#disable)
* [discussMsg](_event_cqlistener_.cqlistener.md#discussmsg)
* [enable](_event_cqlistener_.cqlistener.md#enable)
* [exit](_event_cqlistener_.cqlistener.md#exit)
* [friendAdd](_event_cqlistener_.cqlistener.md#friendadd)
* [groupAdmin](_event_cqlistener_.cqlistener.md#groupadmin)
* [groupDecrease](_event_cqlistener_.cqlistener.md#groupdecrease)
* [groupIncrease](_event_cqlistener_.cqlistener.md#groupincrease)
* [groupMsg](_event_cqlistener_.cqlistener.md#groupmsg)
* [groupUpload](_event_cqlistener_.cqlistener.md#groupupload)
* [privateMsg](_event_cqlistener_.cqlistener.md#privatemsg)
* [requestAddFriend](_event_cqlistener_.cqlistener.md#requestaddfriend)
* [requestAddGroup](_event_cqlistener_.cqlistener.md#requestaddgroup)
* [startup](_event_cqlistener_.cqlistener.md#startup)

## Properties

###  CQ_API_VER

• **CQ_API_VER**: *`9` | number*

*Inherited from [IVer](_entity_iver_.iver.md).[CQ_API_VER](_entity_iver_.iver.md#cq_api_ver)*

*Defined in [entity/IVer.ts:15](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/IVer.ts#L15)*

当前酷Q Api 版本。
详见 https://cqp.cc/t/15124

**`type`** {number}

**`memberof`** IVer

___

###  HTTP_API_VER

• **HTTP_API_VER**: *`4` | number*

*Inherited from [IVer](_entity_iver_.iver.md).[HTTP_API_VER](_entity_iver_.iver.md#http_api_ver)*

*Defined in [entity/IVer.ts:22](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/IVer.ts#L22)*

当前CoolQ HTTP API 版本。
详见 https://cqhttp.cc/docs

**`type`** {number}

**`memberof`** IVer

## Methods

###  debug

▸ **debug**(): *void*

*Defined in [event/CQListener.ts:17](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L17)*

本函数的内容仅在debug模式下会执行，即CQ.setDebug(true)

**`memberof`** CQListener

**Returns:** *void*

___

###  disable

▸ **disable**(): *`0`*

*Defined in [event/CQListener.ts:47](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L47)*

Type=1004 应用将被停用
本函数会在连接断开前执行，可以在此执行插件退出代码
如果酷Q载入时应用已被停用，则本函数【不会】被调用。
无论本应用是否被启用，连接断开前本函数都【不会】被调用。

**`memberof`** CQListener

**Returns:** *`0`*

请固定返回0。

___

###  discussMsg

▸ **discussMsg**(`subType`: string, `msgId`: number, `fromDiscuss`: number, `fromQQ`: number, `msg`: string, `font`: number): *`Promise<0 | 1>`*

*Defined in [event/CQListener.ts:89](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L89)*

Type=4 讨论组消息

**`memberof`** CQListener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subType` | string | 子类型，目前固定为discuss |
`msgId` | number | - |
`fromDiscuss` | number | 来源讨论组 |
`fromQQ` | number | - |
`msg` | string | - |
`font` | number | - |

**Returns:** *`Promise<0 | 1>`*

___

###  enable

▸ **enable**(): *`0`*

*Defined in [event/CQListener.ts:38](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L38)*

Type=1003 应用已被启用。本函数会在连接建立后立刻执行，可以在此执行初始化代码。

**`memberof`** CQListener

**Returns:** *`0`*

请固定返回0。

___

###  exit

▸ **exit**(): *`0`*

*Defined in [event/CQListener.ts:32](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L32)*

Type=1002 本函数会在连接断开后执行，请在此执行插件退出代码

**`memberof`** CQListener

**Returns:** *`0`*

请固定返回0，返回后主程序将很快关闭，请不要再通过线程等方式执行其他代码。

___

###  friendAdd

▸ **friendAdd**(`subType`: string, `sendTime`: number, `fromQQ`: number): *`Promise<0 | 1>`*

*Defined in [event/CQListener.ts:147](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L147)*

Type=201 好友事件-好友已添加

**`memberof`** CQListener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subType` | string | 子类型，目前固定为friend_add |
`sendTime` | number | 发送时间(时间戳) |
`fromQQ` | number | 来源QQ |

**Returns:** *`Promise<0 | 1>`*

___

###  groupAdmin

▸ **groupAdmin**(`subType`: string, `sendTime`: number, `fromGroup`: number, `beingOperateQQ`: number): *`Promise<0 | 1>`*

*Defined in [event/CQListener.ts:113](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L113)*

Type=101 群事件-管理员变动

**`memberof`** CQListener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subType` | string | 子类型，set:设置管理员,unset:取消管理员 |
`sendTime` | number | 发送时间(时间戳) |
`fromGroup` | number | 来源群号 |
`beingOperateQQ` | number | 被操作QQ |

**Returns:** *`Promise<0 | 1>`*

___

###  groupDecrease

▸ **groupDecrease**(`subType`: string, `sendTime`: number, `fromGroup`: number, `fromQQ`: number, `beingOperateQQ`: number): *`Promise<0 | 1>`*

*Defined in [event/CQListener.ts:125](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L125)*

Type=102 群事件-群成员减少

**`memberof`** CQListener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subType` | string | 子类型，leave:主动退群、kick:成员被踢、kick_me:登录号被踢 |
`sendTime` | number | - |
`fromGroup` | number | - |
`fromQQ` | number | 操作者QQ(仅子类型为2时存在) |
`beingOperateQQ` | number | 被操作QQ |

**Returns:** *`Promise<0 | 1>`*

___

###  groupIncrease

▸ **groupIncrease**(`subType`: string, `sendTime`: number, `fromGroup`: number, `fromQQ`: number, `beingOperateQQ`: number): *`Promise<0 | 1>`*

*Defined in [event/CQListener.ts:137](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L137)*

Type=103 群事件-群成员增加

**`memberof`** CQListener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subType` | string | 子类型，approve:管理员已同意入群、invite:管理员邀请入群 |
`sendTime` | number | 发送时间(时间戳) |
`fromGroup` | number | - |
`fromQQ` | number | 操作者QQ(即管理员QQ) |
`beingOperateQQ` | number | 被操作QQ(即加群的QQ) |

**Returns:** *`Promise<0 | 1>`*

___

###  groupMsg

▸ **groupMsg**(`subType`: string, `msgId`: number, `fromGroup`: number, `fromQQ`: number, `fromAnonymous`: string, `msg`: string, `font`: number): *`Promise<0 | 1>`*

*Defined in [event/CQListener.ts:76](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L76)*

Type=2 群消息

**`memberof`** CQListener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subType` | string | 消息子类型，normal:正常消息，anonymous:匿名消息，notice:系统提示 |
`msgId` | number | - |
`fromGroup` | number | 来源群号 |
`fromQQ` | number | - |
`fromAnonymous` | string | 来源匿名者 |
`msg` | string | - |
`font` | number | 字体 |

**Returns:** *`Promise<0 | 1>`*

关于返回值说明, 见 privateMsg 私聊消息 方法

___

###  groupUpload

▸ **groupUpload**(`subType`: string, `sendTime`: number, `fromGroup`: number, `fromQQ`: number, `file`: [CQFile](../classes/_entity_cqfile_.cqfile.md)): *`Promise<0 | 1>`*

*Defined in [event/CQListener.ts:102](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L102)*

Type=11 群文件上传事件

**`memberof`** CQListener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subType` | string | 子类型，目前固定为group_upload |
`sendTime` | number | 发送时间(时间戳) |
`fromGroup` | number | 来源群号 |
`fromQQ` | number | 来源QQ号 |
`file` | [CQFile](../classes/_entity_cqfile_.cqfile.md) | 上传文件的信息 |

**Returns:** *`Promise<0 | 1>`*

___

###  privateMsg

▸ **privateMsg**(`subType`: string, `msgId`: number, `fromQQ`: number, `msg`: string, `font`: number): *`Promise<0 | 1>`*

*Defined in [event/CQListener.ts:62](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L62)*

Type=21 私聊消息

**`memberof`** CQListener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subType` | string | 消息子类型，friend:来自好友、group:来自群聊、discuss:来自讨论组、other:其他来源 |
`msgId` | number | 消息ID |
`fromQQ` | number | 来源QQ |
`msg` | string | 消息内容 |
`font` | number | 字体 |

**Returns:** *`Promise<0 | 1>`*

返回值*不能*直接返回文本 如果要回复消息，请调用api发送。  * 这里 返回 1 - 截断本条消息，不再继续处理
注意：应用优先级设置为"最高"(10000)时，不得使用本返回值。
如果不回复消息，交由之后的应用/过滤器处理，这里 返回 0 - 忽略本条消息

___

###  requestAddFriend

▸ **requestAddFriend**(`subType`: string, `sendTime`: number, `fromQQ`: number, `msg`: string, `responseFlag`: string): *`Promise<0 | 1>`*

*Defined in [event/CQListener.ts:159](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L159)*

Type=301 请求-好友添加

**`memberof`** CQListener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subType` | string | 子类型，目前固定为request_add_friend |
`sendTime` | number | - |
`fromQQ` | number | 来源QQ |
`msg` | string | 附言 |
`responseFlag` | string | 反馈标识(处理请求用) |

**Returns:** *`Promise<0 | 1>`*

___

###  requestAddGroup

▸ **requestAddGroup**(`subType`: string, `sendTime`: number, `fromGroup`: number, `fromQQ`: number, `msg`: string, `responseFlag`: string): *`Promise<0 | 1>`*

*Defined in [event/CQListener.ts:172](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L172)*

Type=302 请求-群添加

**`memberof`** CQListener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subType` | string | 请求子类型，add:加群请求、invite:邀请登录号入群 |
`sendTime` | number | - |
`fromGroup` | number | - |
`fromQQ` | number | - |
`msg` | string | 附言 |
`responseFlag` | string | 反馈标识(处理请求用) |

**Returns:** *`Promise<0 | 1>`*

___

###  startup

▸ **startup**(): *`0`*

*Defined in [event/CQListener.ts:26](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQListener.ts#L26)*

Type=1001 插件启动，本函数会在连接建立前执行。
请在这里执行插件初始化代码。
请务必尽快返回本子程序，否则会卡住其他插件以及主程序的加载。

**`memberof`** CQListener

**Returns:** *`0`*

请固定返回0