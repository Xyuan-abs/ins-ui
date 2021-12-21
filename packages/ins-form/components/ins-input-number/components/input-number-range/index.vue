<!-- 
  名称：带单位的input-number-range
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月4日09:39:42
 -->
<script setup>
import useSetAttrs from './composables/useSetAttrs.js'
import useSetRules from './composables/useSetRules.js'
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

/* attr */
const { $startAttr, $endAttr } = useSetAttrs(props.item)

/* rules */
const { startRules, endRules } = useSetRules(props.item)

/* 值的双向绑定 */
let { startValue, endValue, setStartValue, setEndValue } = useSetModel(
  props,
  [$startAttr.value, $endAttr.value],
  emit
)

/* 统一change事件 */
function change() {
  emit('change')
}
</script>

<template>
  <div class="ins-input-number__range">
    <!-- 起始值 -->
    <el-form-item
      :key="`form-item-${item.name}-number-range-start`"
      class="number-range-item number-range-start"
      :prop="'form[' + index + '].value[0]'"
      :rules="startRules"
    >
      <el-input-number
        class="hidden-crease"
        :model-value="startValue"
        v-bind="$startAttr"
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
      <el-input-number
        class="hidden-crease"
        :model-value="endValue"
        v-bind="$endAttr"
        @change="setEndValue($event), change"
      />
    </el-form-item>
  </div>
</template>

<style lang="scss">
.ins-input-number__range {
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .number-range-item {
    flex: 1;
    margin-bottom: 0;
  }
  .range-separator {
    display: inline-block;
    text-align: center;
    padding: 0 10px;
    flex-shrink: 0;
  }
}
</style>
