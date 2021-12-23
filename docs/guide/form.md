---
lang: zh-CN
title: Form 动态表单
description: Form 动态表单2
---

# InsForm 动态表单

由输入框、选择器、单选框、多选框、时间选择器等控件组成，用以收集、校验、提交数据

[[toc]]

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
      width: '300px',
    },
    {
      name: 'checkbox',
      label: 'checkbox',
      value: [],
      element: 'checkbox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
    },
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
      name: 'cascader',
      label: 'cascader',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
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
    {
      name: 'checkbox',
      label: 'checkbox',
      value: [],
      element: 'checkbox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      col: 1,
    },
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
      col: 1,
    },
    {
      name: 'cascader',
      label: 'cascader',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
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

#### 纯文本

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
      value: '这是一个input',
      element: 'input',
      col: 1,
    },
    {
      name: 'select',
      label: 'select',
      value: 'optionsValue',
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
      value: '2021-11-11',
      element: 'datePicker',
      col: 1,
    },
    {
      name: 'input-number',
      label: 'inputNumber',
      value: 100,
      element: 'inputNumber',
      col: 1,
    },
    {
      name: 'checkbox',
      label: 'checkbox',
      value: ['value1', 'value2', 'value3'],
      element: 'checkbox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      col: 1,
    },
    {
      name: 'radio',
      label: 'radio',
      value: 'value1',
      element: 'radio',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      col: 1,
    },
    {
      name: 'cascader',
      label: 'cascader',
      value: [
        ['value1', 'axure'],
        ['value1', 'sketch'],
      ],
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      attr: {
        props: {
          multiple: true,
        },
      },
      col: 1,
    },
  ],
})
</script>

<template>
  <ins-form
    :dynamicForm="dynamicForm"
    :label-width="'110px'"
    :is-text="true"
    :cols="cols"
    :has-submit="false"
  />
