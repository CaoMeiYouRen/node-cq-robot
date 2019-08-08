> **[cq-robot](../README.md)**

[Globals](../globals.md) / ["utils/strHelp"](_utils_strhelp_.md) /

# External module: "utils/strHelp"

## Index

### Functions

* [getMidStr](_utils_strhelp_.md#getmidstr)

## Functions

###  getMidStr

▸ **getMidStr**(`str`: string, `start`: string, `end`: string): *string*

*Defined in [utils/strHelp.ts:14](https://github.com/CaoMeiYouRen/node-cq-robot/blob/951adbf/src/utils/strHelp.ts#L14)*

取出中间文本;
不含前后参考文本；如果未找到前后文本则返回空文本;
若 end 在 start 前，返回空;
end 从 start 后的第一个取起

**`author`** CaoMeiYouRen

**`date`** 2019-07-10

**`export`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | 源文本 |
`start` | string | 前参考文本 |
`end` | string | 后参考文本 |

**Returns:** *string*

要取出的中间文本