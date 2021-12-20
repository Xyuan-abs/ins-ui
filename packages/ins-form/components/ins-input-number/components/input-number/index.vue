<!-- 
  名称：带单位的input-number
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月4日09:39:42
 -->
<script setup>
import useSetAttrs from './composables/useSetAttrs.js'

import { useVModel } from '@vueuse/core'

let props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  modelValue: {
    type: Number,
    default: null,
  },
})
let emit = defineEmits(['update:modelValue', 'change'])

/* attr */
let { $attrs } = useSetAttrs(props.item)

/* 值的双向绑定 */
let inputValue = useVModel(props, 'modelValue', emit) // 值的双向绑定

/* change事件 */
function change() {
  emit('change')
}
</script>

<template>
  <div class="ins-input-number">
    <el-input-number v-model="inputValue" v-bind="$attrs" @input="change($event)" />
  </div>
</template>

<style lang="scss" scoped>
.ins-input-number {
  font-family: inherit;

  :deep(.el-input-number) {
    /* 解决校验错误时，-+号上下移动问题 */
    width: 100%;
    .el-input-number__decrease,
    .el-input-number__increase {
      bottom: 1px;
      i {
        line-height: 1.2;
      }
    }
  }
}
</style>
