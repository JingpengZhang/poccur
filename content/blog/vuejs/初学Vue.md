---
title: '初学 Vue'
slug: 'vue-of-first-learning'
description: '初学 Vue。'
category: 'vuejs'
createtime: '2023-08-23 10:17'
cover: '/images/content/cover/vue.png'
---

# 初学 Vue

#### 1 什么是 vue

vue 是一套用于构建用户界面的前端框架（框架是一套现成的解决方案）。

#### 2 Vue 的特性

vue 框架的特性，主要体现在如下两方面：

① 数据驱动视图

在使用了 vue 的页面中，vue 会监听数据的变化，从而自动重新渲染页面的结构。

好处：当页面数据发生变化时，页面会自动重新渲染！

主要：数据驱动视图是单向的数据绑定。

② 双向数据绑定

在填写表单时，双向数据绑定可以辅助开发者在不操作 DOM 的前提下，自动把用户填写的内容同步到数据源中。

好处：开发者不再需要手动操作 DOM 元素，来获取表单元素最新的值。

#### 3 MVVM

MVVM 是 vue 实现数据驱动视图和双向数据绑定的核心原理。MVVM 指的是 Model、View 和 ViewModel，它把每个 HTML 页面都拆分成了这三个部分。

在 MVVM 概念中：

- Model 表示当前页面渲染时所依赖的数据源。
- View 表示当前页面所渲染的 DOM 结构。
- ViewModel 表示 vue 的实例，它是 MVVM 的核心。

#### 4 基本使用步骤

① 导入 vue.js 的 script 脚本文件

② 在页面中声明一个将要被 vue 所控制的 DOM 区域

③ 创建 vm 实例对象（vue 实例对象）

```html
<body>
    <!-- 2. 在页面中声明一个将要被 vue 所控制的 DOM 区域 -->
    <div id="app">{{ username }}</div>
    
    <!-- 1. 导入 vue.js 的 script 脚本文件 -->
 	<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
    <script>
        // 3. 创建 vm 实例对象（vue 实例对象）
        const vm = new Vue({
            // 3.1 指定当前 vm 实例要控制页面的哪个区域
        	el: '#app',
        	// 3.2 指定 Model 数据源
        	data: {
            	username: 'zs'
        	}
        })
    </script>
</body>
```

#### 5 指令的概念

指令（Directives）是 vue 为开发者提供的模板语法，用于辅助开发者渲染页面的基本结构。

vue 中的指令按照不同的用途可以分为如下 6 大类：

##### ① 内容渲染指令

内容渲染指令用来辅助开发者渲染 DOM 元素的文本内容。常用的内容渲染指令有如下 3 个：

- v-text

  用法示例：

  ```html
  <!-- 把 username 对应的值，渲染到第一个 p 标签中 -->
  <p v-text="username"></p>
  
  <!-- 把 gender 对应的值，渲染到第二个 p 标签中 -->
  <!-- 注意：第二个 p 标签中，默认的文本“性别”会被 gender 的值覆盖掉 -->
  <p v-text="gender">性别</p>
  ```

  注意：v-text 指令会覆盖元素内默认的值。

- {{ }}

  vue 提供的 {{ }} 语法，专门用来解决 v-text 会覆盖默认文本内容的问题。这种 {{ }} 语法的专业名称是插值表达式（英文名为：Mustache）。

  用法示例：

  ```html
  <!-- 使用 {{ }} 插值表达式，将对应的值渲染到元素的内容节点中， -->
  <!-- 同时保留元素自身的默认值 -->
  <p>姓名：{{ username }}</p>
  <p>性别：{{ gender }}</p>
  ```

  注意：

  1. 相对于 v-text 指令来说，插值表达式在开发中更常用一些！因为它不会覆盖元素中默认的文本内容。
  2. 插值表达式只能用在元素的内容节点中，不能用在元素的属性节点中！

- v-html

  v-text 指令和插值表达式只能渲染纯文本内容。如果要把包含 HTML 标签的字符串渲染为页面的 HTML 元素，则需要用到 v-html 这个指令：

  ```html
  <!-- 假设 data 中定义了名为 description 的数据，数据的值为包含 HTML 标签的字符串： -->
  <!-- '<h5 style="color: red;">我在黑马程序员学习 vue.js 课程。</h5>' -->
  
  <p v-html="description"></p>
  ```

  

##### ② 属性绑定指令

如果需要为元素的属性动态绑定属性值，则需要用到 v-bind 属性绑定指令。用法示例如下：

```html
<input type="text" v-bind:placeholder="tips">

<script>
    ...
    // 数据源
    data: {
		tips: '请输入用户名'
	}
    ...
</script>
```

##### v-bind 简写形式：`:`

```html
<input type="text" :placeholder="tips">
```

##### ③ 事件绑定指令

vue 提供了 v-on 事件绑定指令，用来辅助程序员为 DOM 元素绑定事件监听。语法格式如下：

```html
<h3>count 的值为：{{ count }}</h3>
<!-- 语法格式为 v-on:事件名称="事件处理函数的名称" -->
<button v-on:click="addCount">+1</button>

<!-- 绑定事件处理函数并传参 -->
<button v-on:click="addCount(n)">+n</button>
```

###### v-on 简写形式：`@`

```html
<button @click="addCount">+1</button>
```

注意：原生 DOM 对象有 `onclick`、`oninput`、`onkeyup` 等原生事件，替换为 vue 的事件绑定形式后，分别为：`v-on:click`、`v-on:input`、`v-on:keyup`，简写形式分别为 `@click`、`@input`、`@keyup`

##### ④ 双向绑定指令

vue 提供了 v-model 双向数据绑定指令，用来辅助开发者在不操作 DOM 的前提下，快速获取表单的数据。

```html
<p>用户名是：{{ username }}</p>
<input type="text" v-model="username">

<p>选中的省份是：{{ province }}</p>
<select v-model="province">
	<option value="">请选择</option>
	<option value="1">北京</option>
	<option value="2">河北</option>
	<option value="3">黑龙江</option>
</select>
```

注意：只有表单元素使用 v-model 指令才有意义。

##### ⑤ 条件渲染指令

条件渲染指令用来辅助开发者按需控制 DOM 的显示与隐藏。条件渲染指令有如下两个，分别是：

