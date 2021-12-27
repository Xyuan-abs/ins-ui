<!-- 
  名称-ins-radio
  版本：1.0.0 
  作者：Xyuan
  时间：2021年12月22日16:04:56
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
let { $groupAttrs, setRadioAttrs } = useSetAttrs(props.formItem, elementType)
// 值的双向绑定
let radioValue = useVModel(props, 'modelValue', emit)

function change() {
  emit('change')
}
</script>

<template>
  <div class="ins-radio">
    <!-- 组件 -->
    <el-radio-group v-model="radioValue" v-bind="$groupAttrs" @change="change">
      <template v-for="option in formItem.options" :key="option.value">
        <!-- 按钮样式 -->
        <el-radio-button
          v-if="elementType === 'buttonBox'"
          :label="option.value"
          v-bind="setRadioAttrs(option)"
        >
          {{ option.label }}
        </el-radio-button>

        <!-- 其他 -->
        <el-radio v-else :label="option.value" v-bind="setRadioAttrs(option)">
          {{ option.label }}
        </el-radio>
      </template>
    </el-radio-group>
  </div>
</template>

<style lang="scss">
.ins-radio {
  font-family: inherit;
}
</style>
