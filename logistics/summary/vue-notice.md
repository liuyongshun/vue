**本篇文章主要针对vue使用中遇到的问题（更准确的说是针对初学vue的开发者），很多内容其实都在官方文档中有，但是却总会有人不仔细看文档，从而忽略掉关键内容，导致犯错，这种事情尤其体现在初学者中。**

**一、计算属性computed 和方法methods**

**同：**

两种方式的最终结果可以完全相同。

**异：**

1.不同的是计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

2.methods中reverseMessage的`this.message = this.message.split('').reverse().join('')`操作在{{reverseMessage()}}
方式中提示错误，一个无穷循环。需改成`return this.message.split('').reverse().join('')` 但是在 `v-on:click="reverseMessage"`调用方式中没有任何问题。这里return后生成独立的内容，不会和之前的关联。

3.methods的方法是可以被v-on调用;也可以被mustache模板内调用，调用方式{{reverseMessage()}}。

4.computed的方法可以在mustache模板中调用,调用方式{{reverseMessage}};但是不能被v-on调用。


```
在开发中，我们可以把也写业务逻辑写到计算属性或者方法中，避免在模板内写太多逻辑导致难以维护。

  <div id="app">
    {{message}}
    <span v-on:click="reverseMessage">点击反转message</span>
    <div>{{reverseMessage()}}</div>
  </div>


  var app = new Vue({
    el: '#app',
    data: {
      message: 'hello world',
    },
    computed: {
      nowDate: function () {
        return Date.now()
      }
      // reverseMessage: function () {
      //   return this.message.split('').reverse().join('')
      // }
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
```

### 二、版本带来的变动。

1、2.2.0+ 的版本里，当在组件中使用 v-for 时，key 现在是必须的。

2、DOM 模板解析注意事项

例如： `<ul>、<ol>、<table>、<select>` 这样的元素里允许包含的元素有限制，而另一些像 `<option>` 这样的元素只能出现在某些特定元素的内部。

```
// 自定义组件 <my-row> 会被当作无效的内容，因此会导致错误的渲染结果。
<table>
  <my-row>...</my-row>
</table>

```

**解决方法：**使用特殊的 is 特性

```
<table>
  <tr is="my-row"></tr>
</table>
```

3、注意确保在初始化根实例之前注册组件，如下。

```
// 注册组件（全局组件）
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

// 初始化创建根实例
new Vue({
  el: '#example'
})
```
