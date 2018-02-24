### 一、父组件，子组件动态传值

**命名约定：对于props声明的属性来说，在父级HTML模板中，属性名需要使用中划线写法（如下的childMessage 变为child-message）**

**prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解另外，每次父组件更新时，子组件的所有 prop都会更新为最新值。这意味着不应该在子组件内部改变 prop。如果这么做了，Vue 会在控制台给出警告**

**注意确保在初始化根实例之前注册组件。**

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
  template: `<div>父
               <input v-model="parentMsg">
               // 子组件通过v-bind将child-message动态绑定到父组件的parentMsg
               <child :child-message="parentMsg"></child>
            </div>`
});

// 子组件
Vue.component('child', {
  props: ['childMessage'],
  template: '<span>{{ childMessage }}</span>'
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
  template: '<span>{{ childMessage }}</span>'
}

// 父组件
var parent = {
  data () {
    return {
      parentMsg: '33ssss33'
    }
  },
  template: `<div>父
               <input v-model="parentMsg">
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

### 二、父子组件错误用法

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
