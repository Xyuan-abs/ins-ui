/* 根据 值 获取 label */
function getLabelByValue(value, options) {
  return options.find((d) => d.value === value)?.label ?? value
}

/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (item) {
  // 将 值 统一为 数组
  let valueType = Object.prototype.toString.call(item.value)
  let valueList = valueType === '[object Array]' ? item.value : [item.value]

  // 遍历 获取 值 对应的 label 用、拼接
  let result = valueList
    .map((d) => {
      let result = ''

      // 判断是否为分组
      if (item.elementType === 'group') {
        let options = (item.options ?? []).reduce((prev, cur) => prev.concat(cur.options ?? []), [])
        result = getLabelByValue(d, options)
      } else {
        let options = item.options ?? []
        result = getLabelByValue(d, options)
      }

      return result
    })
    .join('、')

  return result
}
