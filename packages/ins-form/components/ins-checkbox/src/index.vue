<!-- 
  名称-ins-checkbox
  版本：1.0.0 
  作者：Xyuan
  时间：2021年12月22日16:08:32
 -->
<script setup>
import useSetElementType from './composables/useSetElementType.js'
import useSetAttrs from './composables/useSetAttrs.js'

import { useVModel } from '@vueuse/core'

let props = defineProps({
  item: {
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
let { elementType } = useSetElementType(props.item)
// attr
let { $groupAttrs, setCheckboxAttrs } = useSetAttrs(props.item, elementType)
// 值的双向绑定
let checkboxValue = useVModel(props, 'modelValue', emit)

function change() {
  emit('change')
}
</script>

<template>
  <div class="ins-checkbox">
    <!-- 组件 -->
    <el-checkbox-group v-model="checkboxValue" v-bind="$groupAttrs" @change="change">
      <template v-for="option in item.options" :key="option.value">
        <!-- 按钮样式 -->
        <el-checkbox-button
          v-if="elementType === 'buttonBox'"
          :label="option.value"
          v-bind="setCheckboxAttrs(option)"
        >
          {{ option.label }}
        </el-checkbox-button>

        <!-- 其他 -->
        <el-checkbox v-else :label="option.value" v-bind="setCheckboxAttrs(option)">
          {{ option.label }}
        </el-checkbox>
      </template>
    </el-checkbox-group>
  </div>
</template>

<style lang="scss">
.ins-checkbox {
  font-family: inherit;
}
</style>
