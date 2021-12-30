---
lang: zh-CN
title: Pager 分页
---

# InsPager 分页

[[toc]]

## InsPager

### 示例

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let pagerParams = reactive({
  page: 1,
  limit: 10,
  total: 100,
})

const handleChange = () => {
  console.log(`pagerParams: `, pagerParams)
}
</script>

<template>
  <ins-pager v-model:pagerParams="pagerParams" @change="handleChange" />
</template>
```

:::

### InsPager Attributes

属性除继承自 el-pagination 属性外，增加以下属性

| 属性                | 说明                                      | 类型   |
| ------------------- | ----------------------------------------- | ------ |
| v-model:pagerParams | 分页参数对象，必须包含 page、limit、total | Object |

### PagerParams

| 属性  | 说明           | 类型   | 对应 el-pagination 的属性 |
| ----- | -------------- | ------ | ------------------------- |
| page  | 当前页码       | Number | current-page              |
| limit | 每页多少条数据 | Number | page-size                 |
| total | 一共多少条数据 | Number | total                     |

### InsPager Events

支持 el-pagination 的所有事件，增加以下事件

| 名称   | 说明                       |
| ------ | -------------------------- |
| change | 当前页或每页数量改变时触发 |

::: tip
修改每页数量后，会将当前页重置为第一页
:::
