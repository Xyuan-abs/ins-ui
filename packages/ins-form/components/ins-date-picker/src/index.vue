<!-- 
  名称：ins-date-picker
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月25日14:02:11
 -->
<script setup>
import useSetElementType from './composables/useSetElementType.js'
import useSetAttrs from './composables/useSetAttrs.js'

import { useVModel } from '@vueuse/core'

let props = defineProps({
  formItem: {
    type: Object,
    default: () => {},
  },
  modelValue: {
    type: [String, Array],
    default: null,
  },
})
let emit = defineEmits(['update:modelValue', 'change'])

// 类型
let { elementType } = useSetElementType(props.formItem)
// attr
let { $attrs } = useSetAttrs(props.formItem, elementType)
// 值的双向绑定
let dateValue = useVModel(props, 'modelValue', emit)

function change() {
  emit('change')
}
</script>

<template>
  <div class="ins-date-picker">
    <!-- 组件 -->
    <el-date-picker v-model="dateValue" v-bind="$attrs" @change="change" />
  </div>
</template>

<style lang="scss">
.ins-date-picker {
  font-family: inherit;
  .el-date-editor {
    width: 100%;
    .el-range-separator {
      width: 25px;
    }
  }
}
</style>
