<!-- 
  名称：ins-select
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月3日14:51:38
 -->
<script setup>
import ItemText from './ItemText.vue'

import useSetElementType from './composables/useSetElementType.js'
import useSetAttrs from './composables/useSetAttrs.js'

import { useVModel } from '@vueuse/core'

let props = defineProps({
  item: {
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
let { elementType } = useSetElementType(props.item)

/* attr */
let { $attrs } = useSetAttrs(props.item, elementType)

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
    <!-- 文本 -->
    <item-text v-if="item.isText" :item="item" />

    <!-- 组件 -->
    <el-select v-else v-model="selectValue" v-bind="$attrs" @change="change($event)">
      <!-- 分组 -->
      <template v-if="elementType === 'group'">
        <el-option-group v-for="group in item.options" :key="group.label" :label="group.label">
          <el-option
            v-for="option in group.options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          >
            <component :is="item.optionsItem" :option="option" />
          </el-option>
        </el-option-group>
      </template>

      <!-- 其他 -->
      <template v-else>
        <el-option
          v-for="option in item.options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        >
          <component :is="item.optionsItem" :option="option" />
        </el-option>
      </template>
    </el-select>
  </div>
</template>

<style lang="scss" scoped>
.ins-select {
  font-family: inherit;
  :deep(.el-select) {
    width: 100%;
  }
}
</style>