</template>
```

:::

### formItem 通用配置

其他属性参考 不同类型 各自的 formItem 配置

| 属性        | 说明                                              | 类型          |
| ----------- | ------------------------------------------------- | ------------- |
| name        | 属性名                                            | String        |
| label       | el-form 的 label                                  | String        |
| value       | 属性值                                            | Any           |
| element     | 表单一级类型                                      | String        |
| elementType | 表单二级类型，具体参考对应 一级类型 的配置说明    | String        |
| attr        | 对应 element-puls 组件的配置                      | Object        |
| isText      | 是否纯文本展示,一般用于数据回显                   | Boolean       |
| rules       | 校验规则                                          | Array         |
| col         | 配合 cols，表示该项占几列，默认占一整行           | Number        |
| width       | 表单项宽度,cols 与 width 同时存在时，width 不生效 | String,Number |

### InsForm Attributes

属性除继承自 el-form 属性外，增加以下属性

| 参数        | 说明                                           | 类型    | 可选值     | 默认值 |
| ----------- | ---------------------------------------------- | ------- | ---------- | ------ |
| dynamicForm | 动态表单配置对象                               | Object  | —          | —      |
| label-width | label 宽度                                     | String  | —          | 100px  |
| cols        | 一行分为几列，配合 formItem.col 实现表单栅格化 | Number  | —          | —      |
| hasSubmit   | 是否展示提交、重置按钮                         | Boolean | true/false | true   |
| submitText  | 提交按钮文本                                   | String  | —          | 提交   |
| isText      | 表单是否全部展示成纯文本                       | Boolean | true/false | false  |

### InsForm Events

| 事件名称 | 说明                           | 回调参数          |
| -------- | ------------------------------ | ----------------- |
| change   | 仅在表单项值改变时时触发       | (formItem:Object) |
| save     | 提交表单并校验成功后触发的事件 | (formData:Object) |
| reset    | 重置表单后触发的事件           |                   |

### InsForm Methods

| 事件名称   | 说明                                                 | 参数 |
| ---------- | ---------------------------------------------------- | ---- |
| toSaveData | 触发表单校验，校验失败返回 false,校验成功返回 表单值 | —    |
| submitForm | 触发提交表单事件                                     | —    |
| resetForm  | 触发重置事件                                         | —    |

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

:tada: 其他参考[通用配置](#formitem-通用配置)

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

:tada: 其他参考[通用配置](#formitem-通用配置)

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

:tada: 其他参考[通用配置](#formitem-通用配置)

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

:tada: 其他参考[通用配置](#formitem-通用配置)

## checkbox

### 示例

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'checkbox',
      label: 'checkbox',
      value: [],
      element: 'checkbox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
    },
    {
      name: 'checkboxBorder',
      label: 'checkboxBorder',
      value: [],
      element: 'checkbox',
      elementType: 'borderBox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
    },
    {
      name: 'checkboxButton',
      label: 'checkboxButton',
      value: [],
      element: 'checkbox',
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

#### 表单校验

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'checkbox',
      label: 'checkbox',
      value: [],
      element: 'checkbox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'checkboxBorder',
      label: 'checkboxBorder',
      value: [],
      element: 'checkbox',
      elementType: 'borderBox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'checkboxButton',
      label: 'checkboxButton',
      value: [],
      element: 'checkbox',
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

### checkbox 的 formItem 配置

| 属性             | 说明                  | 可选值                         | 默认值   |
| ---------------- | --------------------- | ------------------------------ | -------- |
| elementType      | 二级类型              | checkbox、borderBox、buttonBox | checkbox |
| attr             | checkbox-group 的配置 | —                              | —        |
| options          | checkbox 列表         | —                              | —        |
| optionsItem.attr | checkbox 的配置       | —                              | —        |

:tada: 其他参考[通用配置](#formitem-通用配置)

## radio

### 示例

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

#### 表单校验

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

### radio 的 formItem 配置

| 属性             | 说明               | 可选值                      | 默认值 |
| ---------------- | ------------------ | --------------------------- | ------ |
| elementType      | 二级类型           | radio、borderBox、buttonBox | radio  |
| attr             | radio-group 的配置 | —                           | —      |
| options          | radio 列表         | —                           | —      |
| optionsItem.attr | radio 的配置       | —                           | —      |

:tada: 其他参考[通用配置](#formitem-通用配置)

## cascader

### 示例

#### 基础 cascader

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'cascader',
      label: 'cascader',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      attr: {
        placeholder: '这是一个cascader',
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

#### 仅显示最后一级

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'cascader',
      label: 'cascader',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      attr: {
        'show-all-levels': false,
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

#### 多选 cascader

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let cols = 2

let dynamicForm = reactive({
  form: [
    {
      name: 'cascader',
      label: 'cascader',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      attr: {
        props: {
          multiple: true,
        },
      },
      col: 1,
    },
    {
      name: 'cascader-clp',
      label: 'collapse-tags',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      attr: {
        'collapse-tags': true,
        props: {
          multiple: true,
        },
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

#### 选择任意一级选项

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let cols = 2

let dynamicForm = reactive({
  form: [
    {
      name: 'cascader',
      label: 'cascader',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      attr: {
        props: { checkStrictly: true },
      },
      col: 1,
    },
    {
      name: 'cascader',
      label: 'cascader-mult',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      attr: {
        props: { checkStrictly: true, multiple: true },
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

#### 动态加载

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'cascader',
      label: 'cascader',
      value: null,
      element: 'cascader',
      attr: {
        props: {
          lazy: true,
          lazyLoad: lazyLoad,
        },
      },
    },
  ],
})

let id = 0
function lazyLoad(node, resolve) {
  const { level } = node
  setTimeout(() => {
    const nodes = Array.from({ length: level + 1 }).map((item) => ({
      value: ++id,
      label: `选项${id}`,
      leaf: level >= 2,
    }))
    // 通过调用resolve将子节点数据返回，通知组件数据加载完成
    resolve(nodes)
  }, 1000)
}

function submit(value) {
  console.log(value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" @save="submit" />
</template>
```

:::

#### 可搜索 cascader

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let cols = 2

let dynamicForm = reactive({
  form: [
    {
      name: 'cascader',
      label: 'cascader',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      attr: {
        filterable: true,
      },
      col: 1,
    },
    {
      name: 'cascader-clp',
      label: 'collapse-tags',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      attr: {
        filterable: true,
        'collapse-tags': true,
        props: {
          multiple: true,
        },
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

#### 自定义模板 cascader

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
    [h('span', {}, props.data.label), h('span', {}, props.data.desc)]
  )
}

let dynamicForm = reactive({
  form: [
    {
      name: 'cascader',
      label: 'cascader',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          desc: 'desc1',
          children: [
            { value: 'axure', label: 'Axure Components', desc: 'desc-axure' },
            { value: 'sketch', label: 'Sketch Templates', desc: 'desc-sketch' },
            { value: 'jiaohu', label: '组件交互文档', desc: 'desc-jiaohu' },
          ],
        },
        { label: 'label2', value: 'value2', desc: 'desc2' },
      ],
      element: 'cascader',
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
      name: 'cascader',
      label: 'cascader',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '组件交互文档' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
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

### cascader 的 formItem 配置

| 属性        | 说明                                                                                               | 可选值   | 默认值   |
| ----------- | -------------------------------------------------------------------------------------------------- | -------- | -------- |
| elementType | 二级类型                                                                                           | cascader | cascader |
| optionsItem | 自定义的 option 组件,通过 props.node,props.data 传递数据，具体可参考 element-plus 的 cascader 插槽 | —        | —        |

:tada: 其他参考[通用配置](#formitem-通用配置)
