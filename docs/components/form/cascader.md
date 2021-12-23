# Cascader

[[toc]]

## 示例

### 基础 Cascader

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

### 仅显示最后一级

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

### 多选 Cascader

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

### 选择任意一级选项

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

### 动态加载

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

### 可搜索 Cascader

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

### 自定义模板 Cascader

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

### 表单校验

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

## Cascader 的 formItem 配置

| 属性        | 说明                                                                                               | 可选值   | 默认值   |
| ----------- | -------------------------------------------------------------------------------------------------- | -------- | -------- |
| elementType | 二级类型                                                                                           | cascader | cascader |
| optionsItem | 自定义的 option 组件,通过 props.node,props.data 传递数据，具体可参考 element-plus 的 cascader 插槽 | —        | —        |

:tada: 其他参考[通用配置](/ins-ui/components/form/form.html#formitem-通用配置)