- v-if
  - 原理：每次动态创建或移除元素，实现元素的显示和隐藏。
  - 如果刚进入页面的时候，某些元素默认不需要被展示，而且后期这个元素很可能也不需要被展示出来，此时 v-if 性能更好。
- v-show
  - 原理：动态为元素添加或移除 `display: none` 样式，来实现元素的显示和隐藏。
  - 如果要频繁的切换元素的显示状态，用 v-shiw 性能会更好。

示例用法如下：

```html
<p v-if="flag">请求成功 --- 被 v-if 控制</p>
<p v-show="flag">请求成功 --- 被 v-show 控制</p>

<script>
    ...
    // 数据源
    data: {
		flag: false
	}
    ...
</script>
```

###### v-else：

v-if 可以单独使用，或配合 v-else 指令一起使用：

```html
<div v-if="Math.random() > 0.5">
    随机数大于 0.5
</div>
<div v-else>
    随机数小于或等于 0.5
</div>
```

注意： v-else 指令必须配合 v-if 指令一起使用，否则它将不会被识别！

###### v-else-if：

v-else-if 指令，顾名思义，充当 v-if 的 "else-if 块"，可以连续使用：

```html
<div v-if="type === 'A'">优秀</div>
<div v-else-if="type === 'B'">良好</div>
<div v-else-if="type === 'C'">一般</div>
<div v-else>差</div>
```

注意：v-else-if 指令必须配合 v-if 指令一起使用，否则它将不会被识别！

##### ⑥ 列表渲染指令

vue 提供了 v-for 列表渲染指令，用来辅助开发者基于一个数组来循环渲染一个列表结构。v-for 指令需要使用 item in items 形式的特殊语法，其中：

- items 是待循环的数组
- item 是被循环的每一项

```html
<ul>
    <li v-for="item in list">姓名是：{{ item.name }}</li>
</ul>
<script>
 ...
 data: { 
     list: [ // 列表数据
		{ id: 1, name: 'zs'},
		{ id: 2, name: 'ls'},
     ],
 }
 ...
</script>
```

###### v-for 中的索引：

v-for 指令还支持一个可选的第二个参数，即当前项的索引，语法格式为 `(item, index) in items`，示例代码如下：

```html
<ul>
    <li v-for="(item, index) in list">索引是：{{ index }} ，姓名是：{{ item.name }}</li>
</ul>
<script>
 ...
 data: { 
     list: [ // 列表数据
		{ id: 1, name: 'zs'},
		{ id: 2, name: 'ls'},
     ],
 }
 ...
</script>
```

注意：v-for 指令中的 item 项和 index 索引都是形参，可以根据需要进行重命名。例如 `(user, i) in userlist`

###### key 的注意事项：

1. key 的值只能是字符串或数字类型
2. key 的值必须具有唯一性（即：key 的值不能重复）
3. 建议把数据项 id 属性的值作为 key 的值（因为 id 属性的值具有唯一性）
4. 使用 index 的值当做 key 的值没有任何意义（因为 index 的值不具有唯一性）
5. 建议使用 v-for 指令时一定要指定 key 的值（既提升性能、又防止列表状态紊乱）

```html
<li v-for="(item, index) in list" :key="item.id">
    索引是：{{ index }} ，姓名是：{{ item.name }}
</li>
```

注意：指令是 vue 开发中最基础、最常用、最简单的知识点。

#### 6 使用 JavaScript 表达式

在 vue 提供的模板渲染语法中，除了支持绑定简单的数据值之外，还支持 JavaScript 表达式的运算，例如：

```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

#### 7 处理函数的简写

```javascript
// 常规写法
methods: {
	add: function() {
        ...
    }
}
    
// 简写形式
methods: {
    add() {
        ...
    }
}
```

#### 8 通过 this 访问数据源中的数据

```javascript
const vm = new Vue({
	el: '#app',
    data: {
		count: 0
    },
    methods: {
        add() {
            vm.count += 1 // 通过 vm 访问数据源中的数据（不推荐）
            this.count += 1 // 通过 this 访问数据源中的数据（推荐）
        }
    }
})
```

#### 9 $event

vue 提供了内置变量，名字叫做 $event ，它就是原生 DOM 的事件对象 e

```html
<button @click="add($event, 8)">+8</button>
<script>
	...
    methods: {
        add(e, n){ // 接收参数
            this.count += n;
            if(this.count % 2 === 0){
                e.target.style.backgroundColor = 'red'
            }else{
                e.target.style.backgroundColor = ''
            }
        }
    }
    ...
</script>
```

#### 10 事件修饰符

在事件处理函数中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。因此，vue 提供了事件修饰符的概念，来辅助程序员更方便的对事件的触发进行控制。常见的 5 个事件修饰符如下：

| 事件修饰符 | 说明                                                      |
| :--------- | --------------------------------------------------------- |
| .prevent   | 阻止默认行为（例如：阻止 a 链接的跳转、阻止表单的提交等） |
| .stop      | 阻止事件冒泡                                              |
| .capture   | 以捕获模式触发当前的事件处理函数                          |
| .once      | 绑定的事件只触发 1 次                                     |
| .self      | 只有在 event.target 是当前元素自身时触发事件处理函数      |

#### 11 按键修饰符

在监听键盘事件时，我们经常需要判断详细的按键。此时，可以为键盘相关的事件添加按键修饰符，例如：

```html
<!-- 只有在 'key' 是 'Enter' 时调用 'vm.submit()' -->
<input @keyup.enter="submit">

<!-- 只有在 'key' 是 'Esc' 时调用 'vm.clearInput' -->
<input @keyup.esc="clearInput">
```

#### 12 v-model 指令的修饰符

为了方便对用户输入的内容进行处理，vue 为 v-model 指令提供了 3 个修饰符，分别是：

| 修饰符  | 作用                              | 示例                           |
| ------- | --------------------------------- | ------------------------------ |
| .number | 自动将用户的输入值转为数值类型    | <input v-model.number="age" /> |
| .trim   | 自动过滤用户输入的首尾空白字符    | <input v-model.trim="msg" />   |
| .lazy   | 在 "change" 时而非 "input" 时更新 | <input v-model.lazy="msg" />   |

示例用法如下：

```html
<input type="text" v-model.number="n1">
<input type="text" v-model.number="n2">
<span>{{ n1 + n2 }}</span>
```

#### 13 过滤器（vue3 中已弃用）

过滤器（ Filters ）是 vue 为开发者提供的功能，常用于文本的格式化。过滤器可以用在两个地方：插值表达式和 v-bind 属性绑定。

过滤器应该被添加在 JavaScript 表达式的尾部，由“管道符”进行调用，示例代码如下：

```html
<!-- 在双花括号中通过“管道符”调用 capitalize 过滤器，对 message 的值进行格式化 -->
<p>{{ message | capitalize }}</p>

