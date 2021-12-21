<!-- 
  名称：带单位的input-number
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月4日09:39:42
 -->
<script setup>
import { toRefs } from 'vue'

import useSetAttrs from './composables/useSetAttrs'
import useSetRules from './composables/useSetRules'

import useSetModel from './composables/useSetModel'

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

// 单位下拉选项
let { options } = toRefs(props.item)

/* attr */
const { $inputAttrs, $unitAttrs } = useSetAttrs(props.item)

/* rules */
const { inputRules, unitRules } = useSetRules(props.item)

/* 值的双向绑定 */
let { inputValue, unitValue, inputChange, unitChange } = useSetModel(props, emit)

/* 统一change事件 */
function change() {
  emit('change')
}
</script>

<template>
  <div class="ins-input-number__with-unit">
    <!-- 值 -->
    <el-form-item
      class="number-with-unit-input"
      :prop="'form[' + index + '].value[0]'"
      :rules="inputRules"
    >
      <el-input-number
        v-model="inputValue"
        class="hidden-crease"
        v-bind="$inputAttrs"
        @change="inputChange($event), change"
      />
    </el-form-item>

    <!-- 单位 -->
    <el-form-item
      class="number-with-unit-select"
      :prop="'form[' + index + '].value[1]'"
      :rules="unitRules"
    >
      <el-select v-model="unitValue" v-bind="$unitAttrs" @change="unitChange($event), change">
        <el-option
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        />
      </el-select>
    </el-form-item>
  </div>
</template>

<style lang="scss">
.ins-input-number__with-unit {
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .number-with-unit-input {
    flex: 1;
  }

  .number-with-unit-select {
    flex-shrink: 0;
    width: 30%;
    min-width: 100px;
    margin-left: 5px;
    .el-select {
      width: 100%;
      .el-input__validateIcon {
        display: none;
      }
    }
  }

  .number-with-unit-input,
  .number-with-unit-select {
    margin-bottom: 0;
  }
}
</style>
