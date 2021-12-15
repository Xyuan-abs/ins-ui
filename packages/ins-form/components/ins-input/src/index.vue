<!-- 
  名称：ins-input
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月3日14:51:38
 -->
<script setup>
import ItemText from './ItemText.vue'

import { useVModel } from '@vueuse/core'

import useSetElementType from './composables/useSetElementType.js'
import useSetAttrs from './composables/useSetAttrs.js'

let props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  modelValue: {
    type: String,
    default: '',
  },
})
let emit = defineEmits(['update:modelValue', 'change'])

/* 组件类型 */
let { elementType } = useSetElementType(props.item)

/* attrs配置 */
let { $attrs } = useSetAttrs(props.item, elementType)

/* 值的双向绑定 */
let inputValue = useVModel(props, 'modelValue', emit)

/* change事件 */
function inputChange() {
  emit('change')
}
</script>

<template>
  <div class="ins-input">
    <!-- 文本 -->
    <item-text v-if="item.isText" :item="item" />

    <!-- 组件 -->
    <template v-else>
      <!-- 普通input -->
      <el-input v-model="inputValue" v-bind="$attrs" @change="inputChange($event)" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.ins-input {
  font-family: inherit;
}
</style>
