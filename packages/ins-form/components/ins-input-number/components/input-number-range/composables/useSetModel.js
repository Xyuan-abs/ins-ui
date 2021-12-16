import { ref, watch, nextTick } from 'vue'

let defaultInputNumberValue = undefined

/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (props, attrs, emit) {
  let startValue = ref()
  let endValue = ref()
  watch(
    () => props.modelValue,
    (cur) => {
      let sv = cur?.[0]
      let ev = cur?.[1]

      let sMaxMin = attrs[0].value ?? {}
      let eMaxMin = attrs[1].value ?? {}

      // 当输入值小于最小值 或 大于最大值 时  重置
      if (sv || sv === 0) {
        if (sv > sMaxMin.max) {
          startValue.value = sMaxMin.max
        } else if (sv < sMaxMin.min) {
          startValue.value = sMaxMin.min
        } else {
          startValue.value = sv
        }
      } else {
        startValue.value = defaultInputNumberValue
      }

      if (ev || ev === 0) {
        if (ev > eMaxMin.max) {
          endValue.value = eMaxMin.max
        } else if (ev < eMaxMin.min) {
          endValue.value = eMaxMin.min
        } else {
          endValue.value = ev
        }
      } else {
        endValue.value = defaultInputNumberValue
      }
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
        if (value || value === 0) {
          endValue.value = startValue.value
        } else {
          endValue.value = defaultInputNumberValue
        }
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
