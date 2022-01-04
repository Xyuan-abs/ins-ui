---
lang: zh-CN
title: Form 动态表单
---

# InsForm 动态表单

提供 Input、InputNumber、Select、Cascader、DatePicker、Checkbox、Radio 等表单控件，实现通过简单配置即可生成动态表单

[[toc]]

## 示例

### 基础表单

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
      width: 500,
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
      width: 500,
    },
    {
      name: 'date',
      label: 'date',
      value: null,
      element: 'datePicker',
      width: 500,
    },
    {
      name: 'input-number',
      label: 'inputNumber',
      value: null,
      element: 'inputNumber',
      width: '200px',
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
      width: 500,
    },
    {
      name: 'upload',
      label: 'upload',
      value: [],
      element: 'upload',
      elementType: 'fileList',
      attr: {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        fileList: [],
        limit: 2,
        'before-upload': handleBeforeUpload,
      },
      formatterValue: formatterValue,
      tip: '只能上传 jpg/png 文件，且不超过 500kb',
      width: '500px',
    },
    {
      name: 'rate',
      label: 'rate',
      value: null,
      element: 'rate',
      attr: {
        'show-score': true,
        'text-color': '#ff9900',
        'score-template': '{value}分',
      },
    },
  ],
})

function handleBeforeUpload(file) {
  const isJPG = file.type === 'image/jpeg'
  const isPng = file.type === 'image/png'
  const isLt500k = file.size / 1024 / 1024 < 0.5

  if (!isJPG && !isPng) {
    ElMessage.error('上传的文件只能是 JPG 或 PNG 格式!')
    return false
  }
  if (!isLt500k) {
    ElMessage.error('上传的文件大小不能超过 500KB!')
    return false
  }
  return true
}

function formatterValue(fileListItem) {
  let { response } = fileListItem
  return response.id
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

### 多列表单

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
    {
      name: 'rate',
      label: 'rate',
      value: null,
      element: 'rate',
      attr: {
        'show-score': true,
        'text-color': '#ff9900',
        'score-template': '{value}分',
      },
      col: 1,
    },
    {
      name: 'uploadImgList',
      label: 'uploadImgList',
      value: [],
      element: 'upload',
      elementType: 'imgList',
      attr: {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        fileList: [],
        limit: 3,
        'before-upload': handleBeforeUpload,
      },
      formatterValue: formatterValue,
      tip: '只能上传 jpg/png 文件，且不超过 500kb',
      col: 3,
    },
    {
      name: 'uploadDragImg',
      label: 'uploadDragImg',
      value: null,
      element: 'upload',
      elementType: 'dragImg',
      attr: {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        fileList: [],
        'before-upload': handleBeforeUpload,
      },
      formatterValue: formatterValue,
      tip: '只能上传 jpg/png 文件，且不超过 500kb',
      col: 3,
    },
  ],
})

function formatterValue(fileListItem) {
  let { url, response } = fileListItem
  return response.url ? response.url : url
}

function handleBeforeUpload(file) {
  const isJPG = file.type === 'image/jpeg'
  const isPng = file.type === 'image/png'
  const isLt500k = file.size / 1024 / 1024 < 0.5

  if (!isJPG && !isPng) {
    ElMessage.error('上传的文件只能是 JPG 或 PNG 格式!')
    return false
  }
  if (!isLt500k) {
    ElMessage.error('上传的文件大小不能超过 500KB!')
    return false
  }
  return true
}

