**前言**

&#x3000;&#x3000;JavaScript一直没有模块系统，ES6改变这一问题，在ES6之前用CommonJS规范形成服务器端的模块体系，用AMD规范形成浏览器端模块体系。如今ES6的模块已实现，且实现简单，成为浏览器和服务器的通用模块解决方案。

### 一、export导出
export命令用于规定模块的**对外接口**

方式一
```
export var name = 'ES6';
```

方式二
```
var firstName = 'ES6';
var lastName = 'JavaScript';
export {firstName, lastName};
```


### 二、import导入



