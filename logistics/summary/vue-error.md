**关于使用vue中遇到的一些错误**

一、
错误提示：

```
Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.

```

原因：

由于vue只能有一个根节点。所以当没出现多个根节点时（非if else 情况），提示错误。

