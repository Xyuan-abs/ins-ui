---
lang: zh-CN
title: Form 动态表单
description: Form 动态表单2
---

# Form 动态表单

由输入框、选择器、单选框、多选框、时间选择器等控件组成，用以收集、校验、提交数据

[[toc]]

## InsForm

### 示例

#### 基础表单

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
    },
    {
      name: 'select',
      label: 'select',
      value: null,
      element: 'select',
      options: [
        {
          label: 'optionsLabel',
          value: 'optionsValue',
        },
      ],
    },
    {
      name: 'date',
      label: 'date',
      value: null,
      element: 'datePicker',
    },
    {
      name: 'input-number',
      label: 'inputNumber',
      value: null,
      element: 'inputNumber',
      width: '251px',
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

#### 多列表单

::: demo

```vue
<script setup>
import { reactive } from 'vue'
let cols = 3
let dynamicForm = reactive({
  form: [
    {
      name: 'input',
      label: 'input',
      value: null,
      element: 'input',
      col: 1,
    },
    {
      name: 'select',
      label: 'select',
      value: null,
      element: 'select',
      options: [
        {
          label: 'optionsLabel',
          value: 'optionsValue',
        },
      ],
      col: 1,
    },
    {
      name: 'date',
      label: 'date',
      value: null,
      element: 'datePicker',
      col: 1,
    },
    {
      name: 'input-number',
      label: 'inputNumber',
      value: null,
      element: 'inputNumber',
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

### formItem 通用配置

其他属性参考 不同类型 各自的 formItem 配置

| 属性    | 说明                                              | 类型          |
| ------- | ------------------------------------------------- | ------------- |
| name    | 属性名                                            | String        |
| label   | el-form 的 label                                  | String        |
| value   | 属性值                                            | Any           |
| element | 表单大类型                                        | String        |
| attr    | 对应 element 的配置                               | Object        |
| isText  | 是否纯文本展示,一般用于数据回显                   | Boolean       |
| rules   | 校验规则                                          | Array         |
| col     | 配合 cols，表示该项占几列，默认占一整行           | Number        |
| width   | 表单项宽度,cols 与 width 同时存在时，width 不生效 | String,Number |

### InsForm Attributes

属性除继承自 el-form 属性外，增加以下属性

| 参数        | 说明                                           | 类型    | 可选值     | 默认值 |
| ----------- | ---------------------------------------------- | ------- | ---------- | ------ |
| dynamicForm | 动态表单配置对象                               | Object  | —          | —      |
| label-width | label 宽度                                     | String  | —          | 100px  |
| cols        | 一行分为几列，配合 formItem.col 实现表单栅格化 | Number  | —          | —      |
| hasSubmit   | 是否展示提交、重置按钮                         | Boolean | true/false | true   |
| submitText  | 提交按钮文本                                   | String  | —          | 提交   |

### InsForm Events

| 事件名称 | 说明                     | 回调参数          |
| -------- | ------------------------ | ----------------- |
| change   | 仅在表单项值改变时时触发 | (formItem:Object) |

### InsForm Methods

| 事件名称   | 说明                                                 | 参数 |
| ---------- | ---------------------------------------------------- | ---- |
| toSaveData | 触发表单校验，校验失败返回 false,校验成功返回 表单值 | —    |

## input

### 示例

#### 基础 input

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

#### 表单校验

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

### input 的 formItem 配置

| 属性        | 说明     | 可选值          | 默认值 |
| ----------- | -------- | --------------- | ------ |
| elementType | 二级类型 | input、textarea | input  |

:tada: 其他参考通用配置

## select

### 示例

#### 基础 select

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'select',
      label: 'select',
      value: null,
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
      ],
      element: 'select',
      attr: {
        placeholder: '这是一个select',
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

#### 可搜索 select

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'filterSelect',
      label: '可搜索',
      value: null,
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
      ],
      element: 'select',
      attr: {
        filterable: true,
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

#### 多选 select

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'multiSelect',
      label: '多选',
      value: [],
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
      ],
      element: 'select',
      attr: {
        multiple: true,
        'collapse-tags': true,
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

#### 分组 select

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'selectGroup',
      label: '分组',
      value: null,
      element: 'select',
      elementType: 'group',
      options: [
        {
          label: '分组1',
          options: [
            { label: 'label1-1', value: 'value1-1' },
            { label: 'label1-2', value: 'value1-2' },
          ],
        },
        {
          label: '分组2',
          options: [
            { label: 'label2-1', value: 'value2-1' },
            { label: 'label2-2', value: 'value2-2' },
          ],
        },
      ],
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

#### 创建条目 select

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'createSelect',
      label: '创建条目',
      value: null,
      element: 'select',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
      ],
      attr: {
        filterable: true,
        'allow-create': true,
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

#### 自定义模板 select

::: demo

```vue
<script setup>
import { reactive, h } from 'vue'

const optionComponent = (props, context) => {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        'align-item': 'center',
        'justify-content': 'space-between',
      },
    },
    [h('span', {}, props.option.label), h('span', {}, props.option.desc)]
  )
}

let dynamicForm = reactive({
  form: [
    {
      name: 'userDefinedSelect',
      label: '自定义模板',
      value: null,
      element: 'select',
      options: [
        { label: 'label1', value: 'value1', desc: 'desc1' },
        { label: 'label2', value: 'value2', desc: 'desc2' },
      ],
      optionsItem: optionComponent,
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

#### 表单校验

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'select',
      label: 'select',
      value: null,
      element: 'select',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
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
  <ins-form :dynamicForm="dynamicForm" @save="submit" />
</template>
```

:::

### select 的 formItem 配置

| 属性        | 说明                 | 可选值        | 默认值 |
| ----------- | -------------------- | ------------- | ------ |
| elementType | 二级类型             | select、group | select |
| optionsItem | 自定义的 option 组件 | —             | —      |

:tada: 其他参考通用配置

## inputNumber

### 示例

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

#### 表单校验

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

### inputNumber 的 formItem 配置

| 属性        | 说明                                                                | 可选值                                           | 默认值 |
| ----------- | ------------------------------------------------------------------- | ------------------------------------------------ | ------ |
| elementType | 二级类型                                                            | number、numberWithUnit、numberRange              | number |
| attr        | numberRange、numberWithUnit 为 配置对象 数组 ，number 为配置对象    | \[attrObject , attrObject\] \| attrObject        | —      |
| attr.label  | 每个输入框的 label，用于 默认 placeholder 和 触发必填校验时 展示的  | —                                                | —      |
| require     | 是否必填，适用于 numberRange、numberWithUnit，将自动添加 必填 rules | true \| false                                    | false  |
| rules       | 校验规则                                                            | \[ startRulesArray,endRulesArray\] \| rulesArray | —      |
| options     | numberWithUnit 的单位数组，其他类型无效                             | —                                                | —      |

:tada: 其他参考通用配置

::: tip numberRange

- startValue > endValue 时 , startValue = endValue
- endValue < startValue 时 , endValue = startValue

  :::

::: warning 有个 bug
inputNumber 的 value 赋值为 undefined 时, inputNumber 的界面上的值不会变 , 但实际上 value 已经改变了。 所以点击重置时 表单里的 inputNumber 仍会显示原先数据
:::

## datePicker

### 示例

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

#### 表单校验

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

### datePicker 的 formItem 配置

| 属性        | 说明     | 可选值                                                                   | 默认值 |
| ----------- | -------- | ------------------------------------------------------------------------ | ------ |
| elementType | 二级类型 | date、month、year、week、dateTime、dateRange、 monthRange、dateTimeRange | date   |

:tada: 其他参考通用配置
