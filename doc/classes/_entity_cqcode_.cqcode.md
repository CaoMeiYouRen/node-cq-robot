> **[cq-robot](../README.md)**

[Globals](../globals.md) / ["entity/CQCode"](../modules/_entity_cqcode_.md) / [CQCode](_entity_cqcode_.cqcode.md) /

# Class: CQCode

CQ码专用类

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`export`** 

**`class`** CQCode

## Hierarchy

* **CQCode**

## Index

### Methods

* [anonymous](_entity_cqcode_.cqcode.md#anonymous)
* [at](_entity_cqcode_.cqcode.md#at)
* [contact](_entity_cqcode_.cqcode.md#contact)
* [customMusic](_entity_cqcode_.cqcode.md#custommusic)
* [decode](_entity_cqcode_.cqcode.md#decode)
* [emoji](_entity_cqcode_.cqcode.md#emoji)
* [encode](_entity_cqcode_.cqcode.md#encode)
* [face](_entity_cqcode_.cqcode.md#face)
* [getImage](_entity_cqcode_.cqcode.md#getimage)
* [getRecord](_entity_cqcode_.cqcode.md#getrecord)
* [image](_entity_cqcode_.cqcode.md#image)
* [location](_entity_cqcode_.cqcode.md#location)
* [music](_entity_cqcode_.cqcode.md#music)
* [record](_entity_cqcode_.cqcode.md#record)
* [shake](_entity_cqcode_.cqcode.md#shake)
* [share](_entity_cqcode_.cqcode.md#share)

## Methods

###  anonymous

▸ **anonymous**(`ignore`: boolean): *string*

*Defined in [entity/CQCode.ts:107](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L107)*

匿名发消息(anonymous) - 仅支持群。
是否不强制，如果希望匿名失败时，将消息转为普通消息发送(而不是取消发送)，请置本参数为true。

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`memberof`** CQCode

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`ignore` | boolean | false | 是否不强制 |

**Returns:** *string*

___

###  at

▸ **at**(`qqId`: number, `isNoSpace`: boolean): *string*

*Defined in [entity/CQCode.ts:82](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L82)*

**`某人(at)`** 

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`memberof`** CQCode

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`qqId` | number | - | -1 为全体 |
`isNoSpace` | boolean | false | - |

**Returns:** *string*

___

###  contact

▸ **contact**(`type`: "qq" | "group", `id`: number): *string*

*Defined in [entity/CQCode.ts:151](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L151)*

发送名片分享(contact)

**`author`** CaoMeiYouRen

**`date`** 2019-07-10

**`memberof`** CQCode

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | "qq" \| "group" | 类型 目前支持 qq/好友分享 group/群分享 |
`id` | number | 类型为qq，则为QQID；类型为group，则为群号 |

**Returns:** *string*

___

###  customMusic

▸ **customMusic**(`url`: string, `audio`: string, `title`: string, `content`: string, `image`: string): *string*

*Defined in [entity/CQCode.ts:138](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L138)*

发送音乐自定义分享

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`memberof`** CQCode

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`url` | string | - | 分享链接,点击分享后进入的音乐页面（如歌曲介绍页） |
`audio` | string | - | 音频链接,音乐的音频链接（如mp3链接） |
`title` | string | "" | 标题,音乐的标题，建议12字以内 |
`content` | string | "" | 内容,音乐的简介，建议30字以内 |
`image` | string | "" | 封面图片链接,音乐的封面图片链接，留空则为默认图片 |

**Returns:** *string*

___

###  decode

▸ **decode**(`code`: string): *string*

*Defined in [entity/CQCode.ts:41](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L41)*

特殊字符，反转义

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`memberof`** CQCode

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`code` | string | stringReplace |

**Returns:** *string*

反转义后的字符串

___

###  emoji

▸ **emoji**(`id`: number): *string*

*Defined in [entity/CQCode.ts:69](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L69)*

emoji表情(emoji)

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`memberof`** CQCode

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | 表情ID |

**Returns:** *string*

___

###  encode

▸ **encode**(`code`: string, `isComma`: boolean): *string*

*Defined in [entity/CQCode.ts:23](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L23)*

特殊字符，转义，避免冲突

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`memberof`** CQCode

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`code` | string | - | 要转义的字符串 |
`isComma` | boolean | true | - |

**Returns:** *string*

转义后的字符串

___

###  face

▸ **face**(`id`: number): *string*

*Defined in [entity/CQCode.ts:57](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L57)*

 QQ表情(face)

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`memberof`** CQCode

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | 表情ID |

**Returns:** *string*

___

###  getImage

▸ **getImage**(`code`: string): *string*

*Defined in [entity/CQCode.ts:230](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L230)*

从CQ码中获取图片的路径，如 [CQ:image,file=1.jpg] 则返回 1.jpg;
失败返回空字符串

**`author`** CaoMeiYouRen

**`date`** 2019-07-10

**`memberof`** CQCode

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`code` | string | CQ码 |

**Returns:** *string*

___

###  getRecord

▸ **getRecord**(`code`: string): *string*

*Defined in [entity/CQCode.ts:245](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L245)*

从CQ码中获取语音的路径，如 [CQ:record,file=1.amr] 则返回 1.amr;
失败返回空字符串

**`author`** CaoMeiYouRen

**`date`** 2019-07-10

**`memberof`** CQCode

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`code` | string | CQ码 |

**Returns:** *string*

___

###  image

▸ **image**(`file`: string, `cache`: boolean): *string*

*Defined in [entity/CQCode.ts:203](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L203)*

发送图片(image)
1.原生：将图片放在 酷Q的 data\image 下，并填写相对路径。如 data\image\1.jpg 则填写 1.jpg；
2.增强：增强 CQ 码支持设置 file 为http/https/file协议，可以发送网络和本地文件系统中其它地方的图片、语音；
增强 CQ 码详见https://cqhttp.cc/docs/4.10/#/CQCode

**`author`** CaoMeiYouRen

**`date`** 2019-07-10

**`memberof`** CQCode

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`file` | string | - | 文件路径 |
`cache` | boolean | true | - |

**Returns:** *string*

___

###  location

▸ **location**(`lat`: number, `lon`: number, `zoom`: number, `title`: string, `content`: string): *string*

*Defined in [entity/CQCode.ts:182](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L182)*

发送位置分享(location)

**`author`** CaoMeiYouRen

**`date`** 2019-07-10

**`memberof`** CQCode

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`lat` | number | - | 纬度 |
`lon` | number | - | 经度 |
`zoom` | number | 15 | - |
`title` | string | - | 地点名称，建议12字以内 |
`content` | string | - | 地址，建议20字以内 |

**Returns:** *string*

___

###  music

▸ **music**(`musicId`: number, `type`: `""` | "qq" | "163" | "xiami", `style`: boolean): *string*

*Defined in [entity/CQCode.ts:122](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L122)*

发送音乐(music)

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`memberof`** CQCode

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`musicId` | number | - | 音乐的歌曲数字ID |
`type` | `""` \| "qq" \| "163" \| "xiami" | "" | - |
`style` | boolean | false | - |

**Returns:** *string*

___

###  record

▸ **record**(`file`: string, `magic`: boolean): *string*

*Defined in [entity/CQCode.ts:218](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L218)*

发送语音(record)
1.原生：将语音放在 data\record 下，并填写相对路径。如 data\record\1.amr 则填写 1.amr；
2.增强：增强 CQ 码支持设置 file 为http/https/file协议，可以发送网络和本地文件系统中其它地方的图片、语音；
增强 CQ 码详见https://cqhttp.cc/docs/4.10/#/CQCode

**`author`** CaoMeiYouRen

**`date`** 2019-07-10

**`memberof`** CQCode

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`file` | string | - | 文件路径 |
`magic` | boolean | false | - |

**Returns:** *string*

___

###  shake

▸ **shake**(): *string*

*Defined in [entity/CQCode.ts:94](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L94)*

窗口抖动(shake) - 仅支持好友

**`author`** CaoMeiYouRen

**`date`** 2019-07-09

**`memberof`** CQCode

**Returns:** *string*

___

###  share

▸ **share**(`url`: string, `title`: string, `content`: string, `image`: string): *string*

*Defined in [entity/CQCode.ts:166](https://github.com/CaoMeiYouRen/node-cq-robot/blob/0d80772/src/entity/CQCode.ts#L166)*

发送链接分享(share)

**`author`** CaoMeiYouRen

**`date`** 2019-07-10

**`memberof`** CQCode

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`url` | string | - | 分享的链接 |
`title` | string | "" | - |
`content` | string | "" | - |
`image` | string | "" | - |

**Returns:** *string*