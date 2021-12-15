<!-- 
  名称：带单位的input-number
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月4日09:39:42
 -->
<script setup>
import { ref, watch, computed, toRefs } from 'vue'

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

let { options } = toRefs(props.item)

/* el-input默认attr */
const defaultAttrs = {
  placeholder: '请输入' + (props.item.label ?? ''),
}

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
let inputValue = ref()
let unitValue = ref()
watch(
  () => props.modelValue,
  (cur) => {
    inputValue.value = cur?.[0]
    unitValue.value = cur?.[1]
  },
  {
    immediate: true,
  }
)
function inputChange(value) {
  let result = [value, unitValue.value]
  emit('update:modelValue', result)
  emit('change')
}
function unitChange(value) {
  let result = [inputValue.value, value]
  emit('update:modelValue', result)
  emit('change')
}
/* 值的双向绑定 -- end */
</script>

<template>
  <div class="ins-input-number-with-unit">
    <!-- 值 -->
    <el-form-item
      class="number-with-unit-input"
      :prop="'form[' + index + '].value[0]'"
      :rules="startRules"
    >
      <el-input-number
        v-model="inputValue"
        v-bind="Object.assign(defaultAttrs, item.attr || {})"
        @change="inputChange"
      />
    </el-form-item>

    <!-- 单位 -->
    <el-form-item
      class="number-with-unit-select"
      :prop="'form[' + index + '].value[1]'"
      :rules="endRules"
    >
      <el-select v-model="unitValue" placeholder="单位" @change="unitChange">
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

<style lang="scss" scoped>
.ins-input-number-with-unit {
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .number-with-unit-input {
    width: calc(100% - 100px - 5px);
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

  .number-with-unit-select {
    width: 100px;
    :deep(.el-select) {
      width: 100%;
    }
  }

  .number-with-unit-input,
  .number-with-unit-select {
    margin-bottom: 0;
  }
}
</style>
