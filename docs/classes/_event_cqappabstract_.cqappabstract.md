> **[cq-robot](../README.md)**

[Globals](../globals.md) / ["event/CQAppAbstract"](../modules/_event_cqappabstract_.md) / [CQAppAbstract](_event_cqappabstract_.cqappabstract.md) /

# Class: CQAppAbstract

CQ应用

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`export`** 

**`abstract`** 

**`class`** CQAppAbstract

## Hierarchy

* **CQAppAbstract**

  * [CQApp](_event_cqapp_.cqapp.md)

## Index

### Properties

* [APP_ID](_event_cqappabstract_.cqappabstract.md#app_id)
* [CQ](_event_cqappabstract_.cqappabstract.md#cq)
* [appDirectory](_event_cqappabstract_.cqappabstract.md#appdirectory)
* [isEnable](_event_cqappabstract_.cqappabstract.md#isenable)

## Properties

###  APP_ID

• **APP_ID**: *string*

*Defined in [event/CQAppAbstract.ts:27](https://github.com/CaoMeiYouRen/node-cq-robot/blob/951adbf/src/event/CQAppAbstract.ts#L27)*

应用ID。
规则见https://d.cqp.me/Pro/%E5%BC%80%E5%8F%91/%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF

**`type`** {string}

**`memberof`** CQApp

___

###  CQ

• **CQ**: *[CoolQ](_entity_coolq_.coolq.md)*

*Defined in [event/CQAppAbstract.ts:19](https://github.com/CaoMeiYouRen/node-cq-robot/blob/951adbf/src/event/CQAppAbstract.ts#L19)*

 CQ核心操作变量

**`abstract`** 

**`type`** {CoolQ}

**`memberof`** CQApp

___

###  appDirectory

• **appDirectory**: *string*

*Defined in [event/CQAppAbstract.ts:42](https://github.com/CaoMeiYouRen/node-cq-robot/blob/951adbf/src/event/CQAppAbstract.ts#L42)*

应用数据目录

**`abstract`** 

**`type`** {string}

**`memberof`** CQAppAbstract

___

###  isEnable

• **isEnable**: *boolean*

*Defined in [event/CQAppAbstract.ts:35](https://github.com/CaoMeiYouRen/node-cq-robot/blob/951adbf/src/event/CQAppAbstract.ts#L35)*

应用启用状态

**`abstract`** 

**`type`** {boolean}

**`memberof`** CQAppAbstract