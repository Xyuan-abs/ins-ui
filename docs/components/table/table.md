---
lang: zh-CN
title: Table 动态表格
---

# InsTable 动态表格

[[toc]]

## InsTable

### 基础表格

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let tableInfo = reactive({
  tableHead: [
    { label: '日期', prop: 'date' },
    { label: '姓名', prop: 'name' },
    { label: '地址', prop: 'address' },
  ],
  tableData: [],
  loading: false,
})

let getTableData = () => {
  tableInfo.loading = true
  setTimeout(() => {
    tableInfo.tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]
    tableInfo.loading = false
  }, 3000)
}

getTableData()
</script>

<template>
  <ins-table
    :tableHead="tableInfo.tableHead"
    :tableData="tableInfo.tableData"
    :loading="tableInfo.loading"
  />
</template>
```

:::

### 边框、斑马线表格

默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 border 属性，把该属性设置为 true 即可启用  
stripe 属性可以创建带斑马纹的表格。 如果 true, 表格将会带有斑马纹。

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let tableInfo = reactive({
  tableHead: [
    { label: '日期', prop: 'date' },
    { label: '姓名', prop: 'name' },
    { label: '地址', prop: 'address' },
  ],
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
})
</script>

<template>
  <ins-table
    v-bind="tableInfo.attrs"
    :tableHead="tableInfo.tableHead"
    :tableData="tableInfo.tableData"
    :border="true"
    :stripe="true"
  />
</template>
```

:::

### 固定表头

纵向内容过多时，可选择固定表头。  
只要在 el-table 元素中定义了 height 属性，即可实现固定表头的表格，而不需要额外的代码。

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let tableInfo = reactive({
  tableHead: [
    { label: '日期', prop: 'date' },
    { label: '姓名', prop: 'name' },
    { label: '地址', prop: 'address' },
  ],
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-06-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
})
</script>

<template>
  <ins-table
    v-bind="tableInfo.attrs"
    :tableHead="tableInfo.tableHead"
    :tableData="tableInfo.tableData"
    :height="250"
  />
</template>
```

:::

### 固定列

width 属性，列的宽度  
固定列需要使用 fixed 属性，它接受 Boolean 值 如果为 true, 列将被左侧固定. 它还接受传入字符串，left 或 right，表示左边固定还是右边固定。

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let tableInfo = reactive({
  tableHead: [
    { label: '日期', prop: 'date', attrs: { width: 250, fixed: 'left' } },
    { label: '姓名', prop: 'name', attrs: { width: 250 } },
    { label: 'State', prop: 'state', attrs: { width: 250 } },
    { label: 'City', prop: 'city', attrs: { width: 250 } },
    { label: '地址', prop: 'address', attrs: { width: 350, fixed: 'right' } },
  ],
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-06-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
})
</script>

<template>
  <ins-table :tableHead="tableInfo.tableHead" :tableData="tableInfo.tableData" />
</template>
```

:::

### 流体高度

当数据量动态变化时，可以为 Table 设置一个最大高度。  
通过设置 max-height 属性为 Table 指定最大高度。 此时若表格所需的高度大于最大高度，则会显示一个滚动条。

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let tableInfo = reactive({
  tableHead: [
    { label: '日期', prop: 'date' },
    { label: '姓名', prop: 'name' },
    { label: '地址', prop: 'address' },
  ],
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-06-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
})
</script>

<template>
  <ins-table :tableHead="tableInfo.tableHead" :tableData="tableInfo.tableData" :max-height="250" />
</template>
```

:::

### 单选表格

只需要配置 highlight-current-row 属性即可实现单选  
设置 hasIndex 属性为 true 即可显示从 1 开始的索引号

::: demo

```vue
<script setup>
import { reactive, ref, onMounted } from 'vue'

let tableInfo = reactive({
  tableHead: [
    { label: '日期', prop: 'date' },
    { label: '姓名', prop: 'name' },
    { label: '地址', prop: 'address' },
  ],
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
  attrs: {
    'highlight-current-row': true,
  },
})

let InsTable = ref(null)
let setCurrent = (row) => {
  InsTable.value.dispatch('setCurrentRow', row)
}

onMounted(() => {
  setCurrent(tableInfo.tableData[1])
})

let handleCurrentChange = (currentRow) => {
  console.log(currentRow)
}
</script>

<template>
  <ins-table
    ref="InsTable"
    v-bind="tableInfo.attrs"
    :tableHead="tableInfo.tableHead"
    :tableData="tableInfo.tableData"
    :hasIndex="true"
    @current-change="handleCurrentChange"
  />
</template>
```

:::

### 多选表格

只需要配置 selection 属性为 true 即可实现多选

::: demo

```vue
<script setup>
import { reactive, ref, onMounted } from 'vue'

let tableInfo = reactive({
  tableHead: [
    { label: '日期', prop: 'date' },
    { label: '姓名', prop: 'name' },
    { label: '地址', prop: 'address' },
  ],
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
})

let handleSelectionChange = (multipleSelection) => {
  console.log(multipleSelection)
}

let InsTable = ref(null)
let toggleSelection = (rows) => {
  rows.forEach((row) => {
    InsTable.value.dispatch('toggleRowSelection', row)
  })
}

onMounted(() => {
  toggleSelection([tableInfo.tableData[1], tableInfo.tableData[2]])
})
</script>

<template>
  <ins-table
    ref="InsTable"
    :tableHead="tableInfo.tableHead"
    :tableData="tableInfo.tableData"
    :selection="true"
    @selection-change="handleSelectionChange"
  />
