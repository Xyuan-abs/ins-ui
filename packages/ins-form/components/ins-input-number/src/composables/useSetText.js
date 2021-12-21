/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (item) {
  return getText(item)
}

function getText(item) {
  let result = ''

  let elementType = item.elementType || 'number'

  let valueMap = {
    number: getNumberText,
    numberWithUnit: getNumberWithUnitText,
    numberRange: getNumberRangeText,
  }

  result = valueMap[elementType](item)

  return result
}

/* 获取 numberWithUnit 文本 */
function getNumberText({ value }) {
  return `${value}`
}

/* 获取 numberWithUnit 文本 */
function getNumberWithUnitText({ value, options }) {
  let number = value?.[0] ?? ''

  let unitValue = value?.[1] ?? ''
  let unit = options.find((d) => d.value === unitValue)?.label ?? ''

  return `${number}${unit}`
}
/* 获取 numberRange 文本 */
function getNumberRangeText({ value }) {
  let startText = value?.[0] ?? ''
  let endText = value?.[1] ?? ''

  let separatorText = (startText || startText === 0) && (endText || endText === 0) ? '-' : ''

  return `${startText} ${separatorText} ${endText}`
}
