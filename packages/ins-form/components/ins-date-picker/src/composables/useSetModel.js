import { ref, watch } from 'vue'

/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (modelValue, emit) {
  let dateValue = ref('')
  watch(
    () => modelValue,
    (cur) => {
      dateValue.value = cur
    },
    {
      immediate: true,
    }
  )

  function setModelValue(value) {
    emit('update:modelValue', value)
  }
  return {
    dateValue,
    setModelValue,
  }
}
