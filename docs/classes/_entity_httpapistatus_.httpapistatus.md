> **[cq-robot](../README.md)**

[Globals](../globals.md) / ["entity/HttpApiStatus"](../modules/_entity_httpapistatus_.md) / [HttpApiStatus](_entity_httpapistatus_.httpapistatus.md) /

# Class: HttpApiStatus

HTTP_API插件运行状态

**`author`** CaoMeiYouRen

**`date`** 2019-07-13

**`export`** 

**`class`** HttpApiStatus

## Hierarchy

* **HttpApiStatus**

## Index

### Properties

* [app_enabled](_entity_httpapistatus_.httpapistatus.md#app_enabled)
* [app_good](_entity_httpapistatus_.httpapistatus.md#app_good)
* [app_initialized](_entity_httpapistatus_.httpapistatus.md#app_initialized)
* [good](_entity_httpapistatus_.httpapistatus.md#good)
* [online](_entity_httpapistatus_.httpapistatus.md#online)
* [plugins_good](_entity_httpapistatus_.httpapistatus.md#plugins_good)

## Properties

###  app_enabled

• **app_enabled**: *boolean*

*Defined in [entity/HttpApiStatus.ts:23](https://github.com/CaoMeiYouRen/node-cq-robot/blob/951adbf/src/entity/HttpApiStatus.ts#L23)*

HTTP API 插件已启用

**`type`** {boolean}

**`memberof`** HttpApiStatus

___

###  app_good

• **app_good**: *boolean*

*Defined in [entity/HttpApiStatus.ts:37](https://github.com/CaoMeiYouRen/node-cq-robot/blob/951adbf/src/entity/HttpApiStatus.ts#L37)*

HTTP API 插件正常运行（已初始化、已启用、各内部插件正常运行）

**`type`** {boolean}

**`memberof`** HttpApiStatus

___

###  app_initialized

• **app_initialized**: *boolean*

*Defined in [entity/HttpApiStatus.ts:16](https://github.com/CaoMeiYouRen/node-cq-robot/blob/951adbf/src/entity/HttpApiStatus.ts#L16)*

HTTP API 插件已初始化

**`type`** {boolean}

**`memberof`** HttpApiStatus

___

###  good

• **good**: *boolean*

*Defined in [entity/HttpApiStatus.ts:51](https://github.com/CaoMeiYouRen/node-cq-robot/blob/951adbf/src/entity/HttpApiStatus.ts#L51)*

HTTP API 插件状态符合预期，意味着插件已初始化，内部插件都在正常运行，且 QQ 在线

**`type`** {boolean}

**`memberof`** HttpApiStatus

___

###  online

• **online**: *boolean*

*Defined in [entity/HttpApiStatus.ts:44](https://github.com/CaoMeiYouRen/node-cq-robot/blob/951adbf/src/entity/HttpApiStatus.ts#L44)*

当前 QQ 在线，null 表示无法查询到在线状态

**`type`** {boolean}

**`memberof`** HttpApiStatus

___

###  plugins_good

• **plugins_good**: *object*

*Defined in [entity/HttpApiStatus.ts:30](https://github.com/CaoMeiYouRen/node-cq-robot/blob/951adbf/src/entity/HttpApiStatus.ts#L30)*

HTTP API 的各内部插件是否正常运行

**`type`** {object}

**`memberof`** HttpApiStatus