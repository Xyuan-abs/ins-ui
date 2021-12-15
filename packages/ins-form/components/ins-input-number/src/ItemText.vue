<!-- 
  名称：ins-input-number--text
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月24日15:45:25
 -->
<script setup>
let props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  elementType: {
    type: String,
    default: '',
  },
})

/* 获取 文本 */
function getValueText() {
  let result = ''

  let valueMap = {
    numberWithUnit: getNumberWithUnitText,
    numberRange: getNumberRangeText,
  }
  let value = props.item.value

  result = valueMap[props.elementType] ? valueMap[props.elementType](value) : value

  return result
}
/* 获取 numberWithUnit 文本 */
function getNumberWithUnitText(value) {
  let number = value?.[0] ?? ''

  let unitValue = value?.[1] ?? ''
  let options = props.item.options
  let unit = options.find((d) => d.value === unitValue)?.label ?? ''

  return `${number}${unit}`
}
/* 获取 numberRange 文本 */
function getNumberRangeText(value) {
  let start = value?.[0] ?? ''
  let end = value?.[1] ?? ''

  return `${start} - ${end}`
}
</script>

<template>
  <span class="ins-text">
    {{ getValueText() }}
  </span>
</template>
