/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (item) {
  let result = ''

  if (item.elementType?.includes('Range')) {
    let separator = item['range-separator'] || '至'

    let startText = item.value?.[0] || ''
    let endText = item.value?.[1] || ''
    let separatorText = startText && endText ? separator : ''

    result = `${startText} ${separatorText} ${endText}`
  } else {
    result = `${item.value ?? ''}`
  }

  return result
}
