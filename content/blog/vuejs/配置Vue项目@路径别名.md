---
title: '在 Vue 项目中配置 @ 路径别名'
slug: 'Configure-path-alias-in-Vue'
description: '在 Vue 项目中配置 @ 路径别名。'
category: 'vuejs'
createtime: '2023-08-23 10:01'
cover: '/images/content/cover/vue.png'
---

# 在 Vue 项目中配置 @ 路径别名

在项目根目录下的 `jsconfig.json` 文件（没有则创建）中添加如下代码

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    "exclude": ["node_module", "dist"]
  }
}
```

`@` 代表的是 `src 文件夹`。