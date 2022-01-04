# InsTable

## 快速开始

- 安装依赖

```sh-session
npm i element-plus
npm i @ins-ui/ins-table

// or

yarn add element-plus
yarn add @ins-ui/ins-table

```

- 导入项目

```js
// main.js

import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import InsTable from '@ins-ui/ins-table'
import '@ins-ui/ins-table/lib/style.css'

let app = createApp(App)

app.use(ElementPlus)
app.use(InsTable)

app.mount('#app')
```
