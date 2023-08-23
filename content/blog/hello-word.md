---
title: 'Deep Clone'
slug: 'view-audit-records'
description: 'meta description of the page'
category: 'VueJS'
createtime: '2023-08-20 17:29:00'
cover: '/images/content/cover/banner4.jpeg'
---

# 深拷贝

### 深拷贝解决了什么问题？

在 JavaScript 中的数据类型分为**基本数据类型**和**引用数据类型**，基本数据类型的值存储在栈中，变量存储的是值，而引用数据类型的值存储在堆中，变量存储的是值在堆中的引用地址。

对于赋值操作（let b =  a），分为两种情况：

- 如果 a 为基本数据类型，则直接将 a 在栈中的值复制一份给 b，后续再对 a 进行改值操作，不会影响到 b 的值
- 如果 a 为引用数据类型，则会将 a 存储的引用地址复制给 b ，此时相当于 a 和 b 的值同时依赖于该引用地址在堆内存中所代表的的值，无论是 a 或是 b 对该引用地址的值进行操作，都会影响到另一个变量。

如果现在有一个变量为 obj1 和另一个变量 obj2 ，obj1 的数据类型为对象，需要将 obj1 的值“拷贝”一份到 obj2 中，且改变其中任意一个变量的值都不能影响到另外一个对象，该“拷贝”操作则被称为**深拷贝**。

### 深拷贝的方法

在以下方法钟，`original` 表示被拷贝的对象（源对象），`target` 表示拷贝到的对象（目标对象）。

1. 通过 ES6 新加入的拓展运算符

   ```javascript
   let target = {...original}
   ```

   注意：源对象中不能包含对象类型参数。

2. 通过 `Object.assign` 对象

   ```javascript
   let target = Object.assign({},original)
   ```

   注意：源对象中不能包含对象类型参数。

3.  通过 `JSON.parse` 和 `JSON.stringify`

   ```javascript
   let target = JSON.parse(JSON.stringify(original))
   ```

   注意：源对象中不能有如下类型：Date, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays

4. 自定义函数

   ```javascript
   function deepClone(target,original) { 
     for(let k in original){
       if(typeof original[k] === "object"){
         target[k] = {}
         deepClone(target[k],original[k])
       }else{
         target[k] = original[k]
       }
     }
   }
   ```

   
