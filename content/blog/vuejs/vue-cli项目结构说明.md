---
title: 'vue-cli 项目结构说明'
slug: 'vue-cli-project-structure-description'
description: 'vue-cli 项目结构说明。'
category: 'vuejs'
createtime: '2023-08-23 10:19'
cover: '/images/content/cover/vue.png'
---

# vue-cli 项目结构说明

`node_modules` 文件夹：存放项目依赖

`public` 文件夹：一般放置一些静态资源（图片），放在该文件夹中的静态资源，webpack 进行打包时，会原封不动的打包到 dist 文件夹中。

`src` 文件夹：该文件夹又被称为程序员源代码文件夹。
- `assets` 文件夹：一般也是放置静态资源（一般放置多个组件公用的静态资源），放在该文件夹中的静态资源，在 webpack 进行打包时，webpack 会将静态资源当做一个模块，打包到 js 文件里。
- `components` 文件夹：一般放置的是非路由组件（全局组件）。
- `App.vue` 文件：唯一的根组件，Vue 当中的组件(.vue)。
- `main.js` 文件：程序入口文件，也是整个程序中最先执行的文件。

`babel.config.js` 文件：babel 相关的配置文件。

`package.json` 文件：记录项目的相关信息（项目名称、作者、项目依赖等）。

`package-lock.js` 文件：缓存性文件。

`README.md` 文件：说明性文件。