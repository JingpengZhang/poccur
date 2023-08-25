---
title: 'Pinia基础使用'
slug: 'pinia-basic-use'
description: 'Pinia基础使用。'
category: 'vuejs'
createtime: '2023-08-23 10:25'
cover: '/images/content/cover/pinia.png'
---

# Pinia 基础使用

### 1 安装

`npm install pinia`

### 2 框架

路径：src -> store -> index.ts

```typescript
import {defineStore} from "pinia";

export const useMainStore = defineStore('main', {
    state: () => {
        return {}
    },
    
    getters: {},

    actions: {}
})
```

### 3 说明

```typescript
import {defineStore} from "pinia";

// 定义并导出容器
// 参数1：容器的 ID，必须唯一，将来 Pinia 会把所有的容器挂载到根容器
// 参数2：选项对象
// 返回值：一个函数，调用得到容器实例
// 返回值：一个函数，调用得到容器实例
export const useMainStore = defineStore('main', {
    /*
    * 类似于组件的 data，用来存储全局状态的
    * 1. 必须是函数，这样是为了在服务端渲染的时候避免交叉请求导致的数据状态污染
    * 2. 必须是箭头函数，这样是为了更好的 TS 类型推导
    * */
    state: () => {
        return {
            count: 100,
            foo: 'bar',
            arr: [1,2,3]
        }
    },

    /*
    * 类似于组件的 computed，用来封装计算属性，有缓存的功能
    * */
    getters: {
        // 函数接受一个可选参数： state 状态对象
        count10 (state){
            return state.count + 10
        }

        // 如果在 getters 中使用了 this 则必须手动指定返回值的类型，否则类型推导不出来
        // count10():number {
        //     return this.count + 10
        // }
    },

    /*
    * 类似于组件的 methods，封装业务逻辑，修改 state
    * */
    actions: {
        // 注意：不能使用箭头函数定义 action，因为箭头函数绑定外部 this
        changeState(){
            this.count++
            this.foo = 'hello'
            this.arr.push(4)

            // this.$patch({})
            // this.$patch(state =>{})
        }
    }
})
```

### 4 调用

```vue
<template>
  <p>{{ mainStore.count }}</p>
</template>

<script lang="ts" setup>
import {useMainStore} from '../store'
import {storeToRefs} from "pinia";

const mainStore = useMainStore()

// 解构 Pinia 中的数据需要用以下方式，否则会丢失响应
const {count, foo} = storeToRefs(mainStore)

</script>
```
