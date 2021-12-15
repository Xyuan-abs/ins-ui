<!-- 
  名称：带单位的input-number
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月4日09:39:42
 -->
<script setup>
import { ref, watch, computed, nextTick } from 'vue'

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
let startAttr = computed(() => Object.assign(defaultAttrs, props.item.attr?.[0]))
let endAttr = computed(() => Object.assign(defaultAttrs, props.item.attr?.[1]))

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

/* 值的双向绑定 -- start */
let startValue = ref()
let endValue = ref()
watch(
  () => props.modelValue,
  (cur) => {
    startValue.value = cur?.[0]
    endValue.value = cur?.[1]
  },
  { immediate: true }
)
// start的change事件
function startChange(value) {
  startValue.value = value

  let hasEndValue = endValue.value || endValue.value === 0
  // start > end  =>  start = end
  if (hasEndValue && value > endValue.value) {
    nextTick(() => {
      startValue.value = endValue.value
      change()
    })
  } else {
    change()
  }
}
// end的change事件
function endChange(value) {
  endValue.value = value

  let hasStartValue = startValue.value || startValue.value === 0

  // end < start  =>  end = start
  if (hasStartValue && value < startValue.value) {
    nextTick(() => {
      endValue.value = startValue.value
      change()
    })
  } else {
    change()
  }
}
// 统一change事件
function change() {
  let result = [startValue.value, endValue.value]

  emit('update:modelValue', result)
  emit('change')
}
/* 值的双向绑定 -- end */
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
      <el-input-number :model-value="startValue" v-bind="startAttr" @change="startChange" />
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
      <el-input-number :model-value="endValue" v-bind="endAttr" @change="endChange" />
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
