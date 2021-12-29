---
lang: zh-CN
title: Form 快速开始
---

# InsForm

## 快速开始

- 安装依赖

```sh-session
npm i element-plus
npm i @ins-ui/ins-form

// or

yarn add element-plus
yarn add @ins-ui/ins-form

```

- 导入项目

```js
// main.js

import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import InsForm from '@ins-ui/ins-form'
import '@ins-ui/ins-form/lib/style.css'

let app = createApp(App)

app.use(ElementPlus)
app.use(InsForm)

app.mount('#app')
```
