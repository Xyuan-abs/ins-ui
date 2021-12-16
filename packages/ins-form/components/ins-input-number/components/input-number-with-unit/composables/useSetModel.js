import { ref, watch } from 'vue'

let defaultInputNumberValue = undefined

/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (props, emit) {
  let inputValue = ref()
  let unitValue = ref()
  watch(
    () => props.modelValue?.[0],
    (cur) => {
      inputValue.value = cur
    },
    {
      immediate: true,
    }
  )
  watch(
    () => props.modelValue?.[1],
    (cur) => {
      unitValue.value = cur
    },
    {
      immediate: true,
    }
  )

  function inputChange(value) {
    inputValue.value = value ?? defaultInputNumberValue
    setModelValue()
  }
  function unitChange(value) {
    unitValue.value = value ?? defaultInputNumberValue
    setModelValue()
  }

  function setModelValue() {
    inputValue.value = isNaN(inputValue.value) ? defaultInputNumberValue : inputValue.value

    let result = [inputValue.value, unitValue.value]

    emit('update:modelValue', result)
  }
  return {
    inputValue,
    unitValue,
    inputChange,
    unitChange,
  }
}
