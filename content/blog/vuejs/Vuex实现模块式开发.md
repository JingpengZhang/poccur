---
title: 'Vuex 实现模块式开发'
slug: 'Vuex-implements-modular-development'
description: 'Vuex 实现模块式开发。'
category: 'vuejs'
createtime: '2023-08-23 10:33'
cover: '/images/content/cover/vuex.png'
---

# Vuex 实现模块式开发

当要使用 vuex 存储的数据过多时，可以使用 Vuex 的模块式开发，根据数据所属模块将仓库划分为若干个小仓库使用。

1. 在 `store` 文件夹下创建模块仓库，此处以 `home 模块` 以及 `search 模块` 举例。

```javascript
// home 模块的小仓库 （/store/home/index.js）
const state = {};
const mutations = {};
const actions = {};
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
};
```

```javascript
// search 模块的小仓库 （/store/search/index.js）
const state = {};
const mutations = {};
const actions = {};
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
};
```

2. 在 `store/index.js` 文件中引入小仓库，并实现模块式开发
```javascript
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
// 引入小仓库
import home from "@/store/home";
import search from "@/store/search"
// 对外暴露 store 类的实例
export default new Vuex.Store({
  // 实现 Vuex 仓库模块式开发存储数据
  modules: {
    home,
    search,
  },
});
```