function submit(value) {
  console.log(value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" :cols="cols" @save="submit" />
</template>
```

:::

### 纯文本

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
    {
      name: 'uploadFileList',
      label: 'uploadFileList',
      value: [],
      element: 'upload',
      elementType: 'fileList',
      attr: {
        fileList: [],
      },
      col: 2,
      width: '600px',
    },
    {
      name: 'uploadDragImg',
      label: 'uploadDragImg',
      value: [],
      element: 'upload',
      elementType: 'dragImg',
      attr: {
        fileList: [],
      },
      col: 3,
    },
    {
      name: 'uploadImgList',
      label: 'uploadImgList',
      value: [],
      element: 'upload',
      elementType: 'imgList',
      attr: {
        fileList: [],
      },
      col: 3,
    },
    {
      name: 'rate',
      label: 'rate',
      value: 4.3,
      element: 'rate',
      col: 1,
    },
  ],
})

setTimeout(() => {
  let url =
    'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'

  let fileList = dynamicForm.form.find(
    (d) => d.element === 'upload' && d.elementType === 'fileList'
  )
  fileList.attr.fileList = [
    {
      name: 'foodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfood.jpeg',
      url: url,
    },
    { name: 'food2.jpeg', url: 'url' },
    { name: 'food3.jpeg', url: url },
  ]

  let imgList = dynamicForm.form.find((d) => d.element === 'upload' && d.elementType === 'imgList')
  imgList.attr.fileList = [
    { name: 'food.jpeg', url: url },
    { name: 'food2.jpeg', url: url },
    { name: 'food3.jpeg', url: url },
  ]

  let dragImg = dynamicForm.form.find((d) => d.element === 'upload' && d.elementType === 'dragImg')
  dragImg.attr.fileList = [{ name: 'food.jpeg', url: url }]
}, 1000)
</script>

<template>
  <ins-form
    :dynamicForm="dynamicForm"
    :label-width="'120px'"
    :is-text="true"
    :cols="cols"
    :has-submit="false"
  />
</template>
```

:::

### 使用插槽

::: demo

```vue
<script setup>
import { reactive } from 'vue'
let dynamicForm = reactive({
  form: [
    {
      name: 'slot',
      label: 'slot',
      value: null,
      isSlot: true,
    },
    {
      name: 'slotRules',
      label: 'slotRules',
      value: null,
      isSlot: true,
      rules: [{ required: true, trigger: 'change' }],
    },
  ],
})

function submit(value) {
  console.log(value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" :cols="cols" @save="submit">
    <template #slot="{ formItem, index }">
      <el-input v-model="formItem.value" placeholder="这是一个通过插槽实现的表单项" />
    </template>
    <template #slotRules="{ formItem, index }">
      <el-input v-model="formItem.value" placeholder="这是一个通过插槽实现的表单项" />
    </template>
  </ins-form>
</template>
```

:::

::: tip 使用插槽时

- 插槽的 name 为 formItem.name
- 设置 formItem.element 和 formItem.elementType 无效
- 设置 isText 无效， 需要自行实现文本格式展示

:::

### FormInline

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
      rules: [{ require: true, trigger: 'change' }],
    },
  ],
})

function submit(value) {
  console.log(value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" :inline="true" @save="submit" />
</template>
```

:::

::: tip

- 行内表单 不显示 label

:::

## formItem 通用配置

其他属性参考 不同类型 各自的 formItem 配置

| 属性        | 说明                                                                  | 类型          |
| ----------- | --------------------------------------------------------------------- | ------------- |
| name        | 属性名                                                                | String        |
| label       | el-form 的 label                                                      | String        |
| value       | 属性值                                                                | Any           |
| element     | 表单一级类型                                                          | String        |
| elementType | 表单二级类型，具体参考对应 一级类型 的配置说明                        | String        |
| attr        | 对应 element-puls 组件的配置                                          | Object        |
| isText      | 是否纯文本展示,一般用于数据回显                                       | Boolean       |
| rules       | 校验规则                                                              | Array         |
| col         | 配合 cols，表示该项占几列 ,设置的是 max-width ，max-width 为默认 100% | Number        |
| width       | 表单项宽度,设置的是 width，默认 100%                                  | String,Number |

## InsForm Attributes

属性除继承自 el-form 属性外，增加以下属性

| 参数        | 说明                                           | 类型    | 可选值     | 默认值 |
| ----------- | ---------------------------------------------- | ------- | ---------- | ------ |
| dynamicForm | 动态表单配置对象                               | Object  | —          | —      |
| label-width | label 宽度                                     | String  | —          | 100px  |
| cols        | 一行分为几列，配合 formItem.col 实现表单栅格化 | Number  | —          | —      |
| hasSubmit   | 是否展示提交、重置按钮                         | Boolean | true/false | true   |
| submitText  | 提交按钮文本                                   | String  | —          | 提交   |
| isText      | 表单是否全部展示成纯文本                       | Boolean | true/false | false  |

## InsForm Events

| 事件名称 | 说明                           | 回调参数          |
| -------- | ------------------------------ | ----------------- |
| change   | 仅在表单项值改变时时触发       | (formItem:Object) |
| save     | 提交表单并校验成功后触发的事件 | (formData:Object) |
| reset    | 重置表单后触发的事件           |                   |

## InsForm Methods

| 事件名称      | 说明                                                                         | 参数                             |
| ------------- | ---------------------------------------------------------------------------- | -------------------------------- |
| toSaveData    | 触发表单校验，校验失败返回 false,校验成功返回 表单值                         | —                                |
| submitForm    | 触发提交表单事件                                                             | —                                |
| resetForm     | 触发重置事件                                                                 | —                                |
| validateField | 校验部分表单项，formItem 的 prop 格式为`form[index].value`，index 为数组顺序 | props：String \| Array，callback |
