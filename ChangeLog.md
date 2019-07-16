# node-cq-robot更新日志

### by 草梅友仁

## 2019-7-16

1.  修改了CoolQ类的构造函数，现在，允许构造空的CoolQ对象，即 

    ```typescript
    let CQ = new CoolQ() 
    ```

    这使得调用api更加方便

2.  修改了CoolQ类读取配置的判断，现在，在debug模式下将不会读取该插件的配置

## 2019-7-15

首次发布

