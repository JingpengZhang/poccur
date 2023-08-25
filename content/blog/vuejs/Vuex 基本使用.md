---
title: 'Vuex 基本使用'
slug: 'basic-use-of-vuex'
description: 'Vuex 基本使用。'
category: 'vuejs'
createtime: '2023-08-23 10:36'
cover: '/images/content/cover/vuex.png'
---
# Vuex 基本使用

## vuex 基本项目结构

`/store/index/.js` 文件

```javascript
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// state：仓库存储数据的地方
const state = {
  count: 1,
};
// mutations：修改 state 的唯一手段
const mutations = {
  ADD(state, count) {
    state.count++;
  },
};
// action：处理 action，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 此处禁止修改 state
  add({ commit }) {
    commit("ADD");
  },
};
// getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

// 对外暴露 store 类的实例
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
```

在 `main.js` 中注册

```javascript
// 引入仓库
import store from "./store";
new Vue({
  render: (h) => h(App),
  router,
  store, // 增加此处
}).$mount("#app");
```

在组件中使用

```javascript
<template>
  <div class="">
    <button @click="add">点击+1</button>
    <span>仓库的数据为{{ count }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    add() {
      // 派发 action
      this.$store.dispatch("add");
    },
  }
};
</script>
```