<!-- 在 v-bind 中通过“管道符”调用 formatId 过滤器，对 rawId 的值进行格式化 -->
<div v-bind:id="rawId | formatId"></div>

<script>
	...
    data: {
        message: 'xxx'
    },
	filters: {
        // 注意：过滤器函数形参中的 val ，永远都是 “管道符” 前面的那个值
        capitalize(val) {
            ...
            return ...
        }
    }
</script>
```

##### 全局过滤器

在 filters 节点下定义的过滤器，称为”私有过滤器“，因为它只能在当前 vm 实例所控制的 el 区域内使用。如果希望在多个 vue 实例之间共享过滤器，则可以按照如下的格式定义全局过滤器：

```javascript
// 全局过滤器 - 独立于每个 vm 实例之外
// Vue.filter() 方法接受两个参数：
// 第 1 个参数，是全局过滤器的“名字”
// 第 2 个参数，是全局过滤器的“处理函数”
Vue.filter('capitalize', (val) => {
    return ...
})
```

注意：如果全局过滤器和私有过滤器名字一致，此时按照“就近原则”，调用的是“私有过滤器”。

##### 连续调用多个过滤器

过滤器可以串联地进行调用，例如：

```html
<!-- 把 message 的值，交给 filterA 进行处理 -->
<!-- 把 filterA 处理的结果，再交给 filterB 进行处理 -->
<!-- 最终把 filterB 处理的结果，作为最终的值渲染到页面上 -->
{{ message | filterA | filterB }}
```

##### 过滤器传参

过滤器的本质是 JavaScript 函数，因此可以接收参数，格式如下：

```html
<!-- arg1 和 arg3 是传递给 filterA 的参数 -->
<p>{{ message | filterA(arg1, arg2) }}</p>

<script>
    // 过滤器处理函数的形参列表中：
    // 	第一个参数：永远都是“管道符”前面待处理的值
    // 	从第二个参数开始，才是调用过滤器时传递过来的 arg1 和 arg2 参数
    Vue.filter('filterA', (msg, arg1, arg2) => {
        ...
    })
</script>
```

#### 14 watch 侦听器

watch 侦听器允许开发者监视数据的变化，从而针对数据的变化做特定的操作。语法格式如下：

```javascript
const vm = new Vue({
    el: '#app',
    data: { username: '' },
    watch:{
        // 监听 username 值的变化
        // newVal 是“变化后的新值”，oldVal 是“变化之前的旧值”
        username(newVal, oldVal){
            console.log(newVal, oldVal)
        }
    }
})
```

侦听器常见应用场景：侦听用户名是否被占用。

##### 侦听器的格式

1. 方法格式的侦听器

   - 缺点1：无法在刚进入页面的时候，自动触发！！！
   - 缺点2：如果侦听的是一个对象，如果对象中的属性发生了变化，不会触发侦听器！！！

2. 对象格式的侦听器

   - 好处1：可以通过 `immediate` 选项，让侦听器自动触发！！！

   - 好处2：可以通过 `deep` 选项，让侦听器深度监听对象中每个属性的变化。

   - ```javascript
     watch: {
         // 定义对象格式的侦听器
         username: {
             // 侦听器的处理函数
             handler(newVal, oldVal) {
                 ...
             },
             // immediate 选项的默认值是 false，它的作用是控制侦听器是否自动触发一次
             immediate: true,
             // 开启深度监听，只要对象中任何一个属性变化了，都会触发“对象的侦听器”
             deep: true,
         },
         // 如果要侦听的是对象的子属性的变化，则必须包裹一层单引号
         'info.username'(newVal, oldVal) {
         	...  
         }
     }
     ```

#### 15 计算属性

计算属性指的是通过一系列运算之后，最终得到的一个属性值。这个动态计算出来的属性值可以被模板结构或 methods 方法使用。示例代码如下：

```javascript
var vm = new Vue({
    el: '#app',
    data: {
        r: 0,g: 0,b: 0
    },
    computed: {
        rgb() { return `rgb(${this.r}, ${this.g}, ${this.b})`  }
    },
    methods: {
        show() { console.log(this.rgb) }
    }
})
```

特点：

- 定义的时候，要被定义为“方法“
- 在使用计算属性的时候，当普通的属性使用即可

好处：

- 实现了代码的复用
- 只要计算属性中依赖的数据源变化了，则计算属性会自动重新求值！

#### 16 axios

axios 是一个专注于网络请求的库！

axios 的基本语法如下：

```javascript
axios({
    method: '请求的类型',
    url: '请求的 URL 地址',
    params: { 'URL 中的查询参数' },
    data: { '请求体参数' }
}).then((result) => {
    // .then 用来指定请求成功之后的回调函数
    // 形参中的 result 是请求成功之后的结果
})
```

##### 结合 async 和 await 调用 axios

如果调用某个方法的返回值是 Promise 实例，则前面可以添加 await！await 只能用在被 async “修饰”的方法中。

```javascript
document.querySelector('#btnPost').addEventListener('click',async function(){
    const result = await axios({
        method: 'POST',
        url: 'http://www.liulongbin.top:3006/api/post',
    })
    
    console.log(result);
})
```

##### 在 axios 中使用解构赋值

解构赋值的时候，使用 `:` 进行重命名

1. 调用 axios 之后，使用 `async/await` 进行简化
2. 使用解构赋值，从 axios 封装的大对象中，把 data 属性解构出来
3. 把解构出来的 data 属性，使用 `:` 进行重命名，一般都重命名为 `{ data: res }`

```javascript
const { data: res } = await axios({
    method: 'GET',
    url: 'xxx'
})
```

##### 基于 axios.get 和 axios.post 发起 axios 请求

```javascript
// axios.get
axios.get('url',{
	// GET 参数
    params: {}
})

