---
title: 'JS中的防抖和节流'
slug: 'Anti-shake-and-throttling-in-JavaScript'
description: 'JS中的防抖和节流。'
category: 'javascript'
createtime: '2023-08-23 09:56'
cover: '/images/content/cover/javascript.png'
---

# JS中的防抖和节流

## 防抖

n 秒后再执行该事件，若在 n 秒内被重复触发，则重新计时。

```javascript
/**
 * 防抖函数
 * @param {*} cb 回调函数，要执行的操作
 * @param {*} delay 延时时间
 */
const debounce = (cb, delay = 1000) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args, delay);
    });
  };
};
```

## 节流

n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效

```javascript
const throttle = (cb, delay = 1000) => {
  let isWaiting = false;
  let lastArgs;

  const timeOutFn = () => {
    if (lastArgs) {
      cb(...lastArgs);
      lastArgs = null;
      setTimeout((timeOutFn, delay));
    } else {
      isWaiting = false;
    }
  };

  return (...args) => {
    if (isWaiting) {
      lastArgs = args;
      return;
    }
    cb(...args);
    isWaiting = true;
    setTimeout((timeOutFn, delay));
  };
};
```