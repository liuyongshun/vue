### 一、父组件，子组件动态传值

**命名约定：**对于props声明的属性来说，在父级HTML模板中，属性名需要使用中划线写法（如下的childMessage 变为child-message）

**prop 是单向绑定的：**
当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解另外，每次父组件更新时，子组件的所有 prop都会更新为最新值。这意味着不应该在子组件内部改变 prop。如果这么做了，Vue 会在控制台给出警告

**注意确保在初始化根实例之前注册组件。**

**_下面的例子很好的展示了，动态传值，单向数据流（父到子）_**

#### 写法一

```
<div id="app">
  <parent></parent>
</div>

// 父组件
Vue.component('parent', {
  data () {
    return {
      parentMsg: '3333'
    }
  },
  // 双向绑定input，动态的将父组件的数据传递给子组件
  template: `<div>父：
               <input v-model="parentMsg">
               <child :child-message="parentMsg"></child>
               <div>{{parentMsg}}</div>
            </div>`
});

// 子组件
Vue.component('child', {
  props: ['childMessage'],
  template: '<div><div>{{ childMessage }}</div> 子：<input v-model="childMessage"></div>'
})

// 初始化实例
new Vue({
  el: '#app'
})
```

#### 写法二

```
<div id="app">
  <parent></parent>
</div>

// 子组件
var child = {
  props: ['childMessage'],
  template: '<div><div>{{ childMessage }}</div> 子：<input v-model="childMessage"></div>'
}

// 父组件
var parent = {
  data () {
    return {
      parentMsg: '33ssss33'
    }
  },
  template: `<div>父：
               <input v-model="parentMsg">
               <child :child-message="parentMsg"></child>
               <div>{{parentMsg}}</div>
            </div>`,
  components: {
    'child': child
  }
};
// 创建根实例
new Vue({
  el: '#app',
    components: {
    'parent': parent
  }
})
```


### 二、验证：

**验证:**

**1、props不能是数组或字符串。**

2、可以是原生类型String、Number、Boolean、Function、Object、Array、Symbol或自定义。使用 instanceof 检测。

```
<div id="app">
  <parent></parent>
</div>

var child = {
  props: {
    'childMessage': String
  },
  template: `<div>
               <div>{{ childMessage }}</div>
               子：<input v-model="childMessage">
            </div>`
}
var parent = {
  data () {
    return {
      // 如果该处不是字符串，会提示错误。
      parentMsg: 'rf'
    }
  },
  template: `<div>父：
               <input v-model="parentMsg">
               <child :child-message="parentMsg"></child>
               <div>{{parentMsg}}</div>
            </div>`,
  components: {
    'child': child
  }
};
// 创建根实例
new Vue({
  el: '#app',
    components: {
    'parent': parent
  }
})

```

### 三、修改props

修改prop中的数据，通常有以下两种原因

1、prop 作为初始值传入后，子组件想把它当作局部数据来用

2、prop 作为初始值传入，由子组件处理成其它数据输出

**注意:**JS中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态

```
下面示例中，除初始值外，父组件的值无法更新到子组件中

<div id="app">
  <parent></parent>
</div>


var child = {
  props: [
  'childMessage'
  ],
  data () {
    return {
      childSelf: this.childMessage
    }
  },
  template: `<div>
               子：<input v-model="childSelf">
               <div>{{ childSelf }}</div>
            </div>`
}

var parent = {
  data () {
    return {
      parentMsg: 'rf'
    }
  },
  template: `<div>父：
               <input v-model="parentMsg">
               <div>{{parentMsg}}</div>
               <child :child-message="parentMsg"></child>
            </div>`,
  components: {
    'child': child
  }
};
// 创建根实例
new Vue({
  el: '#app',
    components: {
    'parent': parent
  }
})

```


### 四、父子组件错误用法

```
错误1：

<div id="app">
  <parent>
    <child></child>
    <child></child>
  </parent>
</div>

错误2：

<div id="app">
  <parent></parent>
  <child></child>
</div>
```
