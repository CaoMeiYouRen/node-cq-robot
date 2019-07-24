> **[cq-robot](../README.md)**

[Globals](../globals.md) / ["entity/CQMsg"](../modules/_entity_cqmsg_.md) / [CQMsg](_entity_cqmsg_.cqmsg.md) /

# Class: CQMsg

## Hierarchy

* **CQMsg**

## Index

### Properties

* [MSG_IGNORE](_entity_cqmsg_.cqmsg.md#static-msg_ignore)
* [MSG_INTERCEPT](_entity_cqmsg_.cqmsg.md#static-msg_intercept)

## Properties

### `Static` MSG_IGNORE

▪ **MSG_IGNORE**: *`0`* = 0

*Defined in [entity/CQMsg.ts:5](https://github.com/CaoMeiYouRen/node-cq-robot/blob/6797119/src/entity/CQMsg.ts#L5)*

将此消息继续传递给其他应用

___

### `Static` MSG_INTERCEPT

▪ **MSG_INTERCEPT**: *`1`* = 1

*Defined in [entity/CQMsg.ts:9](https://github.com/CaoMeiYouRen/node-cq-robot/blob/6797119/src/entity/CQMsg.ts#L9)*

拦截此条消息，不再传递给其他应用 //注意：应用优先级设置为"最高"(10000)时，不得使用本返回值