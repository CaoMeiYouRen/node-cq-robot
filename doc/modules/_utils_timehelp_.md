> **[cq-robot](../README.md)**

[Globals](../globals.md) / ["utils/timeHelp"](_utils_timehelp_.md) /

# External module: "utils/timeHelp"

## Index

### Functions

* [printTime](_utils_timehelp_.md#printtime)
* [timeFormat](_utils_timehelp_.md#timeformat)

## Functions

###  printTime

▸ **printTime**(`msg`: string, `level`: number): *void*

*Defined in [utils/timeHelp.ts:31](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/utils/timeHelp.ts#L31)*

在控制台输出 HH:mm:ss:SSS->msg 格式的消息

**`export`** 

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`msg` | string | - |
`level` | number | 0 |

**Returns:** *void*

___

###  timeFormat

▸ **timeFormat**(`date`: `Date` | number | string, `pattern`: string): *string*

*Defined in [utils/timeHelp.ts:14](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/utils/timeHelp.ts#L14)*

格式化时间

**`export`** 

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | `Date` \| number \| string |  Date.now() |
`pattern` | string | "YYYY-MM-DD HH:mm:ss" |

**Returns:** *string*