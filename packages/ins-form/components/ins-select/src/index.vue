<!-- 
  名称：ins-select
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月3日14:51:38
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
  <div class="ins-select">
    <!-- 组件 -->
    <el-select v-model="selectValue" v-bind="$attrs" @change="change($event)">
      <!-- 分组 -->
      <template v-if="elementType === 'group'">
        <el-option-group v-for="group in formItem.options" :key="group.label" :label="group.label">
          <el-option
            v-for="option in group.options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          >
            <component :is="formItem.optionsItem" v-if="formItem.optionsItem" :option="option" />
          </el-option>
        </el-option-group>
      </template>

      <!-- 其他 -->
      <template v-else>
        <el-option
          v-for="option in formItem.options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        >
          <component :is="formItem.optionsItem" v-if="formItem.optionsItem" :option="option" />
        </el-option>
      </template>
    </el-select>
  </div>
</template>

<style lang="scss">
.ins-select {
  .el-select {
    width: 100%;
  }
}
</style>
