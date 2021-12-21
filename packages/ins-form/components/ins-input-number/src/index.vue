<!-- 
  名称：ins-input-number
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月4日09:22:36
 -->
<script setup>
import InputNumber from '../components/input-number/index.vue'
import InputNumberRange from '../components/input-number-range/index.vue'
import InputNumberWithUnit from '../components/input-number-with-unit/index.vue'
// import InputNumberWithUnit from '../components/InputNumberWithUnit.vue'

import useSetElementType from './composables/useSetElementType'

import { useVModel } from '@vueuse/core'

let props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  index: {
    type: Number,
    default: 0,
  },
  modelValue: {
    type: [Number, String, Array],
    default: null,
  },
})
let emit = defineEmits(['update:modelValue', 'change'])

/* 类型 */
let { elementType } = useSetElementType(props.item)

/* 值的双向绑定 */
let numberValue = useVModel(props, 'modelValue', emit)

/* change事件 */
function change() {
  emit('change')
}
</script>

<template>
  <div class="ins-input-number">
    <!-- 组件 -->
    <!-- 普通input-number -->
    <input-number
      v-if="elementType === 'number'"
      v-model:modelValue="numberValue"
      :item="item"
      @change="change"
    />

    <!-- 带单位的input-number -->
    <input-number-with-unit
      v-if="elementType === 'numberWithUnit'"
      v-model:modelValue="numberValue"
      :item="item"
      :index="index"
      @change="change"
    />

    <input-number-range
      v-if="elementType === 'numberRange'"
      v-model:modelValue="numberValue"
      :item="item"
      :index="index"
      @change="change"
    />
  </div>
</template>

<style lang="scss">
.ins-input-number {
  font-family: inherit;
}
</style>
