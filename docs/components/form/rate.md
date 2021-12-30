---
lang: zh-CN
title: Form - Rate
---

# Rate

[[toc]]

## 示例

### 基础 Rate

::: demo

```vue
<script setup>
import { reactive } from 'vue'
import { ChatRound, ChatLineRound, ChatDotRound } from '@element-plus/icons-vue'

let cols = 3

let dynamicForm = reactive({
  form: [
    {
      name: 'rate',
      label: 'rate',
      value: null,
      element: 'rate',
      attr: {},
      col: 1,
    },
    {
      name: 'rateColors',
      label: 'rateColors',
      value: null,
      element: 'rate',
      attr: {
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      },
      col: 1,
    },
    {
      name: 'rateHalf',
      label: 'rateHalf',
      value: null,
      element: 'rate',
      attr: {
        'allow-half': true,
      },
      col: 1,
    },
    {
      name: 'rateText',
      label: 'rateText',
      value: null,
      element: 'rate',
      attr: {
        'show-text': true,
        texts: ['1', '2', '3', '4', '5'],
      },
      col: 1,
    },
    {
      name: 'rateIcon',
      label: 'rateIcon',
      value: null,
      element: 'rate',
      attr: {
        icons: [ChatRound, ChatLineRound, ChatDotRound],
        'void-icon': ChatRound,
        colors: ['#409eff', '#67c23a', '#FF9900'],
      },
      col: 1,
    },
    {
      name: 'rateReadOnly',
      label: 'rateReadOnly',
      value: 3.7,
      element: 'rate',
      attr: {
        disabled: true,
        'show-score': true,
        'text-color': '#ff9900',
        'score-template': '{value}分',
      },
      col: 1,
    },
  ],
})

function submit(value) {
  console.log(value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" :cols="cols" @save="submit" />
</template>
```

:::

### 表单校验

::: tip
由于 el-rate 默认值为 0，所以设置校验没有意义
:::

## Rate 的 formItem 配置

:tada: 参考[通用配置](/ins-ui/components/form/form.html#formitem-通用配置)