// axios.post
axios.post('url',{ /* POST 请求体数据 */ })
```

#### 17 CLI

##### 17.1 什么是单页面应用程序

单页面应用程序（Single Page Application）简称 SPA ，指的是一个 Web 网站中只有唯一的一个     HTMl 页面，所有的功能与交互都在这唯一的一个页面内完成。

##### 17.2 什么是 vue-cli

vue-cli 是 Vue.js 开发的标准工具。它简化了程序员基于 webpack 创建工程化的 Vue 项目的过程。

##### 17.3 安装和使用

vue-cli 是 npm 上的一个全局包，使用 `npm install` 命令，即可方便的把它安装到自己的电脑上：

`npm install -g @vue/cli`

基于 vue-cli 快速生成工程化的 Vue 项目：

`vue create 项目的名称` ：在创建项目时，一般选择 'Manually select features' ，可定制性更高。

##### 17.4 vue 项目中 src 目录的构成：

- asset 文件夹：存放项目中用到的静态资源文件，例如：css 样式表、图片资源
- components 文件夹：程序员封装的、可复用的组件，都要放到 components 目录下
- main.js ：项目的入口文件，整个项目的运行，要先执行 main.js
- App.vue ：项目的根组件

##### 17.5 vue 项目的运行流程

在工程化的项目中，vue 要做的事情很单纯：通过 main.js 把 App.vue 渲染到 index.html 的指定区域中。

其中：

1. App.vue 用来编写带渲染的模板结构
2. index.html 中需要预留一个 el 区域
3. main.js 把 App.vue 渲染到了 index.html 所预留的区域中

#### 18 vue 组件

##### 18.1 什么是组件化开发

组件化开发指的是：根据封装的思想，把页面上可重用的 UI 结构封装为组件，从而方便项目的开发和维护。

##### 18.2 vue 中的组件化开发

vue 是一个支持组件化开发的前端框架。

vue 中规定：组件的后缀名是 .vue 。之前接触到的 App.vue 文件本质上就是一个 vue 的组件。

##### 18.3 vue 组件的三个组成部分

每个 .vue 组件都由 3 部分构成，分别是：

- template -> 组件的模板结构
- script -> 组件的 JavaScript 行为
- style -> 组件的样式

```vue
<template>
	<div class="test-box">
        <h3>{{ username }}</h3>
    </div>
</template>

<script>
    // 默认到处，这是固定写法
	export default {
        // data 数据源
        // 注意：.vue 组件中的 data 不能像之前一样指向对象，组件中的 data 必须是一个函数
        data() {
            // 这个 return 出去的 {} 中，可以定义数据
            return {
                username: 'admin'
            }
        }
    }
</script>

<style>
    .test-box {
        background-color: pink;
    }
</style>
```

在组件中， this 就表示当前组件的实例对象。

##### 18.4 启用 less

在 style 标签中加入 lang="less" 属性

```vue
<style lang="less">
    
</style>
```

##### 18.5 组件之间的父子关系

组件在被封装好之后，彼此之间是相互独立的，不存在父子关系。在使用组件的时候，根据彼此的嵌套关系，形成了父子关系、兄弟关系。

###### 18.5.1 使用组件的三个步骤

1. 使用 import 语法导入需要的组件

   ```js
   import Left from '@/components/Left.vue'
   ```

2. 使用 components 节点注册组件

   ```js
   export default {
   	components: {
   		Left
       }
   }
   ```

3. 以标签形式使用刚才注册的组件

   ```html
   <div class="box">
       <Left></Left>
   </div>
   ```

###### 18.5.2 在 VSCode 中配置 @ 路径提示插件

插件名称：Path Autocomplete

在 setting.json 开头位置添加如下配置：

```json
{
    // 导入文件时是否携带文件的扩展名
    "path-autocomplete.extensionOnImport": true,
    // 配置 @ 的路径提示
    "path-autocomplete.pathMappings": {
        "@": "${folder}/src"
    }
}
```

###### 18.5.3 通过 components 注册的是私有子组件

例如：在组件A 的 components 节点下，注册了组件 F。则组件 F  只能用在组件 A 中；不能被用在组件 C 中。

###### 18.5.6 注册全局组件

在 vue 项目的 main.js 入口文件中，通过 Vue.component() 方法，可以注册全局组件。示例代码如下：

```js
// 导入需要全局注册的组件
import Count from '@/components/Count.vue'

// 参数1：字符串格式，表示组件的“注册名称”
// 参数2：需要被全局注册的那个组件
Vue.component('MyCount',Count)
```

###### 18.5.7 组件的 props

props 是组件的自定义属性，在封装通用组件的时候，合理地使用 props 可以极大的提高组件的复用性！

props 中的数据，可以直接在模板结构中被使用。

组件的封装者：

```js
export default {
    // 组件的自定义属性
    props: ['自定义属性A', '自定义属性B', '其他自定义属性...'],
    
    // 组件的私有数据
    data() {
		return { }
    }
}
```

组件的使用者：

```html
<MyCount init="6"></MyCount> <!-- init 赋值为字符串 -->
<MyCount :init="6"></MyCount> <!-- init 赋值为数值 -->
```

注意：props 是只读的，不能直接修改 props 的值，否则会报错。

要想修改 props 的值，可以把 props 的值转存到 data 中，因为 data 中的数据都是可读可写的！

- props 的 default 默认值：

​		在声明自定义属性时，可以通过 default 来定义属性的默认值。示例代码如下：

```js
export default {
    props: {
        init: {
            // 用 default 属性定义属性的默认值
            default: 0
        }
    }
}
```

- props 的 type 值类型

  在声明自定义属性时，可以通过 type 来定义属性的值类型

  ```js
  export default {
      props: {
          init: {
              // 用 default 属性定义属性的默认值
              default: 0,
              type: Number
          }
      }
  }
  ```

- props 的 required 必填项

  ```js
  export default {
      props: {
          init: {
              // 用 default 属性定义属性的默认值
              default: 0,
              type: Number,
              required: true
          }
      }
  }
  ```

##### 18.6 组件之间的样式冲突问题

默认情况下，写在 .vue 组件中的样式会全局生效，因此很容易造成多个组件之间的样式冲突问题。

导致组件之间样式冲突的根本原因是：

1. 单页面应用程序中，所有组件的 DOM 结构，都是基于唯一的 index.html 页面进行呈现的
2. 每个组件中的样式，都会影响整个 index.html 页面中的 DOM 元素

解决方式：在 style 标签中添加 `scoped` 属性

```html
<style scoped>
    
