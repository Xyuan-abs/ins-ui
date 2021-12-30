<!-- 
  名称：ins-pager
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月3日14:51:38
 -->
<script setup>
import useSetAttrs from './composables/useSetAttrs.js'
import { useVModel } from '@vueuse/core'

let props = defineProps({
  pagerParams: { type: Object, default: () => ({}), required: true },
})
const emit = defineEmits(['update:pagerParams', 'size-change', 'current-change', 'change'])

let { $attrs } = useSetAttrs(props.pagerParams) // attrs配置
let pagerParamsVM = useVModel(props, 'pagerParams', emit) // 值的双向绑定

/* 事件 */
const handleCurrentChange = (...arg) => {
  emit('current-change', ...arg)
  change()
}
const handleSizeChange = (...arg) => {
  pagerParamsVM.value.page = 1
  emit('size-change', ...arg)
  change()
}
const change = () => {
  emit('change')
}
</script>

<template>
  <div class="ins-pager">
    <el-pagination
      v-model:currentPage="pagerParamsVM.page"
      v-model:pageSize="pagerParamsVM.limit"
      v-bind="$attrs"
      :total="pagerParamsVM.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<style lang="scss">
.ins-pager {
  font-family: inherit;
  .el-pagination__jump {
    margin-left: 0px;
  }
}
</style>
