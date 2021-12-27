---
lang: zh-CN
title: Form - Upload
---

# Upload

[[toc]]

## 示例

### FileList Upload

::: demo

```vue
<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

let dynamicForm = reactive({
  form: [
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

function handleFormItemChange(...arg) {
  console.log('handleFormItemChange', ...arg)
}

function submit(value) {
  console.log('submit', value)
}

setTimeout(() => {
  let url =
    'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  dynamicForm.form[0].value = [url]
  dynamicForm.form[0].attr.fileList = [
    {
      name: 'food.jpeg',
      url: url,
    },
  ]
}, 1000)
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" @save="submit" @change="handleFormItemChange" />
</template>
```

:::

### ImgList Upload

::: demo

```vue
<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

let dynamicForm = reactive({
  form: [
    {
      name: 'upload',
      label: 'upload',
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
    },
  ],
})

setTimeout(() => {
  let url =
    'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  dynamicForm.form[0].value = [url]
  dynamicForm.form[0].attr.fileList = [
    {
      name: 'food.jpeg',
      url: url,
    },
  ]
}, 1000)

// 格式化 value
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

function handleFormItemChange(...arg) {
  console.log('handleFormItemChange', ...arg)
}

function submit(value) {
  console.log('submit', value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" @save="submit" @change="handleFormItemChange" />
</template>
```

:::

### DragImg Upload

::: demo

```vue
<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

let dynamicForm = reactive({
  form: [
    {
      name: 'upload',
      label: 'upload',
      value: null,
      element: 'upload',
      elementType: 'dragImg',
      attr: {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        fileList: [],
        'on-remove': () => {
          console.log('on-remove')
        },
      },
      formatterValue: formatterValue,
      tip: '只能上传 jpg/png 文件，且不超过 500kb',
    },
  ],
})

setTimeout(() => {
  let url =
    'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  dynamicForm.form[0].value = url
  dynamicForm.form[0].attr.fileList = [
    {
      name: 'food.jpeg',
      url: url,
    },
  ]
}, 1000)

// 格式化 value
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

function handleFormItemChange(...arg) {
  console.log('handleFormItemChange', ...arg)
}

function submit(value) {
  console.log('submit', value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" @save="submit" @change="handleFormItemChange" />
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
      name: 'upload',
      label: 'upload',
      value: [],
      element: 'upload',
      elementType: 'fileList',
      attr: {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        fileList: [],
      },
      formatterValue: formatterValue,
      tip: '只能上传 jpg/png 文件，且不超过 500kb',
      width: '500px',
      rules: [{ required: true, trigger: 'change' }],
    },
  ],
})

function formatterValue(fileListItem) {
  let { url, response } = fileListItem
  return response.id
}

function handleFormItemChange(...arg) {
  console.log('handleFormItemChange', ...arg)
}

function submit(value) {
  console.log('submit', value)
}
</script>

<template>
  <ins-form :dynamicForm="dynamicForm" @save="submit" />
</template>
```

:::

## Upload 的 formItem 配置

| 属性           | 说明                                                                     | 可选值                     | 默认值   |
| -------------- | ------------------------------------------------------------------------ | -------------------------- | -------- |
| elementType    | 二级类型                                                                 | fileList、imgList、dragImg | fileList |
| formatterValue | 格式化 value 的值，不传时取整个 response 对象                            | —                          | —        |
| tip            | 提示文字                                                                 | —                          | —        |
| attr.fileList  | 回显数据，formItem.attr.fileList 的格式为 [{name:'xxx', url:'xxxx.yyy'}] | —                          | —        |

:tada: 其他参考[通用配置](/ins-ui/components/form/form.html#formitem-通用配置)

## 预设事件

| 属性       | 说明                                                                                  |
| ---------- | ------------------------------------------------------------------------------------- |
| on-exceed  | 超出 limit 提示，可通过 formItem.attr.on-exceed 自定义提示                            |
| on-preview | elementType 为 imgList 时 已预设 图片预览，可通过 formItem.attr.on-preview 自定义预览 |

::: tip 数据回显

数据回显时，要同时对 value 和 attr.fileList 分别赋值

:::

::: tip InsForm change 事件

上传文件成功、删除文件才触发 InsForm 的 change 事件

:::
