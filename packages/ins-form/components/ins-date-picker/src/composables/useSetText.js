/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (item) {
  function getText() {
    let result = ''

    if (item.elementType.includes('Range')) {
      result = `${item.value?.[0] || ''} - ${item.value?.[1] || ''}`
    } else {
      result = `${item.value}`
    }

    return result
  }
  return {
    getText,
  }
}
