**前言**

&#x3000;&#x3000;JavaScript一直没有模块系统，ES6改变这一问题，在ES6之前用CommonJS规范形成服务器端的模块体系，用AMD规范形成浏览器端模块体系。如今ES6的模块已实现，且实现简单，成为浏览器和服务器的通用模块解决方案。

&#x3000;&#x3000;ES6的module（编译时加载），在编译时就能确定确定模块的依赖关系，以及输入和输出的变量，而CommonJS的module（运行时加载），是运行时才能确定。明显的区别就是，ES6模块module的数据可以动态改变，而CommonJS的module其实是创建了一个对象副本，不会动态改变。

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



```
// import命令具有提升效果，会提升到整个模块的头部，首先执行。
foo();
import { foo } from 'my_module';

//
import defaultMember from "module-name";

// 整体加载
import * as name from "module-name";


import { member } from "module-name";
import { member as alias } from "module-name";
import { member1 , member2 } from "module-name";
import { member1 , member2 as alias2 , [...] } from "module-name";
import defaultMember, { member [ , [...] ] } from "module-name";
import defaultMember, * as name from "module-name";
import "module-name";

/**
 * 模块加载机制
 * 它遇到模块加载命令import时，不会去执行模块，而是只生成一个动态的只读引用。等到真的需要用到
 * 时，再到模块里面去取值，换句话说， ES6 的输入有点像 Unix 系统的 “ 符号连接 ” ，原始值变了，import输入的值也会跟着变。因此， ES6 模块是动态引
 * 用，并且不会缓存值，模块里面的变量绑定其所在的模块。
 */
// ES6 模块加载的机制，与 CommonJS 模块完全不同。 CommonJS 模块输出的是一个值的拷贝，而 ES6 模块输出的是值的引用。
// CommonJS 模块输出的是被输出值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。

/**
 * commonJS规范：
 * CommonJS 的一个模块，就是一个脚本文件。require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。
 * 该对象的id属性是模块名，exports属性是模块输出的各个接口，loaded属性是一个布尔值，表
 * 示该模块的脚本是否执行完毕。其他还有很多属性，
 */
{
  id: '...',
  exports: {},
  loaded: true
}

```

```
// method-1
// export var year = 1958;
// method-2
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};

// method-3
// export function multiply (x, y) {
//   return x * y;
// };
// // method-4 使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。
// function v1 () {
//   // ...;
// }
// function v2 () {
//   // ...
// }
// export {
//   v1 as streamV1,
//   v2 as streamV2,
//   v2 as streamLatestVersion
// };

// // method-5 export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// //  报错
// export 1;
// //  报错
// var m = 1;
// export m;
// // 上面报错：没有提供对外的接口。第一种写法直接输出 1 ，第二种写法通过变量m，还是直接输出 1 。1只是个值，不是接口
// // 可用如下方法：
// //  写法一
// export var m = 1;
// //  写法二
// var m = 1;
// export {m};
// //  写法三
// var n = 1;
// export {n as m};
// // 规定对外的接口m。其他脚本可以通过这个接口，取到值1。实质是，在接口名与模块内部变量之间，建立了一一对应的关系。

// // ================这一点与 CommonJS 规范完全不同。 CommonJS 模块输出的是值的缓存，不存在动态更新，=============

// // 使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。为了方便，就用export default命令，为模块指定默认输出。
// export default function () {
//   console.log('foo');
// }


// // export default命令用在非匿名函数前，也是可以的。foo函数的函数名foo，在模块外部是无效的
// export default function foo () {
//   console.log('foo');
// }
// //  或者写成
// function foo () {
//   console.log('foo');
// }
// export default foo;

// 1. export default命令指定模块的默认输出。一个模块只能有一个默认输出，因此只能使用一次。import命令后面
//才不用加大括号，因为只可能对应一个方法。
//2. 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。
//3. 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。


```