</style>
```

##### 18.7 使用 deep 修改子组件的样式

使用场景：当使用第三方组件库的时候，如果有修改第三方组件默认样式的需求，需要用到 `/deep/`

```css
/deep/ h5 {
    
}
```

#### 19 组件的生命周期

生命周期（ Life Cycle ）是指一个组件从创建 -> 运行 -> 销毁的整个阶段，强调的是一个时间段。

生命周期函数：是由 vue 框架提供的内置函数，会伴随着组件的生命周期，自动按次序执行。

注意：生命周期强调的是时间段，生命周期函数强调的是时间点。

- 组件创建阶段
  - beforeCreate()
  - created()
  - beforeMount()
  - mounted()
- 组件运行阶段
  - beforeUpdate()
  - updated()
- 组件销毁阶段
  - beforeDestroy()
  - destroyed()

#### 20 组件之间的数据共享

##### 20.1 组件之间的关系

- 父子关系
- 兄弟关系

###### 20.2.1 父组件向子组件共享数据

父组件向子组件共享需要使用自定义属性。示例代码如下：

```js
// 父组件

<Son :msg="message" :user="userinfo"></Son>

data() {
    return {
        message: 'hello vue.js',
        userinfo: { name: 'zs', age: 20 }
    }
}
```

```js
// 子组件
<template>
	<div>
    	<h5>Son 组件</h5>
		<p>父组件传递过来的 msg 值是：{{ msg }}</p>
		<p>父组件传递过来的 user 值是：{{ user }}</p>
    </div>
</template>

props: ['msg', 'user']
```
###### 20.2.2 子组件向父组件共享数据

子组件向父组件共享数据使用自定义事件。示例代码如下：

```js
// 子组件
export default {
    data() {
        return { count: 0 }
    },
    methods: {
        add() {
            this.count += 1
           	// 修改数据时，通过 $emit() 触发自定义事件
            this.$emit('numchange',this.count)
        }
    }
}
```

```js
// 父组件
<Son @numchange="getNewCount"></Son>

export default {
    data(){
		return { countFormSon: 0 }
    },
    methods: {
        getNewCount(val) {
			this.countFromSon = val
        }
    }
}
```

###### 20.2.3 兄弟组件之间的数据共享

在 vue2.x 中，兄弟组件之间数据共享的方案是 EventBus。

1. 创建 eventBus.js 模块，并向外共享一个 Vue 的实例对象
2. 在数据发送方，调用 `bus.$emit('事件名称',要发送的数据)` 方法触发自定义事件
3. 在数据接收方，调用 `bus.$on('事件名称',事件处理函数)` 方法注册一个自定义事件

示例代码如下：

```js
// eventBus.js
import Vue from 'vue'

// 向外共享 Vue 的实例对象
export default new Vue()
```

```js
// 兄弟组件 A （数据发送方）
import bus from './eventBus.js'

export default {
    data() {
        data() {
            return {
                msg: 'hello vue.js'
            }
        }
    },
    methods: {
        sendMsg() {
            bus.$emit('share', this.msg)
        }
    }
}
```

```js
// 兄弟组件 C （数据接收方）
import bus from './eventBus.js'

export default {
    data() {
		return {
            msgFromLeft: ''
        }
    },
    created() {
        bus.$on('share', val => {
            this.msgFromLeft = val
        })
    }
}
```

#### 21 ref 引用

##### 21.1 什么是 ref 引用

ref 用来辅助开发者在不依赖于 jQuery 的情况下，获取 DOM 元素或组件的引用。

每个 vue 的组件实例上，都包含一个 $refs 对象，里面存储着对应的 DOM 元素或组件的引用。默认情况下，组件的 $refs 指向一个空对象。

##### 21.2 使用 ref 引用组件实例

如果想要使用 ref 引用页面上的组件实例，则可以按照如下的方式进行操作：

```js
// 使用 ref 属性，为对应的“组件”添加引用名称
<my-counter ref="counterRef"></my-counter>
<button @click="getRef">获取 $refs 引用</button>

methods: {
    getRef() {
        // 通过 this.$refs. 引用的名称，可以引用组件的实例
        console.log(this.$refs.counterRef)
        // 引用到组件的实例之后，就可以调用组件上的 methods 方法
        this.$refs.counterRef.add()
    }
}
```

##### 21.3 this.$nextTick(cb) 方法

组件的 `$nextTick(cb)` 方法，会把 cb 回调推迟到下一个 DOM 更新周期之后执行。通俗的理解是：等组件的 DOM 更新完成之后，再执行 cb 回调函数。从而能保证 cb 回调函数可以操作到最新的 DOM 元素。

#### 22 动态组件

##### 22.1 什么是动态组件

动态组件指的是动态切换组件的显示与隐藏。

##### 22.2 如何实现动态组件渲染

vue 提供了一个内置的 <component> 组件，专门用来实现动态组件的渲染。示例代码如下：

```js
data() {
	// 1. 当前要渲染的组件名称
    return { comName: 'Left' }
}

<!-- 2. 通过 is 属性，动态指定要渲染的组件 -->
<component :is="comName"></component>

<!-- 3. 点击按钮，动态切换组件的名称 -->
<button @click="comName = 'Left'">展示 Left 组件</button>
<button @click="comName = 'Right'">展示 Right 组件</button>
```

##### 22.3 使用 keep-alive 保持状态

默认情况下，切换动态组建时无法保持组件的状态。此时可以使用 vue 内置的 `<keep-alive>` 组件保持动态组件的状态。示例代码如下：

```vue
<keep-alive>
	<component :is="comName"></component>
</keep-alive>
```

##### 22.4 keep-alive 对应的生命周期函数

当组件被缓存时，会自动触发组件的 `deactivated` 生命周期函数。

当组件被激活时，会自动触发组件的 `activated` 生命周期函数。

##### 22.5 keep-alive 的 include 属性

include 属性用来指定：只有名称匹配的组件会被缓存。多个组件名之间使用英文的逗号分隔：

```vue
<keep-alive include="MyLeft,MyRight">
	<component :is="comName"></component>
