<!-- 
  名称：ins-cascader
  版本：1.0.0 
  作者：Xyuan
  时间：2021年12月22日17:04:29
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
    type: [String, Number, Array],
    default: '',
  },
})
let emit = defineEmits(['update:modelValue', 'change'])

/* 组件类型 */
let { elementType } = useSetElementType(props.formItem)

/* attr */
let { $attrs } = useSetAttrs(props.formItem, elementType)

/* 值的双向绑定 */
let selectValue = useVModel(props, 'modelValue', emit) // 值的双向绑定

/* change事件 */
function change() {
  emit('change')
}
/* 值的双向绑定 -- end */
</script>

<template>
  <div class="ins-cascader">
    <!-- 组件 -->
    <el-cascader
      v-model="selectValue"
      :options="formItem.options"
      v-bind="$attrs"
      @change="change($event)"
    >
      <template v-if="formItem.optionsItem" #default="{ node, data }">
        <component :is="formItem.optionsItem" :node="node" :data="data" />
      </template>
    </el-cascader>
  </div>
</template>

<style lang="scss">
.ins-cascader {
  .el-cascader {
    width: 100%;
  }
}
</style>
