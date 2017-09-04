**前言**

&#x3000;&#x3000;JavaScript一直没有模块系统，ES6改变这一问题，在ES6之前用CommonJS规范形成服务器端的模块体系，用AMD规范形成浏览器端模块体系。如今ES6的模块已实现，且实现简单，成为浏览器和服务器的通用模块解决方案。

&#x3000;&#x3000;ES6的module（编译时加载），在编译时就能确定确定模块的依赖关系，以及输入和输出的变量，而CommonJS的module（运行时加载），是运行时才能确定。

**ES6模块module输出的是值的引用，数据可以动态改变，而CommonJS的module输出的是值的拷贝，不会动态改变。**

### 一、export导出

export命令用于规定模块的**对外接口**

```
// export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

// 错误写法
export 1;

var m = 1;
export m;
// 上面报错：没有提供对外的接口。第一种写法直接输出 1 ，第二种写法通过变量m，还是直接输出 1 。1只是个值，不是接口。

// 正确
export var m = 1;

var m = 1;
export {m};

var n = 1;
export {n as m};
// 规定对外的接口m。其他脚本可以通过这个接口，取到值1。实质是，在接口名与模块内部变量之间，建立了一一对应的关系。
```

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

方式三
```
export function multiply (x, y) {
  return x * y;
};
```

方式四
```
使用as关键字，重命名了函数foo和fooo的对外接口。重命名后，fooo可以用不同的名字输出两次。
function foo () {
}
function fooo () {
}
export {
  foo as func,
  fooo as funct,
  fooo as functi
};
```

方法五
```
// 使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。为了方便，就用export default命令，为模块指定默认输出。default命令指定模块的默认输出。一个模块只能有一个默认输出，因此只能使用一次。

// 本质上，export default就是输出一个叫做default的变量或方法,所以它后面不能跟变量声明语句。系统允许你为它取任意名字。

// default命令用在非匿名函数前，也是可以的。foo函数的函数名foo，在模块外部是无效的
export default function foo () {
  console.log('foo');
}

function foo () {
  console.log('foo');
}
export default foo;


export default function () {
  console.log('foo');
}

```

### 二、import导入

import命令具有提升效果，会提升到整个模块的头部，首先执行。
大括号内的变量名必须与被导入的模块接口名相同。
```
foo();
import { foo } from 'my_module';
```


```
import defaultMember from "module-name";
```

```
// 整体导入，as重命名为name
import * as name from "module-name";
```

可以利用变量解构
```
import { member1 , member2 as alias2 , [...] } from "module-name";
import defaultMember, { member [ , [...] ] } from "module-name";
import "module-name";
```

