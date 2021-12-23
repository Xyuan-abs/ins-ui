# Radio

[[toc]]

## 示例

### Radio 类型

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'radio',
      label: 'radio',
      value: null,
      element: 'radio',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
    },
    {
      name: 'radioBorder',
      label: 'radioBorder',
      value: null,
      element: 'radio',
      elementType: 'borderBox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
    },
    {
      name: 'radioButton',
      label: 'radioButton',
      value: null,
      element: 'radio',
      elementType: 'buttonBox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
    },
  ],
})

function submit(value) {
  console.log(value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" :label-width="'120px'" @save="submit" />
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
      name: 'radio',
      label: 'radio',
      value: null,
      element: 'radio',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'radioBorder',
      label: 'radioBorder',
      value: null,
      element: 'radio',
      elementType: 'borderBox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'radioButton',
      label: 'radioButton',
      value: null,
      element: 'radio',
      elementType: 'buttonBox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      rules: [{ required: true, trigger: 'change' }],
    },
  ],
})

function submit(value) {
  console.log(value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" :label-width="'150px'" @save="submit" />
</template>
```

:::

## Radio 的 formItem 配置

| 属性             | 说明               | 可选值                      | 默认值 |
| ---------------- | ------------------ | --------------------------- | ------ |
| elementType      | 二级类型           | radio、borderBox、buttonBox | radio  |
| attr             | radio-group 的配置 | —                           | —      |
| options          | radio 列表         | —                           | —      |
| optionsItem.attr | radio 的配置       | —                           | —      |

:tada: 其他参考[通用配置](/ins-ui/components/form/form.html#formitem-通用配置)
