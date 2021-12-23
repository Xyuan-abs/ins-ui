# Input

[[toc]]

## 示例

### 基础 Input

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'input',
      label: 'input',
      value: null,
      element: 'input',
      attr: {
        placeholder: '这是一个input',
      },
    },
    {
      name: 'textarea',
      label: 'textarea',
      value: null,
      element: 'input',
      elementType: 'textarea',
      attr: {
        placeholder: '这是一个textarea',
        autosize: { minRows: 4, maxRows: 6 },
      },
    },
  ],
})

function submit(value) {
  console.log(value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" @save="submit" />
</template>
```

:::

### 表单校验

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'input',
      label: 'input',
      value: null,
      element: 'input',
      attr: {
        placeholder: '这是一个input',
      },
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'textarea',
      label: 'textarea',
      value: null,
      element: 'input',
      elementType: 'textarea',
      attr: {
        placeholder: '这是一个textarea',
        autosize: { minRows: 4, maxRows: 6 },
      },
      rules: [{ required: true, trigger: 'change' }],
    },
  ],
})

function submit(value) {
  console.log(value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" @save="submit" />
</template>
```

:::

## Input 的 formItem 配置

| 属性        | 说明     | 可选值          | 默认值 |
| ----------- | -------- | --------------- | ------ |
| elementType | 二级类型 | input、textarea | input  |

:tada: 其他参考[通用配置](/ins-ui/components/form/form.html#formitem-通用配置)
