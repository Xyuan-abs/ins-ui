import { ref, watch } from 'vue'

/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (modelValue, emit) {
  let inputValue = ref('')
  watch(
    () => modelValue,
    (cur) => {
      inputValue.value = cur ?? undefined
    },
    {
      immediate: true,
    }
  )

  function setModelValue(value) {
    emit('update:modelValue', value)
  }
  return {
    inputValue,
    setModelValue,
  }
}
