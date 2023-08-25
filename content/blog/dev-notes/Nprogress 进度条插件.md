---
title: 'Nprogress 进度条插件'
slug: 'plugin-nprogress'
description: 'Nprogress 进度条插件。'
category: 'dev-notes'
createtime: '2023-08-23 10.27'
cover: '/images/content/cover/nprogress.png'
---

# Nprogress 进度条插件

## 安装

```shell
cnpm install --save nprogress
```

## 使用

进度条一般是在发送 axios 请求时出现，所以在二次封装后的 axios 请求拦截器和响应拦截器中控制进度条的出现与消失。

```javascript
// /api/request.js axios 二次封装文件
// 引入 nprogress 进度条
import nprogress from "nprogress";
// 引入 nprogress 进度条样式
import "nprogress/nprogress.css";

// 请求拦截器
requests.interceptors.request.use((config) => {
  // ...
  // 进度条开始动
  nprogress.start();
  // ...
  return config;
});
// 响应拦截器
requests.interceptors.response.use(
  // 响应成功的回调函数
  (res) => {
    // ...
    // 进度条结束
    nprogress.done();
    // ...
    return res.data;
  }
  // ...
);
```