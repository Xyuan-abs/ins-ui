<!-- 
  名称：ins-table
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月3日14:51:38
 -->
<script setup>
import useSetAttrs from './composables/useSetAttrs.js'
import useSetEvent from './composables/useSetEvent.js'

defineProps({
  /**
   * 表格头部配置
   */
  tableHead: { type: Array, default: null, required: true },
  /**
   * 表格数据配置
   */
  tableData: { type: Array, default: null, required: true },
  /**
   * loading
   */
  loading: { type: Boolean, default: false },
  /**
   * 多选
   */
  selection: { type: Boolean, default: false },
  /**
   * 序号
   */
  hasIndex: { type: Boolean, default: false },
  /**
   * 展开行
   */
  expand: { type: Boolean, default: false },
})

let { $attrs } = useSetAttrs() // attrs配置
let { elTableRef, dispatch } = useSetEvent() // el-table 方法

/* 暴露出去的属性和方法 */
defineExpose({
  elTableRef,
  dispatch,
})
</script>

<template>
  <div class="ins-table">
    <el-table ref="elTableRef" v-loading="loading" :data="tableData" v-bind="$attrs">
      <!-- 展开行 -->
      <el-table-column v-if="expand" type="expand" width="50" align="center">
        <template #default="props">
          <slot name="expand" v-bind="props"></slot>
        </template>
      </el-table-column>

      <!-- 多选框列 -->
      <el-table-column v-if="selection" type="selection" width="50" align="center" />

      <!-- 序号列 -->
      <el-table-column v-if="hasIndex" type="index" width="80" label="" />

      <!-- 其他 -->
      <template v-for="(head, index) in tableHead" :key="`ins-table${index}`">
        <!-- 自定义列 插槽 -->
        <slot v-if="head.isSlot === true" :name="head.prop" :head="head" />

        <!-- 自定义列 动态组件 -->
        <component :is="head.component" v-else-if="head.component" :head="head" />

        <!-- 默认列 -->
        <el-table-column v-else :label="head.label" :prop="head.prop" v-bind="head.attrs" />
      </template>

      <!-- 空数据 -->
      <template #empty>
        <slot name="empty">暂无数据</slot>
      </template>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.ins-table {
  font-family: inherit;
}
</style>
