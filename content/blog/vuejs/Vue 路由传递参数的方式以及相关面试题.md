---
title: 'Vue 路由传递参数的方式以及相关面试题'
slug: 'vue-route-parameter-passing-mode-and-related-interview-questions'
description: 'Vue 路由传递参数的方式以及相关面试题。'
category: 'vuejs'
createtime: '2023-08-23 10:41'
cover: '/images/content/cover/vue.png'
---

# Vue 路由传递参数的方式以及相关面试题

## 路由传递参数的三种方式

首先需要在路由配置中( `@/router/index.js` )添加占位符。

```javascript
{
  path: "/search/:keyword", // 修改此处
    component: Search,
    meta: {
      show: true,
    }
  },
```

1. 字符串形式
```javascript
this.$router.push(
    "/search/" + this.keyword + "?k=" + this.keyword.toUpperCase()
);
```
2. 模板字符串
```javascript
this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`);
```
3. 对象
```javascript
this.$router.push({
  name: "search",
  params: { keyword: this.keyword },
  query: { k: this.keyword.toUpperCase() },
});
```
该方式需要在路由配置中增加 `name` 项。
```javascript
{
   path: "/search/:keyword",
   component: Search,
   meta: {
     show: true,
   },
   name: "search", // 添加此处
 },
```

## 相关面试题

1. 面试传递参数（对象写法），path 是否可以结合 params 参数一起使用？
   不能，使用对象写法进行路由传参时，可以是 name、path 形式，但是只有 name 能和 params 结合使用。
2. 如何指定 params 参数可传可不传？
   在路由配置的 `path` 项中的占位符后添加 `?`
```javascript
 {
   path: "/search/:keyword?", // 修改此处
   component: Search,
   meta: {
     show: true,
   },
   name: "search", // 添加此处
 },
```
3. 当 params 参数可传可不传时，如何解决传递空串时造成 url 出现问题的问题？
   使用 `undefiend` 解决
```javascript
this.$router.push({
  name: "search",
  params: { keyword: this.keyword || undefiend }, // 修改此处
  query: { k: this.keyword.toUpperCase() },
});
```
4. 路由组件能不能传递 props 数据？
   可以，有三种方式

- 方式 1：布尔值写法
```javascript
  // 在路由配置中添加如下代码
  {
   path: "/search/:keyword?",
   component: Search,
   meta: {
     show: true,
   },
   name: "search",
   props: true // 添加此处
 },
```
- 方式 2：对象写法
```javascript
  // 在路由配置中添加如下代码
  {
   path: "/search/:keyword?",
   component: Search,
   meta: {
     show: true,
   },
   name: "search",
   props: {a:1,b:2} // 添加此处
  },
```

- 方式 3：函数写法（能够同时传递 params 参数和 query 参数）
     
```javascript
  // 在路由配置中添加如下代码
  {
   path: "/search/:keyword?",
   component: Search,
   meta: {
     show: true,
   },
   name: "search",
   props: ($route)=>({keyword:$route.params.keyword,k:$route.query.k}) // 添加此处
  },
```
以上三张方式均需要在目标页面声明传递的 props

```javascript
props: ["a", "b", "keyword"];
```