> **[cq-robot](README.md)**

[Globals](globals.md) /

# node-cq-robot

### 作者：草梅友仁

本项目是[node-coolq-robot ](https://github.com/CaoMeiYouRen/node-coolq-robot)项目的主要依赖包，基于[coolq-http-api]( https://github.com/richardchien/coolq-http-api)、[cq-websocket](https://github.com/momocow/node-cq-websocket) ，按照官方SDK风格重新封装了事件函数和api函数

## 项目特色

1.  基本按照官方SDK风格重新封装了事件函数和api函数
2.  对于所有异步函数均采用async/await重新封装函数，使调用api更加方便。
3.  提供下划线和驼峰式两种api函数风格，由于coolq-http-api采用下划线风格，与官方的驼峰式风格有较大差异，因此，虽然尽可能使用了驼峰式风格，但在实体类的属性名上依旧向coolq-http-api的下划线风格妥协了。在使用时请加以注意

# 安装

```bash
npm i cq-robot -S
```
本项目的注释十分完善，更多内容可以直接查看相应函数、类、接口的注释和*d.ts

文档参考https://github.com/CaoMeiYouRen/node-cq-robot/tree/master/docs

## 项目参考

本项目在开发中参考了官方易语言SDK，coolq-http-api，node-cq-websocket及JCQ-CoolQ

在部分内容参考了JCQ-CoolQ(JavaCQ SDK)的源码，可以说给了我很大启发。这也使我意识到一个优秀了sdk的开发不易。

在此对以上项目表示感谢

**node-cq-websocket : https://github.com/momocow/node-cq-websocket**

**coolq-http-api : https://github.com/richardchien/coolq-http-api**

**JCQ-CoolQ : https://github.com/Meowya/JCQ-CoolQ**