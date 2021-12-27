---
lang: zh-CN
title: Form - DatePicker
---

# DatePicker

[[toc]]

## 示例

### DatePicker 类型

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let cols = 2

let dynamicForm = reactive({
  form: [
    {
      name: 'date',
      label: 'date',
      value: null,
      element: 'datePicker',
      attr: {
        placeholder: '这是一个datePicker',
      },
      col: 1,
    },
    {
      name: 'month',
      label: 'month',
      value: null,
      element: 'datePicker',
      elementType: 'month',
      col: 1,
    },
    {
      name: 'year',
      label: 'year',
      value: null,
      element: 'datePicker',
      elementType: 'year',
      col: 1,
    },
    {
      name: 'week',
      label: 'week',
      value: null,
      element: 'datePicker',
      elementType: 'week',
      col: 1,
    },
    {
      name: 'dateTime',
      label: 'dateTime',
      value: null,
      element: 'datePicker',
      elementType: 'dateTime',
      col: 1,
    },
    {
      name: 'dateRange',
      label: 'dateRange',
      value: [],
      element: 'datePicker',
      elementType: 'dateRange',
      col: 1,
    },
    {
      name: 'monthRange',
      label: 'monthRange',
      value: [],
      element: 'datePicker',
      elementType: 'monthRange',
      col: 1,
    },
    {
      name: 'dateTimeRange',
      label: 'dateTimeRange',
      value: [],
      element: 'datePicker',
      elementType: 'dateTimeRange',
      col: 1,
    },
  ],
})

function submit(value) {
  console.log(value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" :label-width="'120px'" :cols="cols" @save="submit" />
</template>
```

:::

### 表单校验

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let cols = 2

let dynamicForm = reactive({
  form: [
    {
      name: 'date',
      label: 'date',
      value: null,
      element: 'datePicker',
      attr: {
        placeholder: '这是一个datePicker',
      },
      col: 1,
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'month',
      label: 'month',
      value: null,
      element: 'datePicker',
      elementType: 'month',
      col: 1,
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'year',
      label: 'year',
      value: null,
      element: 'datePicker',
      elementType: 'year',
      col: 1,
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'week',
      label: 'week',
      value: null,
      element: 'datePicker',
      elementType: 'week',
      col: 1,
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'dateTime',
      label: 'dateTime',
      value: null,
      element: 'datePicker',
      elementType: 'dateTime',
      col: 1,
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'dateRange',
      label: 'dateRange',
      value: [],
      element: 'datePicker',
      elementType: 'dateRange',
      col: 1,
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'monthRange',
      label: 'monthRange',
      value: [],
      element: 'datePicker',
      elementType: 'monthRange',
      col: 1,
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'dateTimeRange',
      label: 'dateTimeRange',
      value: [],
      element: 'datePicker',
      elementType: 'dateTimeRange',
      col: 1,
      rules: [{ required: true, trigger: 'change' }],
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

## DatePicker 的 formItem 配置

| 属性        | 说明     | 可选值                                                                   | 默认值 |
| ----------- | -------- | ------------------------------------------------------------------------ | ------ |
| elementType | 二级类型 | date、month、year、week、dateTime、dateRange、 monthRange、dateTimeRange | date   |

:tada: 其他参考[通用配置](/ins-ui/components/form/form.html#formitem-通用配置)
