<!-- 
  名称：带单位的input-number
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月4日09:39:42
 -->
<script setup>
import { ref, watch } from 'vue'

let props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  modelValue: {
    type: Number,
    default: null,
  },
})
let emit = defineEmits(['update:modelValue', 'change'])

/* el-input默认attr */
const defaultAttrs = {}

/* 值的双向绑定 -- start */
let inputValue = ref()
watch(
  () => props.modelValue,
  (cur) => {
    inputValue.value = cur ?? undefined
  },
  {
    immediate: true,
  }
)
function change(value) {
  let result = value
  emit('update:modelValue', result)
  emit('change')
}

/* 值的双向绑定 -- end */
</script>

<template>
  <div class="ins-input-number">
    <el-input-number
      v-model="inputValue"
      v-bind="Object.assign(defaultAttrs, item.attr || {})"
      @input="change"
    />
  </div>
</template>

<style lang="scss" scoped>
.ins-input-number {
  font-family: inherit;

  /* 解决校验错误时，-+号上下移动问题 */
  :deep(.el-input-number) {
    .el-input-number__decrease,
    .el-input-number__increase {
      bottom: 1px;
      i {
        line-height: 1.2;
      }
    }
  }
}
</style>