</keep-alive>
```

注意：`exclude` 属性与 `include` 属性作用相反，两者不可同时存在。

> 扩展：
>
> ​	如果在“声明组件”的时候，没有为组件指定 name 名称，则组建的名称默认就是“注册时候的名称”；当提供了 name 属性之后，组件的名称，就是 name 属性的值。
>
> 1. 组件的“注册名称”的主要应用场景是，以标签的形式，把注册好的组件，渲染和使用到页面结构中；
> 2. 组件声明时候的 "name" ，名称的主要应用场景，结合 `<keep-alive>` 标签实现组件缓存功能，以及在调试工具中看到组件的 name 名称。

#### 23 插槽

##### 23.1 什么是插槽

插槽（Slot）是 vue 为组件的封装者提供的能力。允许开发者在封装组件时，把不确定的、希望由用户指定的部分定义为插槽。

##### 23.2 后备内容

封装组件时，可以为预留的 `<slot>` 插槽提供后备内容（默认内容）。如果组件的使用者没有为插槽提供任何内容，则后备内容会生效。示例代码如下：

```vue
<template>
	<p>
        这是 MyCom1 组件的第 1 个 p 标签
    </p>
	<slot> 这是后备内容 </slot>
	<p>
        这是 MyCom1 组件的最后一个 p 标签
    </p>
</template>
```

##### 23.3 具名插槽

如果在封装组件时需要预留多个插槽节点，则需要为每个 `<slot>` 插槽指定具体的 name 名称。这种带有具体名称的插槽叫做“具名插槽”。示例代码如下：

```vue
<div class="container">
    <header>
    	<!-- 我们希望把页头放这里 -->
        <slot name="header"></slot>
    </header>
    <main>
    	<!-- 我们希望把主要内容放这里 -->
        <slot></slot>
    </main>
    <footer>
    	<!-- 我们希望把页脚放这里 -->
        <slot name="footer"></slot>
    </footer>
</div>
```

###### 23.3.1 为具名插槽提供内容

在向具名插槽提供内容的时候，我们可以在一个 `<template>` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称。示例代码如下：

```vue
<my-com-2>
	<template v-slot:header>
    	<h1>
            滕王阁序
        </h1>
    </template>
    
    <template v-slot:default>
		<p>
            ...
        </p>
    </template>
    
    <template v-slot:footer>
    	<p>
            ...
        </p>
    </template>
</my-com-2>
```

###### 23.3.2 具名插槽的简写形式

跟 `v-on` 和 `v-bind` 一样，`v-slot` 也有缩写，即把参数之前的所有内容 (`v-slot:`)替换为字符`#`。例如 `v-slot:header` 可以被重写为 `#header`：

```vue
<my-com-2>
	<template #header>
    	<h1>
            滕王阁序
        </h1>
    </template>
    
    <template #default>
		<p>
            ...
        </p>
    </template>
    
    <template #footer>
    	<p>
            ...
        </p>
    </template>
</my-com-2>
```

##### 23.4 作用域插槽

在封装组件的过程中，可以为预留的  插槽绑定 props 数据，这种带有 props 数据的  叫做“作用域插槽”。示例代码如下：

```vue
<tbody>
	<!-- 下面的 slot 是一个作用域插槽 -->
    <slot v-for="item in list" :user="item"></slot>
</tbody>
```

###### 23.4.1 使用作用域插槽

可以使用 `v-slot:` 的形式，接收作用域插槽对外提供的数据。示例代码如下：

```vue
<my-com-3>
	<!-- 1. 接受作用域插槽对外提供的数据 -->
    <template v-slot:default="scope">
    	<tr>
        	<!-- 2. 使用作用域插槽的数据 -->
            <td>{{ scope }}</td>
        </tr>
    </template>
</my-com-3>
```

###### 23.4.2 解构插槽 Prop

作用域插槽对外提供的数据对象，可以使用解构赋值简化数据的接收过程。示例代码如下：

```vue
<my-com-3>
	<!-- v-slot: 可以简写成  # -->
    <!-- 作用域插槽对外提供的数据对象，可以通过“解构赋值”简化接收的过程 -->
    <template #default="{user}">
    	<tr>
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.state }}</td>
        </tr>
    </template>
</my-com-3>
```

#### 24 自定义指令

##### 24.1 什么是自定义指令

vue 官方提供了 `v-text`、`v-for`、`v-model`、`v-if` 等常用的指令。除此之外 vue 还允许开发者自定义指令。

##### 24.2 自定义指令的分类

vue 中的自定义指令分为两类，分别是：

- 私有自定义指令
- 全局自定义指令

##### 24.3 私有自定义指令

在每个 vue 组件中，可以在 directives 节点下声明私有自定义指令。示例代码如下：

```js
directives: {
    color: {
        // 绑定到的 HTML 元素设置红色的文字
        bind(el){
            // 形参中的 el 是绑定了此指令的、原生的 DOM 对象
            el.style.color = 'red'
        }
    }
}
```

##### 24.4 使用自定义指令

在使用自定义指令时，需要加上 `v-` 前缀。示例代码如下：

```vue
<!-- 声明自定义指令时，指令的名字是 color -->
<!-- 使用自定义指令时，需要加上 v- 指令前缀 -->
<h1 v-color>App 组件</h1>
```

##### 24.5 为自定义指令动态绑定参数值

在 template 结构中使用自定义指令时，可以通过等号（`=`）的方式，为当前指令动态绑定参数值：

```vue
data() {
	return {
		color: 'red' // 定义 color 的颜色值
	}
}

<!-- 在使用指令时，动态为当前指令绑定参数值 color  # -->
<h1 v-color="color">App 组件</h1>
```

##### 24.6 通过 `binding` 获取指令的参数值

在声明自定义指令时，可以通过形参中的第二个参数，来接收指令的参数值：

```js
directives: {
	color: {
		bind(el, binding) {
            // 通过 binding 对象的 .value 属性，获取动态的参数值
            el.style.color = binding.value
        }
    }
}
```

##### 24.7 update 函数

`bind` 函数只调用 1 次：当指令第一次绑定到元素时调用，当 DOM 更新时 `bind` 函数不会被触发。 `update` 函数会在每次 DOM 更新时被调用。示例代码如下：

