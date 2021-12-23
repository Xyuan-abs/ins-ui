---
lang: zh-CN
title: Form - InputNumber
---

# InputNumber

[[toc]]

## 示例

### InputNumber 类型

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'inputNumber',
      label: 'inputNumber',
      value: null,
      element: 'inputNumber',
      attr: {
        placeholder: '这是一个inputNumber',
      },
      width: '300px',
    },
    {
      name: 'numberRange',
      label: 'numberRange',
      value: [],
      element: 'inputNumber',
      elementType: 'numberRange',
      attr: [
        { label: '起始值', min: 0, max: 5 },
        { label: '终止值', min: 2, max: 7 },
      ],
    },
    {
      name: 'numberWithUnit',
      label: 'numberWithUnit',
      value: [],
      element: 'inputNumber',
      elementType: 'numberWithUnit',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
      ],
      attr: [{ label: '数量' }, { label: '单位' }],
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
      name: 'inputNumber',
      label: 'inputNumber',
      value: undefined,
      element: 'inputNumber',
      attr: {
        placeholder: '这是一个inputNumber',
      },
      width: '300px',
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'numberRange',
      label: 'numberRange',
      value: [],
      element: 'inputNumber',
      elementType: 'numberRange',
      attr: [
        { label: '起始值', min: 0, max: 5 },
        { label: '终止值', min: 2, max: 7 },
      ],
      required: true,
    },
    {
      name: 'numberWithUnit',
      label: 'numberWithUnit',
      value: [],
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
      ],
      element: 'inputNumber',
      elementType: 'numberWithUnit',
      attr: [{ label: '数量' }, { label: '单位' }],
      required: true,
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

## inputNumber 的 formItem 配置

| 属性        | 说明                                                                | 可选值                                           | 默认值 |
| ----------- | ------------------------------------------------------------------- | ------------------------------------------------ | ------ |
| elementType | 二级类型                                                            | number、numberWithUnit、numberRange              | number |
| attr        | numberRange、numberWithUnit 为 配置对象 数组 ，number 为配置对象    | \[attrObject , attrObject\] \| attrObject        | —      |
| attr.label  | 每个输入框的 label，用于 默认 placeholder 和 触发必填校验时 展示的  | —                                                | —      |
| require     | 是否必填，适用于 numberRange、numberWithUnit，将自动添加 必填 rules | true \| false                                    | false  |
| rules       | 校验规则                                                            | \[ startRulesArray,endRulesArray\] \| rulesArray | —      |
| options     | numberWithUnit 的单位数组，其他类型无效                             | —                                                | —      |

:tada: 其他参考[通用配置](/ins-ui/components/form/form.html#formitem-通用配置)

::: tip numberRange

- startValue > endValue 时 , startValue = endValue
- endValue < startValue 时 , endValue = startValue

:::

::: warning 有个 bug
inputNumber 的 value 赋值为 undefined 时, inputNumber 的界面上的值不会变 , 但实际上 value 已经改变了。 所以点击重置时 表单里的 inputNumber 仍会显示原先数据
:::
