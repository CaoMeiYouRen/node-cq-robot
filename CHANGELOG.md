## [1.1.11](https://github.com/CaoMeiYouRen/node-cq-robot/compare/1.1.11...v1.1.11) (2020-01-30)


### ♻ 代码重构

* 修改了.npmignore文件，npm包中不再有tsconfig.json ([1a192ed](https://github.com/CaoMeiYouRen/node-cq-robot/commit/1a192ed))


### 🐛 Bug 修复

* 修复 cq-websocket bug ([51af634](https://github.com/CaoMeiYouRen/node-cq-robot/commit/51af634))



## [1.1.10](https://github.com/CaoMeiYouRen/node-cq-robot/compare/v1.1.9...v1.1.10) (2019-08-24)


### ♻ 代码重构

* 修改了package.json，增加了项目地址 ([b349e99](https://github.com/CaoMeiYouRen/node-cq-robot/commit/b349e99))
* 增加了更新日志 ([559bfbd](https://github.com/CaoMeiYouRen/node-cq-robot/commit/559bfbd))



## [1.1.9](https://github.com/CaoMeiYouRen/node-cq-robot/compare/v1.1.8...v1.1.9) (2019-08-08)


### ♻ 代码重构

* 发布1.1.8 ([63d408a](https://github.com/CaoMeiYouRen/node-cq-robot/commit/63d408a))


### 🐛 Bug 修复

* 彻底移除了log4模块 ([5026756](https://github.com/CaoMeiYouRen/node-cq-robot/commit/5026756))



## [1.1.8](https://github.com/CaoMeiYouRen/node-cq-robot/compare/v1.1.7...v1.1.8) (2019-08-08)


### ♻ 代码重构

* 移除Logger的调用，现在不会生成日志了 ([fa37193](https://github.com/CaoMeiYouRen/node-cq-robot/commit/fa37193))


### 🐛 Bug 修复

* 修复了CQCode中转义字符顺序错误导致部分转义字符失败的BUG ([8f51319](https://github.com/CaoMeiYouRen/node-cq-robot/commit/8f51319))



## [1.1.7](https://github.com/CaoMeiYouRen/node-cq-robot/compare/v1.1.6...v1.1.7) (2019-07-24)


### 🐛 Bug 修复

* 修复了CoolQ类中缺失set_group_add_request方法的BUG ([509130b](https://github.com/CaoMeiYouRen/node-cq-robot/commit/509130b))

## 1.1.6 (2019-07-23)

-   docs: 修改了更新日志的格式 ([0d80772](https://github.com/CaoMeiYouRen/node-cq-robot/commit/0d80772))
-   docs: 修改了更新日志的格式 ([1e0d5d3](https://github.com/CaoMeiYouRen/node-cq-robot/commit/1e0d5d3))
-   docs: 新增了自动生成的文档 ([69f8222](https://github.com/CaoMeiYouRen/node-cq-robot/commit/69f8222))
-   style(package.json): 1.修改了包的依赖和script脚本 ([e512f8b](https://github.com/CaoMeiYouRen/node-cq-robot/commit/e512f8b))

## 1.1.5 (2019-07-23)

### refactor(重构)

-   style(package.json): 修改了包的依赖和script脚本 ([e512f8b](https://github.com/CaoMeiYouRen/node-cq-robot/commit/e512f8b))

## 1.1.4(2019-7-16)

### refactor(重构)

-   更改了CoolQ的构造函数 ([42e1bf4](https://github.com/CaoMeiYouRen/node-cq-robot/commit/42e1bf4))

### Fix Bugs

-   移除了签到的cq码，发现这个酷Q官方暂时不支持 ([628c7ea](https://github.com/CaoMeiYouRen/node-cq-robot/commit/628c7ea))

## 1.1.1 (2019-7-18)

### refactor(重构)

-   修改了CoolQ类的构造函数，现在，允许构造空的CoolQ对象 ([628a3bf](https://github.com/CaoMeiYouRen/node-cq-robot/commit/628a3bf))

### Fix Bugs

-   因与pm2冲突，移除了日志功能 ([30ef8bb](https://github.com/CaoMeiYouRen/node-cq-robot/commit/30ef8bb))
-   修正了package.json中的错误 ([f048543](https://github.com/CaoMeiYouRen/node-cq-robot/commit/f048543))
-   修复了CoolQ类中部分方法没有权限调用的bug ([bb92716](https://github.com/CaoMeiYouRen/node-cq-robot/commit/bb92716))

## 1.1.0 (2019-7-16)

### refactor(重构)

-   修改了CoolQ类的构造函数，现在，允许构造空的CoolQ对象 ([628a3bf](https://github.com/CaoMeiYouRen/node-cq-robot/commit/628a3bf))

## 1.0.0 (2019-7-15)

### feature(新功能)

-   正式发布1.0.0版本 ([5a191ca](https://github.com/CaoMeiYouRen/node-cq-robot/commit/5a191ca))

### Fix Bugs

-   修正了文档的错误 ([a7edaae](https://github.com/CaoMeiYouRen/node-cq-robot/commit/a7edaae))
-   修正了文档的细节 ([0a1bac2](https://github.com/CaoMeiYouRen/node-cq-robot/commit/0a1bac2))
-   修正了部分事件函数的描述 ([417df76](https://github.com/CaoMeiYouRen/node-cq-robot/commit/417df76))
-   修改了不需要公开的内容 ([724d69b](https://github.com/CaoMeiYouRen/node-cq-robot/commit/724d69b))

