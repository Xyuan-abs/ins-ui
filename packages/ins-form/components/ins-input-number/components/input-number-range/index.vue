<!-- 
  名称：带单位的input-number-range
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月4日09:39:42
 -->
<script setup>
import { computed } from 'vue'

import useSetModel from './composables/useSetModel.js'

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
    type: Array,
    default: () => [],
  },
})
let emit = defineEmits(['update:modelValue', 'change'])

/* el-input默认attr */
const defaultAttrs = {}

/* 前后项的配置 */
let startAttr = computed(() => Object.assign({}, defaultAttrs, props.item.attr?.[0]))
let endAttr = computed(() => Object.assign({}, defaultAttrs, props.item.attr?.[1]))

/* 前后项的rules */
let startRules = computed(() => {
  return setRules(props.item, 0)
})
let endRules = computed(() => {
  return setRules(props.item, 1)
})
function setRules(item, index) {
  let attr = item.attr?.[index] ?? {}
  let rules = attr?.rules ?? []

  if (item.required) {
    rules.push({
      required: true,
      message: `请输入${attr.label || ''}`,
      trigger: 'blur',
    })
  }

  return rules
}

/* 值的双向绑定 */
let { startValue, endValue, setStartValue, setEndValue } = useSetModel(props, emit)

/* 统一change事件 */
function change() {
  emit('change')
}
</script>

<template>
  <div class="ins-input-number-range">
    <!-- 起始值 -->
    <el-form-item
      :key="`form-item-${item.name}-number-range-start`"
      class="number-range-item number-range-start"
      :prop="'form[' + index + '].value[0]'"
      :rules="startRules"
    >
      {{ startValue }}
      <el-input-number
        :model-value="startValue"
        v-bind="startAttr"
        @change="setStartValue($event), change"
      />
    </el-form-item>

    <!-- 分隔符 -->
    <span class="range-separator">-</span>

    <!-- 终止值 -->
    <el-form-item
      :key="`form-item-${item.name}-number-range-end`"
      class="number-range-item number-range-end"
      :prop="'form[' + index + '].value[1]'"
      :rules="endRules"
    >
      {{ endValue }}
      <el-input-number
        :model-value="endValue"
        v-bind="endAttr"
        @change="setEndValue($event), change"
      />
    </el-form-item>
  </div>
</template>

<style lang="scss" scoped>
.ins-input-number-range {
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .number-range-item {
    width: calc(50% - 10px);
    margin-bottom: 0;
    :deep(.el-input-number) {
      width: 100%;
      .el-input-number__decrease,
      .el-input-number__increase {
        display: none;
      }
      .el-input {
        .el-input__inner {
          padding: 0 10px;
          text-align: left;
        }
      }
    }
  }
  .range-separator {
    display: inline-block;
    width: 20px;
    text-align: center;
  }
}
</style>
