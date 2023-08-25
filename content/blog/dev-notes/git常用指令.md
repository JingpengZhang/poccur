---
title: 'Git 常用指令速查'
slug: 'git-common-instructions'
description: '基础的git命令速查。'
category: 'dev-notes'
createtime: '2023-08-23 09:50'
cover: '/images/content/cover/git.gif'
---

# Git 常用指令速查

重要指令：工作流程图上的 7 个指令（clone + fetch + pull + checkout + add + commit + push）和 2 个常用指令（log + merge）

常用指令速查：

1. 基本操作类：
  - `git init` ：初始化仓库
  - `git-log` ：查看日志，这个命令很重要！！！（需要先配置别名）
  - `git add <文件名|.>` ：添加到暂存区
  - `git commit -m '注释'` ：提交到仓库
  - `git merge <分支名>` ：合并指定分支到当前活跃分支
2. 分支切换类：
  - `git checkout <分支名>` ：切换到某个分支
  - `git checkout -b <分支名>` ：创建并切换到某个分支（分支原来不存在）
3.  远程操作
  - `git clone <远程地址> [本地文件夹]` ：clone 远程仓库到本地
  - `git pull` ：拉取远端仓库的修改并合并
  - `git push [--set-upstream] origin 分支名` ：推送本地修改到远端分支，`--set-upstream` ：表示和远端分支绑定关联关系，只有第一次推送时才需要此参数。