```js
directives: {
	color: {
		// 当指令第一次被绑定到元素时被调用
		bind(el, binding) {
            el.style.color = binding.value
        },
        // 每次 DOM 更新时被调用
        update(el, binding) {
            el.style.color = binding.value
        }
    }
}
```

##### 24.8 函数简写

如果 `bind` 和 `update` 函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式：

```js
directives: {
    // 在 bind 和 update 时，会触发相同的业务逻辑
	color: {
		el.style.color = binding.value
    }
}
```

##### 24.9 全局自定义指令

全局共享的自定义指令需要通过“`Vue.directive()`”进行声明，示例代码如下：

```js
// 参数1：字符串，表示全局自定义指令的名字
// 参数2：对象，用来接收指令的参数值
Vue.directive('color', function(el, binding){
    el.style.color = binding.value
})
```

#### 25 axios 挂载到 Vue 原型以及配置基础路径

```js
// main.js
import axios from 'axios'

// 全局配置 axios 的请求根路径
axios.defaults.baseURL = 'http://xxx.xxxxx.xx:xx'
// 把 axios 挂载到 Vue.prototype 上，供每个 .vue 组件的实例直接使用
Vue.prototype.$http = axios
```

```vue
<!--发送请求的组件-->
<script>
export default{
    methods: {
        async getInfo() {
            const { data: res } await this.$http.get('/api/get')
        }
    }
}
</script>
```

> 注意：
>
> ​	但是，把 axios 挂载到 Vue 原型上，有一个缺点：不利于 API 接口的复用！！！

#### 26 路由

##### 26.1 前端路由的概念与原理

###### 26.1.1 什么是路由

路由（router）：对应关系。

###### 26.1.2 SPA 与前端路由

SPA 指的是一个 web 网站只有唯一的一个 HTML 页面，所有组件的展示与切换都在这唯一的一个页面内完成。 此时，不同组件之间的切换需要通过前端路由来实现。

结论：在 SPA 项目中，不同功能之间的切换，要依赖于前端路由来完成！

###### 26.1.3 什么是前端路由

通俗易懂的概念：Hash 地址与组件之间的对应关系。

###### 26.1.4 前端路由的工作方式

1. 用户点击了页面上的路由链接
2. 导致了 URL 地址栏中的 Hash 值发生了变化
3. 前端路由监听了到 Hash 地址的变化
4. 前端路由把当前 Hash 地址对应的组件渲染都浏览器中

结论：前端路由，指的是 Hash 地址与组件之间的对应关系！

##### 26.2 vue-router 的基本用法

###### 26.2.1 什么是 vue-router

vue-router 是 vue.js 官方给出的路由解决方案。它只能结合 vue 项目进行使用，能够轻松的管理 SPA 项目 中组件的切换。

vue-router 的官方文档地址：https://router.vuejs.org/zh/

###### 26.2.2 vue-router 安装和配置的步骤

1. 安装 vue-router 包

   - 在 vue2 的项目中，安装 vue-router 的命令如下：`npm i vue-router@3.5.2 -S`

2. 创建路由模块

   - 在 src 源代码目录下，新建 router/index.js 路由模块，并初始化如下的代码：

     ```js
     // 1. 导入 Vue 和 VueRouter 的包
     import Vue from "vue";
     import VueRouter from "vue-router";
     
     // 2. 调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件
     Vue.use(VueRouter)
     
     // 3. 创建路由的实例对象
     const router = new VueRouter()
     
     // 4. 向外共享路由的实例对象
     export default router
     ```

3. 导入并挂载路由模块

   - 在 src/main.js 入口文件中，导入并挂载路由模块。示例代码如下：

     ```js
     import Vue from 'vue'
     import App from './App.vue'
     
     // 1. 导入路由模块
     // 在进行模块化导入的时候，如果给定的是文件夹，则默认导入这个文件夹下，名字叫做 index.js 的文件
     import router from '@/router'
     
     new Vue({
       render: h => h(App),
       // 2. 挂载路由模块
       router // router: router 的简写
     }).$mount('#app')
     ```

4. 声明路由链接和占位符

   - 在 src/App.vue 组件中，使用 vue-router 提供的  和  声明路由链接和占位符：

     ```vue
     <template>
       <div class="app-container">
         <h1>App 组件</h1>
         <!-- 1. 定义路由链接 -->
         <router-link to="/home">首页</router-link>
         <router-link to="/home">电影</router-link>
         <router-link to="/home">关于</router-link>
       
         <hr />
     
         <!-- 2. 定义路由的占位符 -->
         <router-view></router-view>
       
       </div>
     </template>
     ```

###### 26.2.3 声明路由的匹配规则

在 src/router/index.js 路由模块中，通过 routes 数组声明路由的匹配规则。示例代码如下：

```js
// 导入需要使用路由切换展示的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

// 2. 创建路由的实例对象
const router = new VueRouter({
    routes: [ // 在 routes 数组中，声明路由的匹配规则
        // path 表示要匹配的 hash 地址； component 表示要展示的路由组件
        { path:'/home', component: Home},
        { path:'/movie', component: Movie},
        { path:'/about', component: About},
    ]
})
```

##### 26.3 vue-router 的常见用法

###### 26.3.1 路由重定向

路由重定向指的是：用户在访问地址 A 的时候，强制用户跳转到地址 C ，从而展示特定的组件页面。 通过路由规则的 redirect 属性，指定一个新的路由地址，可以很方便地设置路由的重定向：

```js
const router = new VueRouter({
    // 在 routes 数组中，声明路由的匹配规则
    routes: [ 
        // 当用户访问 / 的时候，通过 redirect 属性跳转到 /home 对应的路由规则
        { path:'/', redirect: '/home' },
        { path:'/home', component: Home},
        { path:'/movie', component: Movie},
        { path:'/about', component: About},
    ]
})
```

###### 26.3.2 嵌套路由

通过路由实现组件的嵌套展示，叫做嵌套路由。

