---
title: 'Vue 解决编程式导航多次携带相同参数跳转同一页面报错问题'
slug: 'solve-vue-route-same-path-with-params-problem'
description: 'Vue 解决编程式导航多次携带相同参数跳转同一页面报错问题。'
category: 'vuejs'
createtime: '2023-08-23 10:43'
cover: '/images/content/cover/vue.png'
---

# Vue 解决编程式导航多次携带相同参数跳转同一页面报错问题

在 Vue2 中，通过编程式导航多次携带相同的参数跳转到同一页面，会报如下错误

```shell
Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/search/asd?k=ASD".
```

这是因为 vue-router 的 `push` 方法和 `replace` 方法会返回 `promise` ，需要对 `promise` 进行处理，之所以声明式导航跳转方式不会出现此类问题是因为 vue-router 底层已经处理好了，对于编程式导航，我们需要手动处理一下。

## 方式一

在调用 `push` 或 `replace` 进行路由跳转时，添加处理 `promise` 返回值的函数。

```javascript
this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword,toUpperCase()}},()=>{},()=>{})
```

## 方式二

方式一需要在每次通过编程式导航进行路由跳转时通过手动传入 `promise` 处理函数，我们可以在路由的配置文件中，对 `push` 和 `replace` 方法进行重写，达到一劳永逸的目的。

```javascript
// 重写 push 方法
let originPush = VueRouter.prototype.push; // 保存 VueRouter 原型对象上的 push 方法
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
// 重写 replace 方法
let originReplace = VueRouter.prototype.replace; // 保存 VueRouter 原型对象上的 replace 方法
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, resolve, reject);
  } else {
    originReplace.call(
      this,
      () => {},
      () => {}
    );
  }
};
```