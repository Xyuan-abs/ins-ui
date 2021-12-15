import { ref, watch, nextTick } from 'vue'

/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (props, emit) {
  let startValue = ref()
  let endValue = ref()
  watch(
    () => props.modelValue,
    (cur) => {
      startValue.value = cur?.[0] || cur?.[0] === 0 ? cur?.[0] : undefined
      endValue.value = cur?.[1] || cur?.[1] === 0 ? cur?.[1] : undefined
    },
    {
      immediate: true,
    }
  )

  function setStartValue(value) {
    startValue.value = value

    let hasEndValue = endValue.value || endValue.value === 0
    // start > end  =>  start = end
    if (hasEndValue && value > endValue.value) {
      nextTick(() => {
        startValue.value = endValue.value
        setModelValue()
      })
    } else {
      setModelValue()
    }
  }
  function setEndValue(value) {
    endValue.value = value

    let hasStartValue = startValue.value || startValue.value === 0

    // end < start  =>  end = start
    if (hasStartValue && value < startValue.value) {
      nextTick(() => {
        endValue.value = startValue.value
        setModelValue()
      })
    } else {
      setModelValue()
    }
  }

  function setModelValue() {
    let result = [startValue.value, endValue.value]
    emit('update:modelValue', result)
  }
  return {
    startValue,
    endValue,
    setStartValue,
    setEndValue,
  }
}
