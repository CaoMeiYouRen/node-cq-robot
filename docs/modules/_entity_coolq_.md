> **[cq-robot](../README.md)**

[Globals](../globals.md) / ["entity/CoolQ"](_entity_coolq_.md) /

# External module: "entity/CoolQ"

## Index

### Classes

* [CoolQ](../classes/_entity_coolq_.coolq.md)

### Type aliases

* [LogLevel](_entity_coolq_.md#loglevel)

### Variables

* [bot](_entity_coolq_.md#let-bot)

### Functions

* [CQWebSocketInit](_entity_coolq_.md#cqwebsocketinit)
* [getCQOption](_entity_coolq_.md#getcqoption)

## Type aliases

###  LogLevel

Ƭ **LogLevel**: *`0` | `10` | `11` | `12` | `13` | `20` | `30` | `40`*

*Defined in [entity/CoolQ.ts:8](https://github.com/CaoMeiYouRen/node-cq-robot/blob/320aa4a/src/entity/CoolQ.ts#L8)*

## Variables

### `Let` bot

• **bot**: *`CQWebSocket`*

*Defined in [entity/CoolQ.ts:7](https://github.com/CaoMeiYouRen/node-cq-robot/blob/320aa4a/src/entity/CoolQ.ts#L7)*

## Functions

###  CQWebSocketInit

▸ **CQWebSocketInit**(`option`: `CQWebSocketOption`): *`CQWebSocket`*

*Defined in [entity/CoolQ.ts:28](https://github.com/CaoMeiYouRen/node-cq-robot/blob/320aa4a/src/entity/CoolQ.ts#L28)*

初始化CQWebSocket

**`export`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`option` | `CQWebSocketOption` |   |

**Returns:** *`CQWebSocket`*

___

###  getCQOption

▸ **getCQOption**(`cqPath`: string): *[CQOption](../interfaces/_entity_cqoption_.cqoption.md)*

*Defined in [entity/CoolQ.ts:17](https://github.com/CaoMeiYouRen/node-cq-robot/blob/320aa4a/src/entity/CoolQ.ts#L17)*

获取CQ的配置

**`export`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cqPath` | string | 路径 |

**Returns:** *[CQOption](../interfaces/_entity_cqoption_.cqoption.md)*