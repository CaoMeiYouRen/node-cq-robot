> **[cq-robot](../README.md)**

[Globals](../globals.md) / ["entity/CQStatus"](../modules/_entity_cqstatus_.md) / [CQStatus](_entity_cqstatus_.cqstatus.md) /

# Class: CQStatus

## Hierarchy

* **CQStatus**

## Index

### Constructors

* [constructor](_entity_cqstatus_.cqstatus.md#constructor)

### Properties

* [id](_entity_cqstatus_.cqstatus.md#id)
* [msg](_entity_cqstatus_.cqstatus.md#msg)

### Methods

* [isSuccess](_entity_cqstatus_.cqstatus.md#issuccess)
* [getStatus](_entity_cqstatus_.cqstatus.md#static-getstatus)

## Constructors

###  constructor

\+ **new CQStatus**(`id`: number, `msg`: string): *[CQStatus](_entity_cqstatus_.cqstatus.md)*

*Defined in [entity/CQStatus.ts:3](https://github.com/CaoMeiYouRen/node-cq-robot/blob/aeb889b/src/entity/CQStatus.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`msg` | string |

**Returns:** *[CQStatus](_entity_cqstatus_.cqstatus.md)*

## Properties

###  id

• **id**: *number*

*Defined in [entity/CQStatus.ts:2](https://github.com/CaoMeiYouRen/node-cq-robot/blob/aeb889b/src/entity/CQStatus.ts#L2)*

___

###  msg

• **msg**: *string*

*Defined in [entity/CQStatus.ts:3](https://github.com/CaoMeiYouRen/node-cq-robot/blob/aeb889b/src/entity/CQStatus.ts#L3)*

## Methods

###  isSuccess

▸ **isSuccess**(): *boolean*

*Defined in [entity/CQStatus.ts:16](https://github.com/CaoMeiYouRen/node-cq-robot/blob/aeb889b/src/entity/CQStatus.ts#L16)*

操作是否执行成功，成功返回true

**`author`** CaoMeiYouRen

**`date`** 2019-07-12

**`memberof`** CQStatus

**Returns:** *boolean*

___

### `Static` getStatus

▸ **getStatus**(`status`: number): *[CQStatus](_entity_cqstatus_.cqstatus.md)*

*Defined in [entity/CQStatus.ts:19](https://github.com/CaoMeiYouRen/node-cq-robot/blob/aeb889b/src/entity/CQStatus.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`status` | number |

**Returns:** *[CQStatus](_entity_cqstatus_.cqstatus.md)*