</template>
```

:::

### 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。  
通过设置 expand 为 true 和 slot expand 可以开启展开行功能， el-table-column 的模板会被渲染成为展开行的内容  
通过 slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据

::: demo

```vue
<script setup>
import { reactive, ref, onMounted } from 'vue'

let tableInfo = reactive({
  tableHead: [
    { label: '日期', prop: 'date' },
    { label: '姓名', prop: 'name' },
    { label: '地址', prop: 'address' },
  ],
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
})
</script>

<template>
  <ins-table
    ref="InsTable"
    :tableHead="tableInfo.tableHead"
    :tableData="tableInfo.tableData"
    :expand="true"
  >
    <template #expand="{ row }">
      {{ row }}
    </template>
  </ins-table>
</template>
```

:::

### 排序

对表格进行排序，可快速查找或对比数据。

在列中设置 `sortable` 属性即可实现以该列为基准的排序， 接受一个 Boolean，默认为 false。 可以通过 Table 的 `default-sort` 属性设置默认的排序列和排序顺序。 可以使用 `sort-method` 或者 `sort-by` 使用自定义的排序规则。 如果需要`后端排序`，需将 `sortable` 设置为 `custom`，同时在 Table 上监听 `sort-change` 事件， 在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。 在本例中，我们还使用了 `formatter` 属性，它用于格式化指定列的值， 接受一个 Function，会传入两个参数：`row` 和 `column`， 可以根据自己的需求进行处理。

::: demo

```vue
<script setup>
import { reactive, ref, onMounted } from 'vue'

let formatter = (row, column) => {
  return 'formatter：' + row.address
}

let tableInfo = reactive({
  tableHead: [
    { label: '日期', prop: 'date', attrs: { sortable: true } },
    { label: '姓名', prop: 'name', attrs: { sortable: true } },
    { label: '地址', prop: 'address', attrs: { formatter: formatter } },
  ],
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom1',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom2',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom3',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom4',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
})
</script>

<template>
  <ins-table
    ref="InsTable"
    :tableHead="tableInfo.tableHead"
    :tableData="tableInfo.tableData"
    :default-sort="{ prop: 'date', order: 'descending' }"
  >
  </ins-table>
</template>
```

:::

### 自定义列模板

通过设置 slot header 来自定义表头。  
通过设置 slot default 来自定义内容。

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let tableInfo = reactive({
  tableHead: [
    { label: '日期', prop: 'date' },
    { label: '姓名', prop: 'name' },
    { label: '地址', prop: 'address' },
    {
      label: '操作',
      prop: 'opt',
      isSlot: true,
      attrs: { width: 160, fixed: 'right' },
    },
  ],
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
})

let handleEdit = (index, row) => {
  console.log(index, row)
}
let handleDelete = (index, row) => {
  console.log(index, row)
}
</script>

<template>
  <ins-table :tableHead="tableInfo.tableHead" :tableData="tableInfo.tableData">
    <!-- 自定义列 -->
    <template #opt="{ head }">
      <el-table-column :label="head.label" :prop="head.prop" v-bind="head.attrs">
        <!-- 自定义列 表头 -->
        <template #header>
          <span>{{ head.label }}</span>
        </template>
        <!-- 自定义列 内容 -->
        <template #default="{ row, $index }">
          <el-button size="mini" @click="handleEdit($index, row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete($index, row)">Delete</el-button>
        </template>
      </el-table-column>
    </template>
  </ins-table>
</template>
```

:::

### 空数据

通过设置 slot empty 来自定义空数据展示。

::: demo

```vue
<script setup>
import { reactive } from 'vue'

let tableInfo = reactive({
  tableHead: [
    { label: '日期', prop: 'date' },
    { label: '姓名', prop: 'name' },
    { label: '地址', prop: 'address' },
  ],
  tableData: [],
})
</script>

<template>
  <ins-table :tableHead="tableInfo.tableHead" :tableData="tableInfo.tableData">
    <template #empty> 这个表格是空的啊~ </template>
  </ins-table>
</template>
```

:::

### InsTable Attributes

属性除继承自 el-table 属性外，增加以下属性

| 参数      | 说明                              | 类型    | 默认值 |
| --------- | --------------------------------- | ------- | ------ |
| tableHead | 表头                              | Array   | —      |
| tableData | 表数据                            | Array   | —      |
| loading   | 是否加载中                        | Boolean | false  |
| selection | 是否多选                          | Boolean | false  |
| hasIndex  | 是否展示序号                      | Boolean | false  |
| expand    | 是否展开行，配合 slot expand 使用 | Boolean | false  |

### InsTable 暴露的属性和方法

| 名称       | 类型 | 说明                     | 参数                                     |
| ---------- | ---- | ------------------------ | ---------------------------------------- |
| elTableRef | 属性 | el-table 组件的 ref      | —                                        |
| dispatch   | 方法 | 触发 el-table 暴露的方法 | (eventName:String,...arg:事件对应的参数) |

### tableHead 的数据格式

| 名称   | 说明                          |
| ------ | ----------------------------- |
| label  | 表头 label                    |
| prop   | 对应 tableData 数据值的属性名 |
| isSlot | 是否是自定义列                |
| attrs  | 列的属性                      |

### InsTable Slot

::: tip

- head.prop  
  自定义列，通过 slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据
- empty  
  自定义空数据展示

:::
