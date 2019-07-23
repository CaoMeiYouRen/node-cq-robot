> **[cq-robot](../README.md)**

[Globals](../globals.md) / ["event/CQApp"](../modules/_event_cqapp_.md) / [CQApp](_event_cqapp_.cqapp.md) /

# Class: CQApp

 CQ应用

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`export`** 

**`class`** CQApp

**`implements`** {CQAppAbstract}

## Hierarchy

* [CQAppAbstract](_event_cqappabstract_.cqappabstract.md)

  * **CQApp**

## Implements

* [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)

## Index

### Constructors

* [constructor](_event_cqapp_.cqapp.md#constructor)

### Properties

* [APP_ID](_event_cqapp_.cqapp.md#app_id)
* [CQ](_event_cqapp_.cqapp.md#cq)
* [CQ_API_VER](_event_cqapp_.cqapp.md#cq_api_ver)
* [HTTP_API_VER](_event_cqapp_.cqapp.md#http_api_ver)
* [appDirectory](_event_cqapp_.cqapp.md#appdirectory)
* [isEnable](_event_cqapp_.cqapp.md#isenable)

### Methods

* [debug](_event_cqapp_.cqapp.md#debug)
* [disable](_event_cqapp_.cqapp.md#disable)
* [discussMsg](_event_cqapp_.cqapp.md#discussmsg)
* [enable](_event_cqapp_.cqapp.md#enable)
* [exit](_event_cqapp_.cqapp.md#exit)
* [friendAdd](_event_cqapp_.cqapp.md#friendadd)
* [groupAdmin](_event_cqapp_.cqapp.md#groupadmin)
* [groupDecrease](_event_cqapp_.cqapp.md#groupdecrease)
* [groupIncrease](_event_cqapp_.cqapp.md#groupincrease)
* [groupMsg](_event_cqapp_.cqapp.md#groupmsg)
* [groupUpload](_event_cqapp_.cqapp.md#groupupload)
* [privateMsg](_event_cqapp_.cqapp.md#privatemsg)
* [requestAddFriend](_event_cqapp_.cqapp.md#requestaddfriend)
* [requestAddGroup](_event_cqapp_.cqapp.md#requestaddgroup)
* [startup](_event_cqapp_.cqapp.md#startup)

## Constructors

###  constructor

\+ **new CQApp**(`APP_ID`: string, `dirname`: string, `debug`: boolean, `HTTP_API_VER`: number, `CQ_API_VER`: number): *[CQApp](_event_cqapp_.cqapp.md)*

*Defined in [event/CQApp.ts:14](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L14)*

CQApp构造函数

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`memberof`** CQApp

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`APP_ID` | string | - | 应用ID |
`dirname` | string | - | 应用的index.ts/index.js文件的__dirname |
`debug` | boolean | false | - |
`HTTP_API_VER` | number | 4 | - |
`CQ_API_VER` | number | 9 | - |

**Returns:** *[CQApp](_event_cqapp_.cqapp.md)*

## Properties

###  APP_ID

• **APP_ID**: *string*

*Overrides [CQAppAbstract](_event_cqappabstract_.cqappabstract.md).[APP_ID](_event_cqappabstract_.cqappabstract.md#app_id)*

*Defined in [event/CQApp.ts:36](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L36)*

___

###  CQ

• **CQ**: *[CoolQ](_entity_coolq_.coolq.md)*

*Overrides [CQAppAbstract](_event_cqappabstract_.cqappabstract.md).[CQ](_event_cqappabstract_.cqappabstract.md#cq)*

*Defined in [event/CQApp.ts:35](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L35)*

___

###  CQ_API_VER

• **CQ_API_VER**: *number*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md).[CQ_API_VER](../interfaces/_event_cqlistener_.cqlistener.md#cq_api_ver)*

*Defined in [event/CQApp.ts:37](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L37)*

___

###  HTTP_API_VER

• **HTTP_API_VER**: *number*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md).[HTTP_API_VER](../interfaces/_event_cqlistener_.cqlistener.md#http_api_ver)*

*Defined in [event/CQApp.ts:38](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L38)*

___

###  appDirectory

• **appDirectory**: *string*

*Overrides [CQAppAbstract](_event_cqappabstract_.cqappabstract.md).[appDirectory](_event_cqappabstract_.cqappabstract.md#appdirectory)*

*Defined in [event/CQApp.ts:46](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L46)*

___

###  isEnable

• **isEnable**: *boolean*

*Overrides [CQAppAbstract](_event_cqappabstract_.cqappabstract.md).[isEnable](_event_cqappabstract_.cqappabstract.md#isenable)*

*Defined in [event/CQApp.ts:45](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L45)*

应用启用状态，默认为false

**`type`** {boolean}

**`memberof`** CQApp

## Methods

###  debug

▸ **debug**(): *void*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:63](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L63)*

**Returns:** *void*

___

###  disable

▸ **disable**(): *`0`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:74](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L74)*

**Returns:** *`0`*

___

###  discussMsg

▸ **discussMsg**(`subType`: string, `msgId`: number, `fromDiscuss`: number, `fromQQ`: number, `msg`: string, `font`: number): *`Promise<0 | 1>`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:83](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`subType` | string |
`msgId` | number |
`fromDiscuss` | number |
`fromQQ` | number |
`msg` | string |
`font` | number |

**Returns:** *`Promise<0 | 1>`*

___

###  enable

▸ **enable**(): *`0`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:71](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L71)*

**Returns:** *`0`*

___

###  exit

▸ **exit**(): *`0`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:68](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L68)*

**Returns:** *`0`*

___

###  friendAdd

▸ **friendAdd**(`subType`: string, `sendTime`: number, `fromQQ`: number): *`Promise<0 | 1>`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:98](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`subType` | string |
`sendTime` | number |
`fromQQ` | number |

**Returns:** *`Promise<0 | 1>`*

___

###  groupAdmin

▸ **groupAdmin**(`subType`: string, `sendTime`: number, `fromGroup`: number, `beingOperateQQ`: number): *`Promise<0 | 1>`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:89](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`subType` | string |
`sendTime` | number |
`fromGroup` | number |
`beingOperateQQ` | number |

**Returns:** *`Promise<0 | 1>`*

___

###  groupDecrease

▸ **groupDecrease**(`subType`: string, `sendTime`: number, `fromGroup`: number, `fromQQ`: number, `beingOperateQQ`: number): *`Promise<0 | 1>`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:92](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`subType` | string |
`sendTime` | number |
`fromGroup` | number |
`fromQQ` | number |
`beingOperateQQ` | number |

**Returns:** *`Promise<0 | 1>`*

___

###  groupIncrease

▸ **groupIncrease**(`subType`: string, `sendTime`: number, `fromGroup`: number, `fromQQ`: number, `beingOperateQQ`: number): *`Promise<0 | 1>`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:95](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`subType` | string |
`sendTime` | number |
`fromGroup` | number |
`fromQQ` | number |
`beingOperateQQ` | number |

**Returns:** *`Promise<0 | 1>`*

___

###  groupMsg

▸ **groupMsg**(`subType`: string, `msgId`: number, `fromGroup`: number, `fromQQ`: number, `fromAnonymous`: string, `msg`: string, `font`: number): *`Promise<0 | 1>`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:80](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`subType` | string |
`msgId` | number |
`fromGroup` | number |
`fromQQ` | number |
`fromAnonymous` | string |
`msg` | string |
`font` | number |

**Returns:** *`Promise<0 | 1>`*

___

###  groupUpload

▸ **groupUpload**(`subType`: string, `sendTime`: number, `fromGroup`: number, `fromQQ`: number, `file`: [CQFile](_entity_cqfile_.cqfile.md)): *`Promise<0 | 1>`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:86](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`subType` | string |
`sendTime` | number |
`fromGroup` | number |
`fromQQ` | number |
`file` | [CQFile](_entity_cqfile_.cqfile.md) |

**Returns:** *`Promise<0 | 1>`*

___

###  privateMsg

▸ **privateMsg**(`subType`: string, `msgId`: number, `fromQQ`: number, `msg`: string, `font`: number): *`Promise<0 | 1>`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:77](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`subType` | string |
`msgId` | number |
`fromQQ` | number |
`msg` | string |
`font` | number |

**Returns:** *`Promise<0 | 1>`*

___

###  requestAddFriend

▸ **requestAddFriend**(`subType`: string, `sendTime`: number, `fromQQ`: number, `msg`: string, `responseFlag`: string): *`Promise<0 | 1>`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:101](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`subType` | string |
`sendTime` | number |
`fromQQ` | number |
`msg` | string |
`responseFlag` | string |

**Returns:** *`Promise<0 | 1>`*

___

###  requestAddGroup

▸ **requestAddGroup**(`subType`: string, `sendTime`: number, `fromGroup`: number, `fromQQ`: number, `msg`: string, `responseFlag`: string): *`Promise<0 | 1>`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:104](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`subType` | string |
`sendTime` | number |
`fromGroup` | number |
`fromQQ` | number |
`msg` | string |
`responseFlag` | string |

**Returns:** *`Promise<0 | 1>`*

___

###  startup

▸ **startup**(): *`0`*

*Implementation of [CQListener](../interfaces/_event_cqlistener_.cqlistener.md)*

*Defined in [event/CQApp.ts:65](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/event/CQApp.ts#L65)*

**Returns:** *`0`*