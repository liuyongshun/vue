### 一、下图是vue官网的关于生命周期的图片。

![](http://or0drint7.bkt.clouddn.com/lifecycle.png)


```
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/vue/2.1.3/vue.js"></script>
</head>
<body>

<div id="app">
     <div>{{ message }}</div>
</div>
<script type="text/javascript">
  var app = new Vue({
    el: '#app',
    data: {
      message: "hello world"
    },
    beforeCreate: function() {
      console.group('beforeCreate 创建前状态');
      console.log(this.$el); //undefined
      console.log(this.$data); //undefined
      console.log(this.message)
    },
    created: function() {
      console.group('created 创建完毕状态');
      console.log(this.$el); //undefined
      console.log(this.$data); //已被初始化
      console.log(this.message); //已被初始化
    },
    beforeMount: function() {
      console.group('beforeMount 挂载前状态');
      console.log((this.$el)); //已被初始化
      console.log(this.$el);
      console.log(this.$data); //已被初始化
      console.log(this.message); //已被初始化
    },
    mounted: function() {
      console.group('mounted 挂载结束状态');
      console.log(this.$el); //已被初始化
      console.log(this.$el);
      console.log(this.$data); //已被初始化
      console.log(this.message); //已被初始化
    },
    beforeUpdate: function() {
      console.group('beforeUpdate 更新前状态');
      console.log(this.$el);
      console.log(this.$el);
      console.log(this.$data);
      console.log(this.message);
    },
    updated: function() {
      console.group('updated 更新完成状态');
      console.log(this.$el);
      console.log(this.$el);
      console.log(this.$data);
      console.log(this.message);
    },
    beforeDestroy: function() {
      console.group('beforeDestroy 销毁前状态');
      console.log(this.$el);
      console.log(this.$el);
      console.log(this.$data);
      console.log(this.message);
    },
    destroyed: function() {
      console.group('destroyed 销毁完成状态');
      console.log(this.$el);
      console.log(this.$el);
      console.log(this.$data);
      console.log(this.message)
    }
  })
  </script>
</body>
</html>
```
