# Select

[[toc]]

## 示例

### 基础 Select

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

### 可搜索 Select

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

### 多选 Select

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

### 分组 Select

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

### 创建条目 Select

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

### 自定义模板 Select

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

### 表单校验

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

## select 的 formItem 配置

| 属性        | 说明                 | 可选值        | 默认值 |
| ----------- | -------------------- | ------------- | ------ |
| elementType | 二级类型             | select、group | select |
| optionsItem | 自定义的 option 组件 | —             | —      |

:tada: 其他参考[通用配置](/ins-ui/components/form/form.html#formitem-通用配置)
