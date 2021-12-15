# Form 动态表单

由输入框、选择器、单选框、多选框、时间选择器等控件组成，用以收集、校验、提交数据

## InsForm

### 基础表单

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'input',
      label: 'inputLabel',
      value: null,
      element: 'input',
    },
    {
      name: 'select',
      label: 'selectLabel',
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
      label: 'dateLabel',
      value: null,
      element: 'datePicker',
    },
    {
      name: 'input-number',
      label: 'inputNumber',
      value: null,
      element: 'inputNumber',
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

### 多列表单

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'input',
      label: 'inputLabel',
      value: null,
      element: 'input',
      col: 1,
    },
    {
      name: 'select',
      label: 'selectLabel',
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
      label: 'dateLabel',
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
  <ins-form :dynamicForm="dynamicForm" :cols="3" @save="submit" />
</template>
```

:::

### InsForm Attributes

属性除继承自 el-form 属性外，增加以下属性

| 参数        | 说明                                           | 类型    | 可选值     | 默认值 |
| ----------- | ---------------------------------------------- | ------- | ---------- | ------ |
| dynamicForm | 动态表单配置对象                               | Object  | —          | —      |
| cols        | 一行分为几列，配合 formItem.col 实现表单栅格化 | Number  | —          | —      |
| hasSubmit   | 是否展示提交、重置按钮                         | Boolean | true/false | true   |
| submitText  | 提交按钮文本                                   | String  | —          | 提交   |

### dynamicForm.form 通用配置

其他属性参考 不同类型 各自的 dynamicForm.form 配置

| 属性    | 说明                                              | 类型          |
| ------- | ------------------------------------------------- | ------------- |
| name    | 属性名                                            | String        |
| label   | el-form 的 label                                  | String        |
| value   | 属性值                                            | Any           |
| element | 表单大类型                                        | String        |
| col     | 配合 cols，表示该项占几列，默认占一整行           | Number        |
| width   | 表单项宽度,cols 与 width 同时存在时，width 不生效 | String,Number |

### InsForm Events

| 事件名称 | 说明                     | 回调参数          |
| -------- | ------------------------ | ----------------- |
| change   | 仅在表单项值改变时时触发 | (formItem:Object) |

### InsForm Methods

| 事件名称   | 说明                                                 | 参数 |
| ---------- | ---------------------------------------------------- | ---- |
| toSaveData | 触发表单校验，校验失败返回 false,校验成功返回 表单值 | —    |

### bbbbbbbbb

1111

### bbbbbbbbb

1111

### bbbbbbbbb

1111

### bbbbbbbbb

1111
