/**
 * 获取表单项 类型
 * @param {Object} formItem 表单项配置
 * @returns 表单项 类型
 */
export default function (formItem) {
  let result = ''

  if (formItem.elementType?.includes('Range')) {
    let separator = formItem['range-separator'] || '至'

    let startText = formItem.value?.[0] || ''
    let endText = formItem.value?.[1] || ''
    let separatorText = startText && endText ? separator : ''

    result = `${startText} ${separatorText} ${endText}`
  } else {
    result = `${formItem.value ?? ''}`
  }

  return result
}