1. 声明子路由链接和子路由占位符

   在 About.vue 组件中，声明 tab1 和 tab2 的子路由链接以及子路由占位符。示例代码如下：

   ```vue
   <template>
     <div class="about-container">
       <h3>About 组件</h3>
       <!-- 1. 在关于页面中，声明两个子路由链接 -->
       <router-link to="/about/tab1">tab1</router-link>
       <router-link to="/about/tab2">tab2</router-link>
     
       <hr />
   
       <!-- 2. 在关于页面中，声明子路由的占位符 -->
       <router-view></router-view>
     </div>
   </template>
   ```

   

2. 通过 children 属性声明子路由规则

   在 src/router/index.js 路由模块中，导入需要的组件，并使用 children 属性声明子路由规则：

   ```js
   import Tab1 from '@/components/tabs/Tab1.vue'
   import Tab2 from '@/components/tabs/Tab2.vue'
   
   
   const router = new VueRouter({
       routes: [ 
           { // about 页面的路由规则（父级路由规则）
               path:'/home', 
               component: About,
               children: [ // 1. 通过 children 属性，嵌套声明子级路由规则
                   // 默认子路由：如果 children 数组中，某个路由规则的 path 值为空字符串，则这条路由规则，叫做“默认子路由”
                   { path: '', component: Tab1 }, // 2. 访问 /about/tab1 时，展示 Tab1 组件
                   { path: 'tab1', component: Tab1 }, // 2. 访问 /about/tab2 时，展示 Tab2 组件
               ]
           }
       ]
   })
   ```

##### 26.4 动态路由匹配

###### 26.4.1 动态路由的概念

动态路由指的是：把 Hash 地址中可变的部分定义为参数项，从而提高路由规则的复用性。 在 vue-router 中使用英文的冒号（:）来定义路由的参数项。示例代码如下：

```js
// 路由中的动态参数以 : 进行声明，冒号后面的是动态参数的名称
{ path: '/movie/:id', component: Movie }

// 将以下 3 个路由规则，合并沉了一个，提高了路由规则的复用性
{ path: '/movie/1', component: Movie }
{ path: '/movie/2', component: Movie }
{ path: '/movie/3', component: Movie }
```

###### 26.4.2 `$route.params` 参数对象

在动态路由渲染出来的组件中，可以使用 this.$route.params 对象访问到动态匹配的参数值。

```vue
<template>
  <div class="movie-container">
  	<!-- this.$route 是路由的“参数对象” -->
    <h3>Movie 组件 -- {{ this.$route.params.id }}</h3>
  </div>
</template>

<script>
export default {
    name: 'Movie'
}
</script>
```

###### 26.4.3 使用 props 接收路由参数

为了简化路由参数的获取形式，vue-router 允许在路由规则中开启 props 传参。示例代码如下：

```vue
// 1. 在定义路由规则时，声明 props: true 选项，即可在 Movie 组件中，以 props 的形式接收到路由规则匹配到的参数项
{ path: '/movie/:id', component: Movie, props: true }

<template>
	<!-- 3. 直接使用 props 中接收的路由参数 -->
	<h3>
        MyMovie组件 --- {{id}}
    </h3>
</template>

<script>
export default {
    props: ['id'] // 2. 使用 props 接收路由规则中匹配到的参数项
}
</script>
```

###### 26.4.4 扩展（路径参数，查询参数，完整地址）

1. 在 hash 地址中，/ 后面的参数项，叫做“路径参数”，在路由“参数对象”中，需要使用 `this.$route.params` 来访问路径参数；
2. 在 hash 地址中，？ 后面的参数项，叫做“查询参数”，在路由“参数对象”中，需要使用 `this.$route.query` 来访问查询参数；
3. 在 `this.$route` 中，path 只是路径部分，fullPath 是完整的地址。

##### 26.5 声明式导航 & 编程式导航

在浏览器中，点击链接实现导航的方式，叫做声明式导航。例如：

- 普通网页中点击 `<a>` 链接、vue 项目中点击 `<router-link>` 都属于声明式导航。

在浏览器中，调用 API 方法实现导航的方式，叫做编程式导航。例如：

- 普通网页中调用 `location.href` 跳转到新页面的方式，属于编程式导航。

vue-router 提供了许多编程式导航的 API，其中最常用的导航 API 分别是：

1. `this.$router.push('hash 地址')`
   - 跳转到指定 hash 地址，并增加一条历史记录
2. `this.$router.replace('hash 地址')`
   - 跳转到指定的 hash 地址，并替换掉当前的历史记录
3. `this.$router.go(数值 n)`
   - 实现导航历史前进、后退
   - 在实际开发中，一般只会前进和后退一层页面。因此 vue-router 提供了如下两个便捷方法：
     - `$router.back()`：在历史记录中，后退到上一个页面
     - `$router.forward()`：在历史记录中，前进到下一个页面

##### 26.6  导航守卫

导航守卫可以控制路由的访问权限。

###### 26.6.1 全局前置守卫

每次发生路由的导航跳转时，都会触发全局前置守卫。因此，在全局前置守卫中，程序员可以对每个路由进行 访问权限的控制：

```js
// 创建路由实例对象
const router = new VueRouter({ ... })

// 调用路由实例对象的 beforeEach 方法，即可声明“全局前置守卫”
// 每次发生路由导航跳转的时候，都会自动触发 fn 这个 “回调函数”
router.beforeEach(fn)
```

###### 26.6.2 守卫方法的 3 个形参

全局前置守卫的回调函数中接收 3 个形参，格式为：

```js
// 创建路由实例对象
const router = new VueRouter({ ... })

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // to 是将要方位的路由的信息对象
    // from 是将要离开的路由的信息对象
    // next 是一个函数，调用 next() 表示放行，允许这次路由导航
})                 
```

###### 26.6.3 next 函数的 3 种调用方式

分析 next 函数的 3 种调用方式最终导致的结果：

- 当前用户拥有后台主页的访问权限，直接放行：`next()`
- 当前用户没有后台主页的访问权限，强制其跳转到登录页面：`next('/login')`
- 当前用户没有后台主页的访问权限，不允许跳转到后台主页：`next(false)`

###### 26.6.4 控制后台主页的访问权限

```js
router.beforeEach((to, from, next) => {
    if(to.path === '/main'){
        const token = localStorage.getItem('token')
        if(token){
        	next() // 访问的是后台主页，且有 token 的值
        }else{
            next('/login') // 访问的是后台主页，但是没有 token 的值
        }
    } else {
        next() // 访问的不是后台主页，直接放行
    }
})
```
